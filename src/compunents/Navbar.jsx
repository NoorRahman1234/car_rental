
import React, { useState } from 'react';
// Lucide-React se icons import kiye gaye hain
import { Car, PhoneCall, Menu, X } from 'lucide-react'; 
import car from '../assets/Navbarimages/car.png'
import contact from '../assets/Navbarimages/contact.png'
import { Link } from 'react-router-dom'; // <--- Zaroori Import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Nav Links data: 'href' ko 'path' aur 'to' use karne ke liye update kiya gaya hai
  // Agar aapko alag pages chahiye to in paths ko apne App.jsx Routes se match karein.
  const navLinks = [
    { name: "Home", path: "/", isBold: false }, // Root path
    { name: "Vehicles", path: "/vehicles", isBold: true }, // Example path: /shop
    { name: "Detail", path: "/details", isBold: false }, 
    { name: "About us", path: "/about", isBold: false },
    { name: "Contact Us", path: "/contact", isBold: false },
  ];

  return (
    <>
      {/* Navbar Container: Fixed position, High Z-Index, Consistent Padding */}
      <nav className="fixed top-0 left-0 w-full h-24 bg-white shadow-lg z-1000">
        <div className="mx-auto max-w-7xl h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
          
          {/* 1. Logo Section (Left) - Logo par bhi Home page ki routing add ki gayi hai */}
          <Link to="/" className="flex items-center gap-2">
            <img src={car} alt="Car Rental Logo" />
            <h1 className="font-extrabold text-2xl text-gray-800">
              Car Rental
            </h1>
          </Link>
          
          {/* 2. Desktop Navigation Links */}
          <ul className="hidden md:flex gap-8 lg:gap-10 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={`cursor-pointer transition duration-200 hover:text-blue-600 ${link.isBold ? 'font-bold text-blue-600' : ''}`}
              >
                {/* <a> tag ki jagah <Link> component use kiya gaya hai */}
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          
          {/* 3. Contact Info (Right) */}
          <div className="hidden lg:flex items-center gap-3">
            <img src={contact} alt="Contact Icon" />
            <div className="leading-tight">
              <p className="text-sm text-gray-500">Need help?</p>
              <p className="font-bold text-lg text-black">+996 247-1680</p>
            </div>
          </div>

          {/* 4. Hamburger Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none transition duration-200" 
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

        </div>
      </nav>

      {/* --- Mobile Menu (Dropdown) --- */}
      <div 
        className={`fixed top-24 left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out z-40 
        ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-center text-lg font-medium">
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              className={`py-2 border-b border-gray-100 transition duration-200 hover:bg-gray-50 ${link.isBold ? 'font-bold text-blue-600' : 'text-gray-700'}`}
              onClick={toggleMenu} // Close menu on click
            >
              {/* <a> tag ki jagah <Link> component use kiya gaya hai */}
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}

          {/* Mobile Contact Info */}
          <li className="pt-4 flex flex-col items-center">
            <p className="text-sm text-gray-500">Need help?</p>
            <p className="font-bold text-xl text-black flex items-center gap-2">
                <img src={contact} alt="Contact Icon" />
                +996 247-1680
            </p>
          </li>
        </ul>
      </div>

      {/* Optional: Spacer for content below the fixed Navbar */}
      <div className="h-24"></div> 
    </>
  );
}

export default Navbar;