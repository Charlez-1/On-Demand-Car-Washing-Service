import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Booking = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    dateTime: '',
    location: '',
    status: 'pending', // Default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend API
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful booking creation
        alert('Booking created successfully!');
        setFormData({
          serviceType: '',
          dateTime: '',
          location: '',
          status: 'pending',
        });
      } else {
        // Handle errors
        alert('Failed to create booking. Please try again.');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        Back to Home
      </Link>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Service Type</option>
            <option value="basic">Basic Wash</option>
            <option value="premium">Premium Wash</option>
            <option value="deluxe">Deluxe Wash</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your location"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;