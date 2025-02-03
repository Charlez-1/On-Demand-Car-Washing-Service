# On-Demand-Car-Washing-Service
# On-Demand Car Washing Service

## Problem Statement
Car owners often struggle to find time to visit car wash stations, especially during busy schedules, while traditional car washing services may not offer convenient booking or location-based scheduling.

## Solution
The On-Demand Car Washing Service provides a platform for users to book and schedule car washing services at home or the office, offering flexibility and convenience.

## User Stories
- **User Registration:** As a user, I want to register on the platform so that I can book car washing services.
- **Login:** As a user, I want to log in to my account to manage my bookings.
- **Book Service:** As a user, I want to book a car wash service at my desired time and location.
- **View Booking plans:** As a user, I want to view my car washing bookings plans.
- **Pay for Service:** As a user, I want to make payments for the service once completed.

## Models
### User Model
- `user_id` (Primary Key)
- `email` (String, unique)
- `password` (String)
- `role` (String, default: user)
- `is_verified` (Boolean)

### Booking Model
- `booking_id` (Primary Key)
- `user` (ForeignKey to User)
- `service_type` (String)
- `date_time` (DateTime)
- `location` (String)
- `status` (Enum: pending/complete/cancelled)

### Service Model
- `service_id` (Primary Key)
- `title` (String)
- `description` (String)
- `price` (Decimal)

## Installation & Setup
### Prerequisites
- Python installed
- Flask installed (`pipenv install flask flask-migrate flask-sqlalchemy`)

### Running the Backend
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/on-demand-car-wash.git
   cd on-demand-car-wash/backend
   ```
2. Install dependencies:
   ```sh
   pipenv install flask requirements
   ```
3. Start Flask Server:
   ```sh
   flask run
   ```

### Running the Frontend
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React App:
   ```sh
   npm start
   ```

## API Endpoints
### Users
- `POST /users/register` - Register a new user
- `POST /users/login` - Login user
- `GET /users/:id` - Get user details

### Bookings
- `POST /bookings` - Create a new booking
- `GET /bookings/:id` - Get booking details
- `DELETE /bookings/:id` - Cancel booking

### Services
- `GET /services` - Get available services

## Contributing
Feel free to contribute to this project. Fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.


# Author: Elvis Kuria