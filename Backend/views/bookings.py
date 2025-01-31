from flask import jsonify, request, Blueprint
from models import db, User, Booking, Service
from flask_jwt_extended import jwt_required, get_jwt_identity

bookings_bp= Blueprint('bookings_bp', __name__)

#create
@bookings_bp.route('/bookings', methods=['POST'])
@jwt_required
def create_booking():
    data = request.get_json()
    current_user_id = get_jwt_identity()

    service_type = data['service_type']
    service_id = data['service_id']
    date_time = data['date_time']
    location = data['location']

    check_service_id = Service.query.filter_by(id=service_id)

    if not check_service_id:
        return jsonify({"error": "Service not found"}), 404
    
    else:
        new_booking = Booking(service_type, service_id=current_user_id, date_time=date_time, location=location)
        db.session.add(new_booking)
        db.session.commit()
        return jsonify({"message": "Booking created successfully"}), 201
    
    #read - Get all bookings
    @bookings_bp.route('/bookings', methods=['GET'])
    @jwt_required()
    def get_all_bookings():
        current_user_id = get_jwt_identity()

        bookings = Booking.query.filter_by(service_id= current_user_id)
        
        booking_list = [
            {
            'id': booking.id,
            'service_type': booking.service_type,
            'service_id': booking.service_id,
            'date_time' : booking.date_time,
            'location': booking.location,
            'user': {'id': booking.user_id, 'username': booking.user.username, 'email': booking.user.email},
            
            } for booking in bookings
        ]
        return jsonify(booking_list), 200


#Read - Get Booking by id
@bookings_bp.route('/bookings/<int:booking_id>', methods=['GET'])
@jwt_required
def get_booking(booking_id):
    current_user_id = get_jwt_identity()

    booking = Booking.query.filter_by(id=booking_id, user_id=current_user_id).first()
    if booking:
        booking_details = {
            'id': booking.id,
            'service_type': booking.service_type,
            'service_id': booking.service_id,
            'date_time': booking.date_time,
            'location': booking.location
        }
        return jsonify(booking_details), 200

    else:
        return jsonify({"error": "Booking not found"}), 404

#Update
@bookings_bp.route('/bookings/<int:booking_id>', methods=['PUT'])
@jwt_required
def update_booking(booking_id):
    current_user_id = get_jwt_identity()

    data = request.get_json()
    booking = Booking.query.get(id=booking_id)

    if booking and booking.user_id == current_user_id:
        booking.service_type = data.get('service_type', booking.service_type)
        booking.service_id = data.get('service_id', booking.service_id)
        booking.date_time = data.get('date_time', booking.date_time)
        booking.location = data.get('location', booking.location)

        check_booking_id = User.query.get(booking_id)

        if check_booking_id:
            return jsonify({"error": "User with this id already exists"}), 400

            db.session.commit()
            return jsonify({"message": "Booking updated successfully"}), 200

#Delete
@bookings_bp.route('/bookings/<int:booking_id>', methods=['DELETE'])
@jwt_required
def delete_booking(booking_id):
    current_user_id = get_jwt_identity()

    booking = Booking.query.filter_by(id=booking_id, user_id=current_user_id).first()
    if not booking:
        return jsonify({"error": "Booking not found"}), 404

    db.session.delete(booking)
    db.session.commit()
    return jsonify({"message": "Booking deleted successfully"}), 200