import React from 'react';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="animate__animated animate__fadeInLeft">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                        <p className="text-xl text-gray-600 mb-8">Have questions? We're here to help you with anything you need.</p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-blue-100 rounded-full p-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-blue-100 rounded-full p-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">support@carwash.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="bg-blue-100 rounded-full p-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                                    <p className="text-gray-600">123 Cleaning Street, Washville, ST 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate__animated animate__fadeInRight">
                        <form className="bg-neutral-900 rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:border-blue-500 focus:ring-blue-500" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:border-blue-500 focus:ring-blue-500" placeholder="How can we help?" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:border-blue-500 focus:ring-blue-500" placeholder="Your message here..."></textarea>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
