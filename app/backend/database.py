from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Database password is encoded as %40 for @ 
URL_DATABASE = 'postgresql://postgres:Erik%401234@localhost:5432/awaaz_db'

# Creates an engine to manage database connection
engine = create_engine(URL_DATABASE)

# Creates a database sessions to perform TCL (Transfer Control Language)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# All the database table inherits from this base class model
Base = declarative_base() 

#Helper Method to manage sessions 
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

        