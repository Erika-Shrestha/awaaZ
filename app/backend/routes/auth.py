from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from database import get_db
from typing import Annotated
from models import Users
from schemas import UserCreate, UserLogin 
from passlib.hash import bcrypt

#Initialize APIRouter
router = APIRouter()

#Hint extra information of types
db_dependency = Annotated[Session, Depends(get_db)]

#Registration Route
@router.post('/signup')
def signup(user: UserCreate, db: db_dependency):
    try:
        existing_user = db.query(Users).filter(
            (Users.username == user.username)|(Users.email == user.email)|(Users.phone == user.phone)
        ).first()

        #Checks user exists or not
        if existing_user:
            raise HTTPException(status_code=400, detail="Account with username, phone or email alreay registered")

        #Assign admin with product domain
        if user.email.endswith("@awaaz.com"):
            role = "admin"
        else:
            role = "customer"

        hashed_password = bcrypt.hash(user.password[:72])

        #Creates new user by mapping with db
        new_user = Users(
            user_name=user.name,
            email=user.email,
            phone=user.phone,
            username=user.username,
            password=hashed_password,
            avatar=user.avatar,
            role=role
        )

        #Add new users to the db 
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        return {"message": "User registered successfully", "user_id": new_user.user_id}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

#Login Route
@router.post("/login")
def login(user: UserLogin, db: db_dependency):

    existing_user = db.query(Users).filter(Users.username == user.username).first()

    if not existing_user:
        raise HTTPException(status_code=401, detail="The entered user does not exists")

    # Verify password
    if not bcrypt.verify(user.password, existing_user.password):
        raise HTTPException(status_code=401, detail="Your password is incorrect")

    return {
        "message": "Login successful",
        "user_id": existing_user.user_id,
        "username": existing_user.username,
        "role": existing_user.role
    }