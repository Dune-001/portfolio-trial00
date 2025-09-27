import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    //checking if a link is active(using a function)
    const isActive = (path) => {
        return location.pathname === path;
    };

    //smooth scrolling for homepage sections
    const handleScroll = (sectionId) => {
        if (location.pathname !== '/') {
            //if not in home navigate to home first
            navigate('/');
            //wait for navigation to complete first then scroll
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        } else {
            //if already on homepage, scroll
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            //if already on home, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            //if on another page navigate to home and scroll to top
            navigate('/');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);

        }
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* logo/name  that links to home */}
                    <Link
                        to="/"
                        onClick={handleHomeClick}
                        className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300"
                        >
                        MUDDY FOXX 001
                    </Link>
                    {/* NAVIGATION LINKS */}
                    <div className="flex space-x-8">
                        {/* Home link */}
                        <button
                            onClick={handleHomeClick}
                            className={`transition duration-300 ${
                                isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Home
                        </button>

                        {/* About Link */}
                        <button
                            onClick={() => handleScroll('about')}
                            className={`transition duration-300 ${
                                location.pathname === '/' ? 'text-gray-600 hover:text-blue-600' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            About
                        </button>

                        {/* Projects link */}
                        <Link
                            to="/projects"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`transition duration-300" ${
                                isActive('/projects') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Projects
                        </Link>

                        {/* contact link */}
                        <Link
                            to="/contact"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`transition duration-300 ${
                                isActive('/contact') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;