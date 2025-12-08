import React from 'react';

// --- Placeholder for the Car Image URL ---
// const CAR_IMAGE_URL = "https://images.unsplash.com/photo-1627885012588-466046e01a1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
import backblurcar from '../assets/Vedios/backblurcar.png'
// --- Placeholder for the Tire Track Pattern URL ---
// You MUST replace this with the actual path to your tire track SVG/PNG file.
// For the final result, you might add this to your Tailwind config for custom utility classes.
const TIRE_TRACK_PATTERN_URL = "/path/to/tire-track-pattern.svg";

const CarPromoCard = () => {
  return (
    // Outer container: Centers the card on the page
    <div className="flex justify-center p-4 sm:p-8 min- items-center bg-gray-00">

      {/* Main Card Container: Fixed width on desktop, responsive rounding and shadow */}
      <div className="
        w-[1296px] -mr-8 -ml-8 // Max width for the whole card on large screens
        bg-[#5937E0] 
        rounded-2xl 
         
        overflow-hidden
        relative ">
        {/* Background Pattern Layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${TIRE_TRACK_PATTERN_URL}')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px', // Adjust size for better pattern visibility
            // Optional: You might need to adjust the blend mode or color in a custom CSS file
          }}
        ></div>

        {/* Content and Image Container: Flex layout for responsiveness */}
        <div className="relative z-10 flex flex-col md:flex-row items-center text-left">
          
          {/* Left Content Column (70% width on medium/desktop, Full width on mobile) */}
          <div className="w-full md:w-7/12 p-8 sm:p-12 text-white">
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Looking for a car?
            </h1>
            
            {/* Phone Number */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              +537 547-6401
            </h2>
            
            {/* Description */}
            <p className="text-gray-200 text-base mb-8 max-w-md">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in...
            </p>
            
            {/* CTA Button */}
            <button className="
              px-8 py-3 
              bg-[#FF9E0C] hover:bg-orange-600 // The bright orange button color
              text-white font-semibold 
              rounded-lg
              shadow-lg
              transition duration-200
            ">
              Book now
            </button>
          </div>

          {/* Right Image Column (30% width on medium/desktop, Hidden or small on mobile) */}
          <div className="w-full md:w-5/12 h-64 md:h-full relative overflow-hidden hidden md:block">
            {/* Blurred Car Image */}
            <img
              className=" inset-0 w-[500px] h-[350px] object-cover blur-md scale-80" // blur-md gives the soft focus
              src={backblurcar}
              alt="Blurred blue sports car"
            />
            {/* Optional: Add a dark overlay on the blurred image for better contrast */}
            <div className="absolute inset-0 bg-indigo-00/40"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarPromoCard;