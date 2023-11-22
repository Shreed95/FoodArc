import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FoodArc. All Rights Reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <a href="/" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
