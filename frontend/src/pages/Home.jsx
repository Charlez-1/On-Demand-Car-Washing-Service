// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-5">On-Demand Car Washing Service</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book Your Car Wash Now!</h5>
              <p className="card-text">Get your car washed at your doorstep with our on-demand car washing service.</p>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;