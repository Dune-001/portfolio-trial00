import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // hakuna backend, tungetuma hii data uko apa
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({name: '', email: '', message:''});
    };

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
                <p className="text-center text-gray-600 mb-12">I'd love to hear from you!</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <span className="text-blue-600">📧</span>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-gray-600">daggerone24@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <span className="text-blue-600">📱</span>
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-gray-600">+254762124175</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-100cp-3 rounded-full mr-4">
                                    <span className="text-blue-600">📍</span>
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-gray-600">Your City, Country</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your message"
                                    ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact