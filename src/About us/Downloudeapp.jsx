// // src/components/AppDownloadSection.js
// import React from 'react';

// // Replace these paths with your actual asset locations
// import Phone from '../assets/Vedios/phone.png'; 
// import Appstore from '../assets/Vedios/Appstore.png'; 
// import GooglePlay from '../assets/Vedios/GooglePlay.png';

// const AppDownloadSection = () => {
//   return (
//     // Outer Container for overall padding and centering
//     <section className=" py-16 md:py-24 bg-gray-00">
//       <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">   {/* We adjust the image position using negative margin to stick it out of the purple container */}
//             <img 
//               src={Phone} 
//               alt="Mobile phone mockup displaying the app" 
//               className="w-[267px] h-[540px] ml-30 -mb-100 -mt-40 object-contain drop-shadow-2xl "
//             />

        
//         {/* Main Card Container: Rounded corners and purple background */}
//         <div 
//           className="  w-[1210px]  h-[444px] bg-[#5937E0] rounded-3xl overflow-hidden shadow-2xl 
//                      p-8 md:p-12 lg:p-16 -ml-8 -mt-10
//                      flex flex-col md:flex-row items-center justify-between"
//           // Optional: Add a subtle texture/pattern background (like tire tracks) 
//           // via a Tailwind background image utility or custom CSS here if needed.
//           // Example: style={{ backgroundImage: "url('/path/to/tire-track-pattern.svg')" }}
//         >
            
//           {/* ========== 1. Phone Mockup (Left Side on Desktop) ========== */}
//           <div className=" order-2 md:order-  w-full max-w-xs md:max-w-sm lg:max-w-md -mt-24 md:mt-0 md:-ml-12 lg:-ml-20 flex-shrink-0">
         
//           </div>

//           {/* ========== 2. Content (Right Side on Desktop) ========== */}
//           {/* md:order-2 ensures content appears after the phone on mobile, but on the right on desktop */}
//           <div className="order-1 md:order-2 text-white max-w-xl md:pl-8 lg:pl-0 text-left ">
            
//             {/* Sub-headline */}
//             <p className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2">
//               Download Our App
//             </p>
            
//             {/* Main Headline */}
//             <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
//               Download our app
//             </h2>
            
//             {/* Body Text */}
//             <p className="text-base mb-8 opacity-90">
//               Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget urna fusce vulputate at risus
//             </p>
            
//             {/* Store Buttons */}
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              
//               {/* App Store Button */}
//               <a href="YOUR_APP_STORE_LINK" target="_blank" rel="noopener noreferrer">
//                 <img 
//                   src={Appstore} 
//                   alt="Download on the App Store" 
//                   className="h-12 hover:scale-[1.05] transition-transform duration-300" 
//                 />
//               </a>
              
//               {/* Google Play Button */}
//               <a href="YOUR_GOOGLE_PLAY_LINK" target="_blank" rel="noopener noreferrer">
//                 <img 
//                   src={GooglePlay} 
//                   alt="Get it on Google Play" 
//                   className="h-12 hover:scale-[1.05] transition-transform duration-300"
//                 />
//               </a>
//             </div>

//           </div>
          
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default AppDownloadSection;









import React from "react";
import Phone from "../assets/Vedios/phone.png";
import Appstore from "../assets/Vedios/Appstore.png";
import GooglePlay from "../assets/Vedios/GooglePlay.png";

const AppDownloadSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Phone Image (Responsive + Centered on Mobile) */}
        <img
          src={Phone}
          alt="App phone mockup"
          className="w-48 sm:w-64 md:w-72 lg:w-[190px]  mb-20 mx-auto md:mx-0 md:absolute md:-left-10 lg:left-20 -mt-10 -mb-30 sm:-mt-16 md:-mt-24 drop-shadow-2xl z-10"
        />

        {/* Main Purple Card */}
        <div className="bg-[#5937E0] rounded-3xl shadow-2xl mt-12 sm:mt-20 md:mt-0 p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center md:items-start justify-between">

          {/* --- Content Section --- */}
          <div className="text-white max-w-xl mt-10 md:mt-0 md:ml-48 lg:ml-120  text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider opacity-80 mb-2">
              Download Our App
            </p>

            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
              Download our app
            </h2>

            <p className="text-sm sm:text-base opacity-90 mb-6">
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="block">
                <img
                  src={Appstore}
                  alt="App Store"
                  className="h-12 hover:scale-105 transition-transform"
                />
              </a>

              <a href="#" className="block">
                <img
                  src={GooglePlay}
                  alt="Google Play"
                  className="h-12 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
