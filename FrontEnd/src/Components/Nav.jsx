import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link to='/'>
                    <div className="flex items-center">
                        <span className="text-white text-lg font-semibold">FoodArc</span>
                    </div>
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                    <a href="/" className="text-gray-300 hover:text-white px-3 py-2">Menu</a>
                    <a href="/" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
                    <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2">Login</Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                    >
                        {isOpen ? (
                            <IoClose />
                        ) : (
                            <GiHamburgerMenu />
                        )}
                    </button>
                </div>
            </div>

            {/* Responsive Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-800">
                    <a href="/" className="block text-gray-300 hover:text-white px-3 py-2">Home</a>
                    <a href="/" className="block text-gray-300 hover:text-white px-3 py-2">Menu</a>
                    <a href="/" className="block text-gray-300 hover:text-white px-3 py-2">Contact</a>
                    <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;
