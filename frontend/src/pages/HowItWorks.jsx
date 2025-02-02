import React from 'react';

function HowItWorks() {
    return (
        <section id="howItWorks" className="py-20 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeInUp">
                    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-xl text-gray-400">Simple steps to get your car cleaned</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="relative animate__animated animate__fadeInUp">
                        <div className="bg-neutral-800 rounded-lg p-8 h-full hover:bg-neutral-700 transition duration-300">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                                1
                            </div>
                            <div className="h-16 w-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Book Service</h3>
                            <p className="text-gray-400 text-center">Select your preferred service and schedule a convenient time</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="bg-neutral-800 rounded-lg p-8 h-full hover:bg-neutral-700 transition duration-300">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                                2
                            </div>
                            <div className="h-16 w-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Share Location</h3>
                            <p className="text-gray-400 text-center">Provide your location for our mobile service team</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="bg-neutral-800 rounded-lg p-8 h-full hover:bg-neutral-700 transition duration-300">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                                3
                            </div>
                            <div className="h-16 w-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Service Delivery</h3>
                            <p className="text-gray-400 text-center">Our professional team arrives and performs the service</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative animate__animated animate__fadeInUp animate__delay-3s">
                        <div className="bg-neutral-800 rounded-lg p-8 h-full hover:bg-neutral-700 transition duration-300">
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                                4
                            </div>
                            <div className="h-16 w-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">Rate & Pay</h3>
                            <p className="text-gray-400 text-center">Rate our service and complete secure payment</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 animate__animated animate__fadeInUp animate__delay-4s">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
