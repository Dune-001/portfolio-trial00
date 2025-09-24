import React from "react";

const About = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* profile image */}
                    <div className="md:w-1/3">
                        <div className="w-64 h-64 bg-gray-300 rounded-full mx-auto flex items-center">
                            <span className="text-gray-500">MY PHOTO</span>
                        </div>
                    </div>
                    {/* about text */}
                    <div className="md:w-2/3">
                        <p className="text-gray-600 text-lg mb-4">
                            Welcome to my portfolio! I'm a driven beginner web developer currently learning;
                            React, JavaScript and modern web technologies.
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            I love creating mesmerizing, smooth-operating websites and I'm excited to keep growing
                            my skills in this journey of web development in the vast ICT realm.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PYTHON</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JAVASCRIPT</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">REACT</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TAILWIND CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;