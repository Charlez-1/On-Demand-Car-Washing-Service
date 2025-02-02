import React from 'react';

function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeInUp">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
                    <p className="text-xl text-gray-600">Choose the perfect package for your vehicle</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Package */}
                    <div className="relative animate__animated animate__fadeInUp">
                        <div className="border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-gray-900">$29</span>
                                <span className="text-gray-500 ml-2">/wash</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Exterior Wash
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Wheel Cleaning
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Hand Dry
                                </li>
                            </ul>
                            <button className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 font-semibold hover:bg-blue-700 transition duration-300">
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* Premium Package */}
                    <div className="relative animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="border-2 border-blue-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                                Popular
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Package</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-gray-900">$49</span>
                                <span className="text-gray-500 ml-2">/wash</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    All Basic Features
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Interior Vacuum
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Dashboard Cleaning
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Wax Protection
                                </li>
                            </ul>
                            <button className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 font-semibold hover:bg-blue-700 transition duration-300">
                                Select Plan
                            </button>
                        </div>
                    </div>

                    {/* Deluxe Package */}
                    <div className="relative animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Deluxe Package</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold text-gray-900">$89</span>
                                <span className="text-gray-500 ml-2">/wash</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    All Premium Features
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Full Interior Detail
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Paint Protection
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Engine Bay Cleaning
                                </li>
                            </ul>
                            <button className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 font-semibold hover:bg-blue-700 transition duration-300">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
