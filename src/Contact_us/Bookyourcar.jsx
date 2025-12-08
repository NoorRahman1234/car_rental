import React from 'react';
// Assuming you use Lucide icons (or replace with your preferred icons)
import { Calendar } from 'lucide-react'; 
import CarCEO from '../assets/Contactimages/CarCEO.jpg'

const BookingFormCard = () => {
  // Placeholder data for dropdowns
  const carTypes = ['Sedan', 'SUV', 'Hatchback', 'Luxury'];
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Miami'];

  return (
    // Outer container: Full page structure (A to Z)
    <div className="bg-gray-00 py-12 px-4  -mt-10 sm:px-6 lg:px-8">
      
      {/* 1. Header Section (Contact Us, Breadcrumb) */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Contact Us
        </h1>
        {/* Breadcrumb Navigation */}
        <p className="text-sm text-gray-600">
          <a href="#" className="hover:text-cyan-600">Home</a> / <span className="font-semibold">Contact Us</span>
        </p>
      </div>

      {/* 2. Main Card Section (Booking Form + Image) */}
      <div className="max-w-9xl ">
        <div className="
          bg-white 
          rounded-2xl  
          overflow-hidden 
          -mr-8
          -ml-8
          flex flex-col md:flex-row // Stacked on mobile, side-by-side on desktop
        ">
          
          {/* Left Side: Booking Form */}
          <div className="  rounded-2xl w-[416px] h-[503px]  md: p-6 sm:p-10 bg-[#5937E0] ">
            <h2 className="text-3xl font-bold text-white mb-6">
              Book your car
            </h2>

            {/* Form Fields */}
            <form className="space-y-4">
              
              {/* Custom Styled Select Field (Car Type) */}
              <select
                className="w-full bg-[#694BE3] text-white p-3  rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
                style={{ backgroundImage: 'none' }} // Override native select arrow if needed
                defaultValue=""
              >
                <option value="" disabled hidden>Car type</option>
                {carTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>

              {/* Place of rental */}
              <select
                className="w-full bg-[#694BE3] text-white p-3 rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
                defaultValue=""
              >
                <option value="" disabled hidden>Place of rental</option>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              
              {/* Place of return (Same structure) */}
              <select
                className="w-full bg-[#694BE3] text-white p-3 rounded-2xl appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
                defaultValue=""
              >
                <option value="" disabled hidden>Place of return</option>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>

              {/* Date Input Container (Rental Date) */}
              <div className="relative">
                <input
                  type="date"
                  placeholder="Rental date"
                  className="w-full bg-[#694BE3] text-white p-3 rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 custom-date-input"
                />
                <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white h-5 w-5 pointer-events-none" />
              </div>

              {/* Date Input Container (Return Date) */}
              <div className="relative">
                <input
                  type="date"
                  placeholder="Return date"
                  className="w-full bg-[#694BE3] text-white p-3 rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 custom-date-input"
                />
                <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white h-5 w-5 pointer-events-none" />
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-orange-300 hover:bg-orange-600 text-white font-semibold rounded-2xl shadow-md transition duration-200"
              >
                Book now
              </button>
            </form>
          </div>

          {/* Right Side: Blurred Image */}
          <div className="w-full md: h-[503px]  ml-5 rounded-xl md: relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover  scale-105"
              src={CarCEO}
              alt="Blurred car interior"
            />
            {/* Optional: Dark overlay for a better blurred effect */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormCard;
