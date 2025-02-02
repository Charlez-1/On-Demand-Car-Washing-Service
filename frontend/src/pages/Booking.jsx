import React from 'react';

function Booking() {
    const services = [
        {
            title: "Basic Wash",
            description: "Exterior wash, tire cleaning, and basic interior vacuum",
            price: "$29.99",
            features: ["Exterior Wash", "Tire Cleaning", "Basic Vacuum"],
            color: "blue"
        },
        {
            title: "Premium Wash",
            description: "Complete exterior & interior cleaning with waxing",
            price: "$49.99",
            features: ["All Basic Features", "Interior Detailing", "Wax Protection"],
            color: "purple"
        },
        {
            title: "Full Detail",
            description: "Complete car detailing with premium services",
            price: "$89.99",
            features: ["All Premium Features", "Paint Protection", "Engine Cleaning"],
            color: "green"
        }
    ];

    return (
        <section id="booking" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeInUp">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Booking Options</h2>
                    <p className="text-xl text-gray-600">Choose from our range of professional car washing services</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 animate__animated animate__fadeInUp animate__delay-${index}s`}>
                            <div className="p-8">
                                <div className={`h-16 w-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-6`}>
                                    <svg className={`h-8 w-8 text-${service.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-3xl font-bold text-gray-900 mb-6">{service.price}</p>
                                <button className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700 text-black font-semibold py-3 px-6 rounded-lg transition duration-300`}>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Booking;
