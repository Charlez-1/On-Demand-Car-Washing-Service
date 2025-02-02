import React from "react";

function Home() {
  return (
    <section id="hero" className="min-h-screen bg-neutral-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-20">
        <div className="lg:w-1/2 space-y-8 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Car Wash<br />
            <span className="text-blue-500">At Your Doorstep</span>
          </h1>
          <p className="text-xl text-gray-300">
            Book your car wash service anytime, anywhere. Professional cleaning at your convenience with our on-demand mobile car wash service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 hover:bg-blue-500 rounded-lg font-semibold text-lg transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Trusted Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate__animated animate__fadeInRight">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-neutral-800 rounded-lg p-8">
              <form className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Book Your Car Wash</h3>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your location" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date & Time</label>
                  <input type="datetime-local" className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 focus:border-blue-500 focus:ring-blue-500">
                    <option>Basic Wash</option>
                    <option>Premium Wash</option>
                    <option>Full Detail</option>
                  </select>
                </div>
                <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition duration-300 ease-in-out">
                  Schedule Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
