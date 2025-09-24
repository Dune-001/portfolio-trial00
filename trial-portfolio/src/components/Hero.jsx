import React from "react";

const Hero = () => {
    return (
        <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Hello, I'm <span className="text-yellow-300">MUDDY FOXX 001</span></h1>
                <p className="text-xl md:text-2xl mb-8">An Aspiring Data Scientist and Machine Learning Engineer</p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300">
                    View My Work.
                </button>
            </div>
        </section>
    );
};

export default Hero;