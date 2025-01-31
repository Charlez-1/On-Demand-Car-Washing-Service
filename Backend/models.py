from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

metadata = MetaData()

db = SQLAlchemy (metadata=metadata)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    role = db.Column(db.String, default='user', nullable=False)
    is_approved = db.Column(db.Boolean, default=False)

    bookings = db.relationship('Booking', backref='user', lazy=True)


class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service_type = db.Column(db.String(128), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(128), nullable=False)
    status = db.Column(db.String(128), default='pending', nullable=False)

    user = db.relationship('User', backref='bookings', lazy=True)


class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(128), nullable=False)
    price = db.Column(db.Float, nullable=False)


#
class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)