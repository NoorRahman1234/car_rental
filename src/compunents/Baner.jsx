import React from 'react';
// Agar aapne lucide-react install kar liya hai, to yeh icon use hoga
import { Search } from 'lucide-react'; 
import backcar from '../assets/footerimages/backcar.png'

const Baner = () => {
  return (
    // Main Container: Purple background, rounded corners, padding
    <div className=" py-8    mx-auto">
      <div className=" w-full bg-[#5937E0] text-white p-6 sm:p-10 lg:p-16 rounded-xl shadow-2xl overflow-hidden relative ">
        
        {/* --- Background Design Elements --- */}
        
       
        
       
        {/* --- Main Content (Text, Form, and Car) --- */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Text and Search Form */}
          <div className="md:w-3/5 lg:w-[800px] mb-8 md:mb-0 text-center md:text-left">
            
            {/* Heading (Responsive Text Size) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Enjoy every mile with <br className="hidden sm:inline" /> adorable companionship.
            </h2>
            
            {/* Description Text */}
            <p className="mt-4 text-base sm:text-lg opacity-90 max-w-md mx-auto md:mx-0">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat.
            </p>

            {/* Search Form (Responsive Layout) */}
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-sm sm:max-w-md mx-auto md:mx-0">
              {/* Input Field */}
              <div className="relative flex-grow">
            
              </div>

<div className="
  w-full sm:w-[464px] 
  h-auto sm:h-[60px] 
  rounded-lg 
  bg-white 
  p-2
">

  <button
    type="submit"
    className="
      w-full sm:w-[100px] 
      h-[40px] 
      bg-[#FF9E0C] 
      hover:bg-orange-600 
      text-white 
      font-semibold 
      px-6 
      rounded-lg 
      transition 
      duration-300 
      flex 
      items-center 
      justify-center 
      sm:ml-80 
      mt-1
    "
  >
    {/* Icon only on small screens */}
    {Search && <Search className="w-5 h-5 mr-2 sm:hidden" />}
    Search
  </button>

</div>

            </form>
          </div>

          {/* Right Side: Car Silhouette */}
          <div className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end relative h-40 sm:h-64 md:h-80">
            
         <img src={backcar} alt=""/>
        
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;