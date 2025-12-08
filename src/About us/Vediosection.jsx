// src/components/LandingSection.js
import React from 'react';
import { Play } from 'lucide-react'; // A popular icon library
// Use the imported variable for the video source
import CarShowvedio from '../assets/Vedios/Carshowvedio.webm' 

const LandingSection = () => {
  return (
    <section className="py-12 md:py-24 bg-yellow-00">
      <div className="w-full mx-auto px-4  -mt-20 sm:px-6 lg:px-8">
        
        {/* Video Player Section */}
        <div className=" relative w-full overflow-hidden rounded-xl shadow-2xl mb-12 md:mb-20"> 
          {/* Aspect Ratio Box (16:9) to maintain video shape */}
          <div className="relative pt-[56.25%]"> 
            
            {/* The actual video tag goes here, covering the entire area */}
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              src={CarShowvedio} 
              controls // Adds the standard play/pause, volume, fullscreen controls
            //   poster="/path/to/optional/thumbnail.jpg" 
            // 
               // Optional: A static image to show before the video starts
            >
              Your browser does not support the video tag.
            </video>
            
          </div>
        </div>

        {/* Statistics Section - Responsive Layout (The rest of your code remains the same) */}
        <div className="grid grid-cols-1 gap-x-105 text-center -mb-20 sm:grid-cols-3">
          
          {/* Statistic 1: Happy Customers */}
          <div className="flex flex-col items-center ">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#5937E0]">
              20k+
            </p>
            <p className="text-sm  tracking-wider  text-black font-extrabold  mt-2">
              Happy customers
            </p>
          </div>

           {/* Statistic 2: Happy Customers */}
          <div className="flex flex-col items-center  ">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#5937E0]">
              540+
            </p>
            <p className="text-sm  tracking-wider text-black font-extrabold  mt-2">
              Count of cars
            </p>
          </div>


         {/* Statistic 1: Happy Customers */}
          <div className="flex flex-col items-center text-right">
            <p className="text-4xl sm:text-5xl font-extrabold text-[#5937E0] -mr-8">
              25+
            </p>
            <p className="text-sm  tracking-wider  text-black font-extrabold mt-2">
              Years of experience
            </p>
          </div>
          {/* ... (rest of the stats) ... */}
          
        </div>
      </div>
    </section>
  );
};

export default LandingSection;