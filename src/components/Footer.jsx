import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-blue-400 transition duratioon-300">GitHub</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
                </div>
                <p className="text-gray-400">&copy; 2025 Muddy FOXX 001. All rights reserved.</p>
                <p className="text-gray-400 text-sm mt-2">Built with React, Vite and Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;