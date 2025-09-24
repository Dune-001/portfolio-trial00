import React from 'react';

const Header = () => {
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* logo/name */}
                    <div className="text-2xl font-bold text-gray-800">
                        MUDDY FOXX 001
                    </div>
                    {/* NAVIGATION LINKS */}
                    <div className="flex space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition duration-300">Projects</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;