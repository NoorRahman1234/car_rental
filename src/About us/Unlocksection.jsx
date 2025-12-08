// src/components/HeroSection.js
import React from 'react';
import Vipcar from '../assets/Vedios/Vipcar.jpg'
import { Check } from 'lucide-react'; // Import the checkmark icon

// Assuming you have an image placeholder or an actual image
// Replace 'your-image-path.jpg' with the actual path to your visual asset

const BenefitItem = ({ text }) => (
  <div className="flex items-start space-x-2">
    {/* Checkmark Icon */}
    <Check className="w-5 h-5 mt-1 text-white bg-violet-600 rounded-full p-0.5 flex-shrink-0" />
    
    {/* Benefit Text */}
    <p className=" text-sm  text-left text-gray-600 leading-relaxed">
      {text}
    </p>
  </div>
);

const Unlocksection = () => {
  return (
    // Max width container for centering and padding
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:-px-8 mt-10">
        
        {/* Main Grid: Stacks vertically on mobile (default) and becomes 2 columns on medium screens (md) */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ========== 1. Content Column (Left Side) ========== */}
          <div className="md:order-1"> 
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-4xl -ml-5 text-left font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Unlock unforgettable memories on the road
            </h1>
            
            {/* Introductory Paragraph */}
            <p className="text-sm  -ml-5 text-left text-gray-500 mb-8 max-w-lg">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quisque nunc interdum gravida ullamcorper.
            </p>

            {/* Benefit Points Grid */}
            <div className="grid grid-cols-1 -ml-5 sm:grid-cols-2 gap-x-8 gap-y-6">
              <BenefitItem text="Velit semper morbi. Purus non eu cursus porttitor tristique et  gravida..." />
              <BenefitItem text="Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum" />
              <BenefitItem text="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor" />
              <BenefitItem text="Quis nunc interdum gravida ullamcorper" />
            </div>

          </div>

          {/* ========== 2. Image Column (Right Side) ========== */}
          {/* md:order-2 ensures the image appears after the content on mobile, but on the right on desktop */}
          {/* <div className="md:order-2 flex justify-center p-8">  */}
            
            {/* Image Container with Styling */}
            {/* <div className="relative w-full max-w-md -mr-30">
              {/* Aspect Ratio (e.g., a square image container) */}
              {/* <div className="relative pt-[100%] w-[550px] h-[549px] -ml-30">  */}
                
                {/* Image Placeholder or Actual Image */}
                {/* <img 
                  src={Vipcar} 
                  alt="A person driving a car on an open road." 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-black-2  "
                  // Note: The rotation is used to mimic the slight diagonal placement in the design
                /> */}
              {/* </div> */}
            {/* </div> */} 





            
<div className="relative w-full max-w-md mx-auto">
  {/* Responsive aspect ratio container */}
  <div className="relative w-full pt-[100%]"> 
    <img 
      src={Vipcar} 
      alt="A person driving a car on an open road." 
      className="absolute inset-0 w-full h-full object-cover rounded-2xl border"
    />
  </div>
</div>



            
            
          {/* </div> */}
          
        </div>
        
      </div>
    </section>
  );
};

export default Unlocksection;