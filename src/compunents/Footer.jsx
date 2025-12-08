
import React from 'react';
import AppStore from '../assets/footerimages/AppStore.png'
import googleplay from '../assets/footerimages/googleplay.png'
import car from '../assets/Navbarimages/car.png'
// Yahan external imports ko icon aur placeholder se replace kiya gaya hai
import { Car, AppWindow, Smartphone } from 'lucide-react'; 
// React Icons se imported
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// Placeholder for external App Store image components
const AppStorePlaceholder = ({ src, alt, className }) => (
  <div className={`w-36 h-12 bg-gray-200 rounded-lg flex items-center justify-center p-1 border border-gray-300 shadow-sm transition hover:scale-[1.02] ${className}`}>
    <AppWindow className="w-5 h-5 mr-1" />
    <span className="text-xs font-semibold text-gray-700">App Store Link</span>
  </div>
);

const GooglePlayPlaceholder = ({ src, alt, className }) => (
  <div className={`w-36 h-12 bg-gray-200 rounded-lg flex items-center justify-center p-1 border border-gray-300 shadow-sm transition hover:scale-[1.02] ${className}`}>
    <Smartphone className="w-5 h-5 mr-1" />
    <span className="text-xs font-semibold text-gray-700">Google Play Link</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white py-10 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Contact Info Section (Desktop Only) --- */}
        <div className="hidden md:flex justify-between items-center pb-8  mb-8 px-4"> 
          
          {/* Car Rental Title */}
          <div className=" -ml-5 flex items-center space-x-2 text-xl font-bold text-gray-800 ">
            {/* 'car' image placeholder (Lucide Icon) */}
            {/* <Car className="text-orange-500 w-8 h-8" /> */} <img src={car} alt="" />
            <span>Car Rental</span>
          </div>

          {/* Contact Details (Responsive Spacing) */}
          <div className="flex space-x-6 lg:space-x-12 text-left">
            
            {/* Address */}
            <div className="flex items-start space-x-2 mr-20">
              <FaMapMarkerAlt className="text-[#FF9E0C] text-2xl mt-2 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Address</p>
                <p className="text-base text-gray-800 font-bold">Oxford Ave. Cary, NC 27511</p>
              </div>
            </div>

            {/* Email (Hidden on medium screens to save space) */}
            <div className="hidden lg:flex items-start space-x-2 mr-35">
              <FaEnvelope className="text-[#FF9E0C] text-2xl mt-2 flex-shrink-0 mr-3" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Email</p>
                <p className="text-base text-gray-800 font-bold">nwiger@yahoo.com</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start space-x-2 -mr-3 ">
              <FaPhoneAlt className="text-[#FF9E0C] text-2xl mt-2 flex-shrink-0 mr-3" />
              <div>
                <p className="text-sm font-semibold text-gray-600">Phone</p>
                <p className="text-base text-gray-800 font-bold">+537 547-6401</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* --- Main Footer Content Grid --- */}
        {/* Responsive Grid: Mobile 1 column, Tablet 2 columns, Desktop 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-x-8">

          {/* 1st Column: Text and Social Media (Takes 2 columns on desktop) */}
          <div className="sm:col-span-2 md:col-span-2 order-1">
             {/* Show Title for Mobile (Hiding the large desktop section) */}
            <div className="flex items-center space-x-2 text-xl font-bold text-gray-800  md:hidden mb-4">
              <Car className="text-orange-500 w-8 h-8" />
              <span>Car Rental</span>
            </div>
            
            <p className="text-lg font-semibold text-gray-800 text-left leading-relaxed mt-1">
              Faucibus faucibus <br /> pellentesque dictum turpis.<br /> Id pellentesque turpis <br /> massa a id iaculis lorem t...
            </p>
            
            <div className="flex space-x-4 mt-13">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-orange-500 transition duration-300"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-orange-500 transition duration-300"><FaInstagram /></a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-orange-500 transition duration-300"><FaTwitter /></a>
              <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-orange-500 transition duration-300"><FaYoutube /></a>
            </div>
            
            {/* Mobile Contact Info (Shown on mobile, hidden on desktop) */}
            <div className="mt-8 space-y-3 text-sm md:hidden pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2"><FaMapMarkerAlt className="text-orange-500" /><p className="text-gray-600">Oxford Ave. Cary, NC 27511</p></div>
              <div className="flex items-center space-x-2"><FaEnvelope className="text-orange-500" /><p className="text-gray-600">nwiger@yahoo.com</p></div>
              <div className="flex items-center space-x-2"><FaPhoneAlt className="text-orange-500" /><p className="text-gray-600">+537 547-6401</p></div>
            </div>
          </div>
          
          {/* 2nd Column: Useful Links (Order changes for mobile layout) */}
          <div className="order-2  sm:order-2 md:order-3 "> 
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-left ">Useful links</h3>
            <ul className="space-y-3 text-gray-600 text-left">
              <li><a href="#" className="hover:text-orange-500 transition">About us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Gallery</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">F.A.Q</a></li>
            </ul>
          </div>

          {/* 3rd Column: Vehicles (Order changes for mobile layout) */}
          <div className="order-3 sm:order-3 md:order-4"> 
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Vehicles</h3>
            <ul className="space-y-3 text-gray-600 text-left">
              <li><a href="#" className="hover:text-orange-500 transition">Sedan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Cabriolet</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Pickup</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Minivan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">SUV</a></li>
            </ul>
          </div>

          {/* 4th Column: Download App (Order changes for mobile layout, takes full width on mobile) */}
          <div className="sm:col-span-2 md:col-span-1 order-4 sm:order-1 md:order-5 sm:mt-0 mt-4"> 
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-left sm:text-right">Download App</h3>
            
            {/* Download Links: Flex container for mobile, Right aligned for desktop */}
            <div className="flex flex-col items-start sm:items-end space-y-4 mt-19 ml-16 -px-2">
              {/* Apple App Store */}
              <a href="#" aria-label="App Store Link">
                {/* <AppStorePlaceholder />  */} <img src={AppStore} alt="" />
              </a>
              {/* Google Play */}
              <a href="#" aria-label="Google Play Link">
                {/* <GooglePlayPlaceholder /> */}<img src={googleplay} alt="" />
              </a>
            </div>
          </div>
        </div>
        
        {/* --- Copyright Section --- */}
        <div className="mt-12 pt-6">
          <p className="text-center text-sm text-gray-400 font-semibold">
            &copy; Copyright Car Rental 2024. Design by Figma.guru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;