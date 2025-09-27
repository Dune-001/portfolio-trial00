import React from 'react';

const Header = () => {

    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                        <button onClick={() => handleScroll('home')} className="text-gray-600 hover:text-blue-600 transition duration-300">Home</button>
                        <button onClick={() => handleScroll('about')} className="text-gray-600 hover:text-blue-600 transition duration-300">About</button>
                        <button onClick={() => handleScroll ('projects')} className="text-gray-600 hover:text-blue-600 transition duration-300">Projects</button>
                        <button onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;