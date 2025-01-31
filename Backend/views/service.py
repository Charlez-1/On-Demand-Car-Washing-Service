from flask import jsonify, request, Blueprint
from models import db, Service

service_bp= Blueprint('service_bp', __name__)

#Add service
@service_bp.route('/service', methods=['POST'])
def add_service():
    data = request.get_json()
    service = Service(**data)

    if not service:
        return jsonify({'message': 'Invalid data'}), 400

    check_service = Service.query.filter_by(service=service).first()

    if check_service:
        return jsonify({'message': 'Service already exists'}), 400

    else:
        db.session.add(service)
        db.session.commit()
        return jsonify({'message': 'Service added successfully'}), 201

#READ service
@service_bp.route('/service', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([{'id': service.id, 'service': service.service} for service in services]), 200

#Read - Get service by id
@service_bp.route('/service/<int:id>', methods=['GET'])
def get_service(id):
    service = Service.query.get(id)
    if not service:
        return jsonify({'message': 'Service not found'}), 404
        return jsonify({'id': service.id, 'service': service.service}), 200


#Update
@service_bp.route('/service/<int:id>', methods=['PUT'])
def update_service(id):
    service = Service.query.get(id)
    if not service:
        return jsonify({'message': 'Service not found'}), 404
    
    existing_service = Service.query.filter_by(service=service.service).first()
    if existing_service and existing_service.id != id:
        return jsonify({'message': 'Service already exists'}), 400
    
    service.name = service
    db.session.commit()
    return jsonify({'message': 'Service updated successfully'}), 200


#Delete
@service_bp.route('/service/<int:id>', methods=['DELETE'])
def delete_service(id):
    service = Service.query.get(id)
    if not service:
        return jsonify({'message': 'Service not found'}), 404

    db.session.delete(service)
    db.session.commit()
    return jsonify({'message': 'Service deleted successfully'}), 200

    db.session.commit()
    return jsonify({'message': 'Service updated successfully'}), 200