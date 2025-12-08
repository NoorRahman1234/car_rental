// import React from 'react'
// import whitecar from '../assets/Fimages/whitecar.png'
// import calendar from '../assets/Fimages/calendar.png'
// import costumer from '../assets/Fimages/costumer.png'
// import speedmeter from '../assets/Fimages/speedmeter.png'

// function Factsection() {
//   return (
//     <>
//         <div className="w-full h-[486px] bg-[#5937E0] from-blue-50 to-indigo-100 flex items-center justify-center p-6 rounded-2xl">
//       <div className="max-w-4xl w-full ">
//          {/* Main Card  */}
//             {/* Header Section */}
//       <div className="max-w-4xl mx-auto mb-16">
//         <h1 className="text-4xl font-bold text-white mb-6">Facts In Numbers</h1>
//         <p className="text-white text-lg leading-relaxed max-w-3xl">
//           Annot cues has not been. Flexible spam and lactate with sapien bilendum idiamcorper in. 
//           Dism tincidunt tincidunt entat e semper fermentum.
//         </p>
//       </div>

//    {/* Stats Grid */}
//       <div className="max-w-6xl mx-auto mb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-38 -ml-25">
//           {/* Cure */}
//           <div className="text-center bg-white rounded-3xl relative w-[240px] h-[100px]">
//             <div className="text-xl font-bold text-black-800 mb-2 mt-4">540+</div>
//             <div className="text-xl text-gray-500 font-semibold ">Cars</div>
//             <div className="w-[60px] h-[60px] bg-[#FF9E0C] center ml-5 absolute top-5 rounded-xl "> <img src={whitecar} alt=""  className="ml-2 mt-2" /></div>
//           </div>
          
//           {/* Customers */}
//           <div className="text-center bg-white rounded-3xl relative w-[240px] h-[100px]">
//             <div className="text-xl font-bold text-black-800 mb-2 mt-4">20k+</div>
//             <div className="text-xl text-gray-500 font-semibold ml-8">Customers</div>
//             <div className="w-[60px] h-[60px] bg-[#FF9E0C] center ml-5 absolute top-5 rounded-xl "><img src={costumer} alt=""  className="ml-2 mt-2" /></div>
//           </div>
          
//           {/* Years */}
//           <div className="text-center bg-white rounded-3xl  relative w-[240px] h-[100px]">
//             <div className="text-xl font-bold text-black-800 mb-2 mt-4">25+</div>
//             <div className="text-xl text-gray-500 font-semibold">Years</div>
//             <div className="w-[60px] h-[60px] bg-[#FF9E0C] center ml-5 absolute top-5 rounded-xl "><img src={calendar} alt=""  className="ml-2 mt-2" /></div>
//           </div>
          
//           {/* Miles */}
//           <div className="text-center bg-white rounded-3xl relative w-[240px] h-[100px]">
//             <div className="text-xl font-bold text-black-800 mb-2 mt-4">20m+</div>
//             <div className="text-xl text-gray-500 font-semibold">Miles</div>
//             <div className="w-[60px] h-[60px] bg-[#FF9E0C] center ml-5 absolute top-5 rounded-xl "><img src={speedmeter} alt=""  className="ml-2 mt-2" /></div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div> 
//     </>
//   )
// }

// export default Factsection;










import React from 'react';
// Lucide-React se icons import kiye gaye hain
import { Car, Users, Clock, Gauge } from 'lucide-react'; 

// Statistical data ko ek array mein rakha gaya hai
const stats = [
  {
    icon: Car, // whitecar ki jagah
    value: "540+",
    label: "Cars",
    color: "bg-[#FF9E0C]", // Orange background
  },
  {
    icon: Users, // costumer ki jagah
    value: "20k+",
    label: "Customers",
    color: "bg-[#FF9E0C]",
  },
  {
    icon: Clock, // calendar ki jagah
    value: "25+",
    label: "Years",
    color: "bg-[#FF9E0C]",
  },
  {
    icon: Gauge, // speedmeter ki jagah
    value: "20m+",
    label: "Miles",
    color: "bg-[#FF9E0C]",
  },
];

function Factsection() {
  return (
    <div className="mx max-w-7xl px-4 sm:px-6 lg:px-0 py-8 sm:py-12">
        
      {/* Main Container: Custom Purple Background and Responsive Padding/Height */}
      <div className="w-full bg-[#5937E0] p-8 sm:p-12 lg:p-16 rounded-2xl">
        
        {/* Header Section (Centered) */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Facts In Numbers
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
            Annot cues has not been. Flexible spam and lactate with sapien bilendum idiamcorper in. 
            Dism tincidunt tincidunt entat e semper fermentum.
          </p>
        </div>

        {/* --- Stats Grid (Fully Responsive) --- */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16">
          
          {/* Grid Layout: Mobile 2 columns, Desktop 4 columns, with responsive gap */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            
            {stats.map((stat, index) => (
              // Individual Stat Card
              <div 
                key={index} 
                className="bg-white rounded-3xl w-full max-w-[150px] sm:max-w-[200px] 
                           h-24 sm:h-28 flex items-center shadow-xl relative overflow-hidden"
              >
                {/* 1. Icon Container (Absolute Positioning - LEFT side) */}
                <div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${stat.color} 
                              flex items-center justify-center rounded-xl absolute top-1/2 left-3 
                              transform -translate-y-1/2 shadow-md`}
                >
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* 2. Text Content (Relative Positioning - RIGHT side) */}
                <div className="flex flex-col text-left absolute top-1/2 right-0 pr-3 sm:pr-4 transform -translate-y-1/2">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
    </div> 
  );
}

export default Factsection;