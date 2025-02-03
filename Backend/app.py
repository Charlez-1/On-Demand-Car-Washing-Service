from flask import Flask, jsonify, request
from flask_migrate import Migrate
from models import db, TokenBlocklist
from flask_jwt_extended import JWTManager
from datetime import timedelta
from views.user import user_bp
from views.bookings import bookings_bp
from views.service import service_bp
from views.auth import auth_bp

app = Flask(__name__)

#Migration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///car-wash.db'
migrate = Migrate(app, db)
db.init_app(app)


#Jwt
app.config['JWT_SECRET_KEY'] = 'jkjsdhhfjdhkhudshjdhjhfd'  
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=2)

jwt = JWTManager(app)
jwt.init_app(app)

#import all functions in views
from views import *


app.register_blueprint(user_bp)
app.register_blueprint(bookings_bp)
app.register_blueprint(service_bp)
app.register_blueprint(auth_bp)

@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
    jti = jwt_payload["jti"]
    token = db.session.query(TokenBlocklist.id).filter_by(jti=jti).scalar()

    return token is not None