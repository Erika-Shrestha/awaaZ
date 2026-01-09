from pydantic import BaseModel, EmailStr, field_validator
import re
from datetime import datetime

#Required regex
ONLY_ALPHA = r'^[A-Za-z\s]+$'
ONLY_NUM = r'^\d{10}$'
USERNAME_REGEX = r'^[a-zA-Z0-9_]{3,50}$'
PASSWORD_REGEX= r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$'
PHONE_REGEX = r'^\d{10}$'

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    username: str
    password: str
    avatar: str
    role: str = "customer" 
    registered_date: datetime = None

    @field_validator('name')
    def validate_name(value):
        if len(value) < 3 or len(value) > 50:
            raise ValueError("Name must be 3-50")
        
        if not re.match(ONLY_ALPHA, value):
            raise ValueError("Name must be alphabetic only")
        return value
    
    @field_validator('username')
    def validate_username(value):
        #Value must be 3-50 characters, letters, numbers, underscores
        if not re.match(USERNAME_REGEX, value):
            raise ValueError("Username must be 3-50 with letters, numbers, underscores only")
        return value
    
    @field_validator('phone')
    def validate_phone(value):
        if not re.match(PHONE_REGEX, value):
            raise ValueError("Phone number must be exactly 10 digits")
        return value
    
    @field_validator('password')
    def validate_password(value):
        if not re.match(PASSWORD_REGEX, value):
            raise ValueError(
                "Password must be at least 12 characters, include uppercase, lowercase, number and special character"
            )
        return value
    
class UserLogin(BaseModel):
    username: str
    password: str