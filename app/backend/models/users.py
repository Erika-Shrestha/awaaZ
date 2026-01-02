from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, DECIMAL, SmallInteger, ForeignKey
from database import Base
from sqlalchemy.sql import func

class Users(Base):
    __tablename__ = 'users'
    __table_args__ = {"schema": "awaaz"}

    user_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_name = Column(String(255), nullable=False)
    phone = Column(String(10), unique=True, nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    username = Column(String(50), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    avatar = Column(Text, nullable=False)
    registered_date = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    role = Column(String(10), default="customer")


