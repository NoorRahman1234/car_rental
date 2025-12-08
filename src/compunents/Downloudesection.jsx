import React from 'react';

// App Store aur Google Play ke buttons ke liye images.
// Asal project mein aapko yeh images apne assets folder mein rakhni hongi.
// // Yahan hum sirf placeholders use kar rahe hain.
import googleplay from '../assets/footerimages/googleplay.png'
import AppStore from '../assets/footerimages/AppStore.png'

const DownloadApp = () => {
  return (
    // Main container jo padding aur background control karta hai
    // Aur bade screens par content ko center karta hai (max-w-6xl).
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Flex container jo text content aur mobile mockups ko side-by-side rakhta hai bade screens par.
            Small screens par yeh stack ho jayega (flex-col). */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Text Content and Download Buttons */}
          <div className="md:w-1/2 md:pr-12 lg:pr-16 mb-10 md:mb-0">
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-left">
              Download <br className="hidden sm:inline" /> mobile app
            </h2>
            
            {/* Descriptive Text */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-lg text-left">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna.
            </p>
            
            {/* Download Buttons Container (Flex for horizontal layout) */}
            <div className="flex flex-wrap gap-4 mt-8">
              
              {/* App Store Button */}
              <a 
                href="#" 
                className="inline-block transition duration-300 transform hover:scale-105"
              >
                <img 
                  src={AppStore} 
                  alt="Download on the App Store" 
                  className="h-12 w-auto" 
                />
              </a>

              {/* Google Play Button */}
              <a 
                href="#" 
                className="inline-block transition duration-300 transform hover:scale-105"
              >
                <img 
                  src={googleplay} 
                  alt="Get it on Google Play" 
                  className="h-12 w-auto" 
                />
              </a>
            </div>
          </div>

          {/* Right Side: Mobile Mockups */}
          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            
            {/* Mobile Phone Mockup 1 (Background/Back phone) */}
            <div 
              className="w-56 h-[480px] bg-white border-8 border-black rounded-[40px] shadow-2xl 
                       relative top-0 right-0 md:right-auto md:mr-10 lg:mr-16 
                       transform translate-x-3 translate-y-3 md:translate-x-0 md:translate-y-0 opacity-70 "
              style={{ 
                clipPath: 'inset(0 0 0 0 round 40px)', 
                zIndex: 1
              }}
            >
              {/* Notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl"></div>
              {/* Screen Content Placeholder */}
              <div className="absolute inset-4 bg-gray-100 rounded-[30px] flex items-center justify-center text-gray-400 text-sm">
                Screen 2
              </div>
            </div>

            {/* Mobile Phone Mockup 2 (Foreground/Front phone) */}
            <div 
              className="w-56 h-[480px] bg-white border-8 border-black rounded-[40px] shadow-2xl 
                       absolute z-50 -mt-5" 
            >
              {/* Notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl "></div>
              {/* Screen Content Placeholder */}
              <div className="absolute inset-4 bg-gray-100 rounded-[30px] flex items-center justify-center text-gray-400 text-sm">
                Screen 1
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;