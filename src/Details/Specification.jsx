import React, { useState } from 'react';
// Assuming 'hondacar' is a placeholder image path. In a real app, you'd use a dynamic array of URLs.
// Using a placeholder from placehold.co for visual demonstration.
const placeholderImage = 'https://placehold.co/800x450/4f46e5/ffffff?text=BMW+Rental+Car';
const thumbnailImage1 = 'https://placehold.co/150x100/374151/ffffff?text=Front';
const thumbnailImage2 = 'https://placehold.co/150x100/4f46e5/ffffff?text=Interior';
import BMW from '../assets/Herosection/BMW.jpg'


// --- Icon Imports (for professional look) ---
import {
  Gauge, // Distance
  Fuel, // Fuel
  Settings, // Gear Box
  DoorOpen, // Doors
  AirVent, // Air Conditioner
  User, // Seats
  CheckCircle, // Equipment list
  Info
} from 'lucide-react';

// --- 1. Car Data Structure ---
const carDetails = {
  make: 'BMW',
  pricePerDay: 25,

  technicalSpecs: [
    { label: 'Gear Box', value: 'Automat', Icon: Settings },
    { label: 'Fuel', value: 'Petrol', Icon: Fuel },
    { label: 'Doors', value: '2', Icon: DoorOpen },
    { label: 'Air Conditioner', value: 'Yes', Icon: AirVent },
    { label: 'Seats', value: '5', Icon: User },
    { label: 'Distance', value: '500 km', Icon: Gauge },
  ],
  equipment: [
    'ABS ',
    'ABS)',
    'Air Bages',
    'Air Bages',
    'Cruise control',
    'Air Conditioner',
  ],
  images: [
    { id: 1, url: placeholderImage, alt: 'Main View' },
    { id: 2, url: thumbnailImage1, alt: 'Front View' },
    { id: 3, url: thumbnailImage2, alt: 'Interior View' },
    
  ]
};

// --- 2. Reusable Specification Item Component ---
const SpecItem = ({ label, value, Icon }) => (
  // Spec box is fully responsive
  <div className="bg-gray-100 p-3  sm:p-4 rounded-xl flex flex-col items-left justify-center text-left  hover:shadow-xl transition duration-300">
    {/* Icon */}
    <div className="text-xl sm:text-2xl mb-1 text-indigo-600">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
    </div>
    <div className="text-sm font-bold text-gray-800 whitespace-nowrap">{value}</div>
    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
  </div>
);

// --- 3. Main Car Rental Card Component (CarRentalCard.jsx) ---
const CarRentalCard = () => {
  // Simple state to track which thumbnail is selected (for highlighting)
  const [selectedImageId, setSelectedImageId] = useState(carDetails.images[0].id);

  return (
    // Responsive outer container with fluid height
    <div className="p-4 sm:p-8 md:p-12 bg-white min-h-screen font-sans mb-60">
      
      {/* Outer Card Container (Centered and Max Width) */}
      <div className="bg-white p-6  -mt-19 md:p-10 lg:p-12 max-w-7xl mx-auto">
        
        {/* Responsive Grid Layout: Stacked on mobile, 2/3 and 1/3 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


{/* === LEFT COLUMN: Image, Price, Thumbnails, & Description === */}
<div className="lg:col-span-2 space-y-6 px-4 lg:px-0">

  {/* Header: BMW & Price */}
  <div className="text-left mt-10">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
      {carDetails.make}
    </h1>

    <p className="text-2xl sm:text-3xl font-bold text-indigo-700 mt-1">
      ${carDetails.pricePerDay}
      <span className="text-lg sm:text-xl font-medium text-gray-500"> / day</span>
    </p>
  </div>

  {/* Main Car Image */}
  <div className="w-full max-w-[480px] sm:max-w-full mx-auto bg-gray-200 rounded-xl shadow-inner overflow-hidden">
    <img
      src={BMW}
      alt={
        carDetails.images.find((img) => img.id === selectedImageId)?.alt ||
        "Main Car View"
      }
      className="w-full h-auto object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = placeholderImage;
      }}
    />
  </div>

  {/* Thumbnail Images */}
  <div className="flex space-x-3 overflow-x-auto pb-2">
    {carDetails.images.map((img) => (
      <div
        key={img.id}
        onClick={() => setSelectedImageId(img.id)}
        className={`
          shrink-0 
          w-20 h-14 
          sm:w-28 sm:h-18 
          md:w-36 md:h-20 
          bg-gray-400 rounded-lg cursor-pointer 
          transition duration-300 overflow-hidden shadow-md
          hover:shadow-xl
          ${selectedImageId === img.id ? "ring-2 ring-indigo-500" : "opacity-80 hover:opacity-100"}
        `}
      >
        <img
          src={BMW}
          alt={img.alt}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/150x100/374151/ffffff?text=Thumb";
          }}
        />
      </div>
    ))}
  </div>
</div>


{/* === RIGHT COLUMN: Specs & Equipment === */}
<div className="lg:col-span-1 space-y-10 px-4 lg:px-0 mt-10">

  {/* Technical Specification Section */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-5 text-left">
      Technical Specifications
    </h2>

    {/* Specs Grid - Fully Responsive */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {carDetails.technicalSpecs.map((spec, index) => (
        <SpecItem key={index} {...spec} />
      ))}
    </div>

    {/* Rent Button */}
    <button className="w-full sm:w-auto mt-8 px-8 sm:px-20 bg-indigo-600 hover:bg-indigo-700 
      text-white font-semibold text-lg py-3 rounded-xl shadow-lg transition 
      duration-300 transform hover:scale-[1.01] active:scale-[0.99]">
      Rent This Car Now
    </button>
  </div>

  {/* Car Equipment Section */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-5 text-left">
      Car Equipment
    </h2>

    {/* Equipment Grid - Auto Responsive */}
    <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-6">
      {carDetails.equipment.map((item, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 text-sm text-gray-700"
        >
          <CheckCircle className="w-5 h-5 text-white bg-blue-600 rounded-full mt-1" />
          <span className="font-medium">{item}</span>
        </div>
      ))}
    </div>
  </div>

</div>

        </div>
      </div>
    </div>
  );
};

export default CarRentalCard;
















// import React from 'react';
// import hondacar from '../assets/Herosection/hondacar.jfif'
// // Note: If you want to use proper icons instead of emojis, you would import them here 
// // (e.g., import { Car, Fuel, Door } from 'lucide-react';)

// // --- 1. Car Data Structure ---
// const carDetails = {
//   make: 'BMW',
//   pricePerDay: 25,
//   technicalSpecs: [
//     { label: 'Gear Box', value: 'Automat', icon: '⚙️' },
//     { label: 'Fuel', value: 'Petrol', icon: '⛽' },
//     { label: 'Doors', value: '2', icon: '🚪' },
//     { label: 'Air Conditioner', value: 'Yes', icon: '❄️' },
//     { label: 'Seats', value: '5', icon: '💺' },
//     { label: 'Distance', value: '500', icon: '📏' },
//   ],
//   equipment: [
//     'ABS',
//     'Air Bags',
//     'Cruise Control',
//     'ABS', // Duplicated items for layout purposes, reflecting the image
//     'Air Bags',
//     'Air Conditioner',
//   ],
// };

// // --- 2. Reusable Specification Item Component ---
// const SpecItem = ({ label, value, icon }) => (
//   // Applying Tailwind classes to match the card structure
//   <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm border border-gray-100">
//     {/* Placeholder for Icon (using emoji for simplicity) */}
//     <div className="text-2xl mb-1 text-indigo-600">{icon}</div> 
//     <div className="text-sm font-semibold text-gray-800">{value}</div>
//     <div className="text-xs text-gray-500">{label}</div>
//   </div>
// );

// // --- 3. Main Car Rental Card Component (CarRentalCard.jsx) ---
// const CarRentalCard = () => {
//   return (
//     // Max width container for centering and readability
//     <div className="w-full  h-[860px] mx-auto my-10 p-4 sm:p-6  ">
      
//       {/* Outer Card Container */}
//       <div className="bg-white -mt-23 p-6 md:p-8 mr-">

//         {/* Responsive Grid Layout: Stacked on mobile, 2/3 and 1/3 columns on desktop */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* === LEFT COLUMN: Image & Price (2/3 width on large screens) === */}
//           <div className="lg:col-span-2 space-y-4">
            
//             {/* Header: BMW & Price */}
//             <div>
//               <h1 className="text-3xl font-extrabold text-gray-900 text-left">{carDetails.make}</h1>
//               <p className="text-2xl font-bold text-indigo-700 mt-1 text-left">
//                 ${carDetails.pricePerDay}
//                 <span className="text-xl font-medium text-gray-500"> / day</span>
//               </p>
//             </div>
            
//             {/* Main Car Image Placeholder (Greyed out as in the image) */}
//             <div className="w-[536px] h-[303px] bg-gray-400 rounded-xl my-4 flex items-center justify-center">
//           <img src={hondacar} alt=""  
//           className='w-full h-full'/>
//             </div>

//             {/* Thumbnail Images */}
//             <div className="flex space-x-3">
//               {/* In a real app, you would map over image sources here */}
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-[140px] h-[100px] bg-gray-400 rounded-lg  cursor-pointer hover:opacity-100 transition duration-1520">
//                   <img src={hondacar} alt=""  className='w-full h-full rounded-lg'/>
//                   <span className="sr-only">Car Image Thumbnail {i}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* === RIGHT COLUMN: Specs & Equipment (1/3 width on large screens) === */}
//           <div className="lg:col-span-1 space-y-6">
            
//             {/* Technical Specification Section */}
//             <div className='-ml-40 '>
//               <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 text-left">Technical Specification</h2>
              
//               {/* Grid for 6 specs (2 columns, 3 rows) */}
//               <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full h-[148px] mt-10 ">
//                 {carDetails.technicalSpecs.map((spec, index) => (
//                   <SpecItem key={index} {...spec} />
//                 ))}
//               </div>
              
//               {/* Rent Button */}
//               <button className="w-[290px] h-[50px] bg-[#5937E0] hover:bg-indigo-900 text-white font-semibold py-3 rounded-lg mt-52 mr-55 cursor-pointer">
//                 Rent a car
//               </button>
//             </div>

//             {/* Car Equipment Section */}
//             <div className='-ml-38 mr-42 '>
//               <h2 className="text-xl font-bold text-gray-800  border-b pb-2 pt-4 text-left mb-10 ">Car Equipment</h2>
              
//               {/* Grid for Equipment Checkboxes (2 columns) */}
//               <div className="grid grid-cols-2 gap-y-3 gap-x-6">
//                 {carDetails.equipment.map((item, index) => (
//                   <div key={index} className="flex items-center space-x-2 text-sm text-gray-500 font-semibold ">
//                     {/* Checkmark Icon (SVG) */}
//                     <svg className="w-4 h-4 text-white flex-shrink-0 bg-blue-800 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     <span className="truncate">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarRentalCard;












// import React from 'react';
// import hondacar from '../assets/Herosection/hondacar.jfif'
// import { Settings, Fuel, CarFront, Snowflake, Users, Ruler, CheckCircle } from 'lucide-react';

// // --- 1. Car Data Structure ---
// const carDetails = {
//     make: 'BMW ',
//     pricePerDay: 25,
//         technicalSpecs: [
//         // Using Lucide icons for a professional look
//         { label: 'Gear Box', value: 'Automatic', icon: Settings },
//         { label: 'Fuel', value: 'Petrol', icon: Fuel },
//         { label: 'Doors', value: '2', icon: CarFront },
//         { label: 'Air Conditioner', value: 'Yes', icon: Snowflake },
//         { label: 'Seats', value: '5', icon: Users },
//         { label: 'Distance', value: '500 km', icon: Ruler },
//     ],
//     equipment: [
//         'Anti-lock Braking System (ABS)',
//         'Dual Front Air Bags',
//         'Adaptive Cruise Control',
//         'Traction Control',
//         'Integrated GPS Navigation',
//         'Automatic Climate Control',
//     ],
// };

// // Placeholder image URL since local imports like '../assets/...' break in a single file output
// const THUMBNAIL_IMAGE_URL = "https://placehold.co/120x80/475569/ffffff?text=Thumb";

// // --- 2. Reusable Specification Item Component ---
// const SpecItem = ({ label, value, IconComponent }) => (
//     // Responsive grid item ensuring good spacing and centering
//     <div className="bg-gray-200 p-3 sm:p-4 rounded-xl flex flex-col items-left text-left justify-center transition ">
//         {/* Icon */}
//         <div className="text-3xl mb-2 text-indigo-600">
//             <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
//         </div>
//         <div className="text-base font-bold text-gray-800">{value}</div>
//         <div className="text-xs text-gray-500 mt-0.5">{label}</div>
//     </div>
// );

// // --- 3. Main Car Rental Card Component ---
// const App = () => {
//     return (
//         // Main container uses flex and min-h-screen to center the content vertically
//         <div>

//             {/* Outer Card Container - Responsive width and rounded corners */}
//             <div className="bg-white max-w-6xl mx-auto  overflow-hidden  w-full h-[750px]">

//                 <div className="p-6 md:p-10 -mt-5">
                    
//                     {/* Header: BMW & Price */}
//                     <header className="mb-6">
//                         <h1 className="text-4xl font-extrabold text-gray-900 text-left">
                        
//                             {carDetails.make}
                            
//                         </h1>
//                         <p className="text-3xl font-bold text-indigo-700 mt-2 text-left">
//                             ${carDetails.pricePerDay}
//                             <span className="text-xl font-medium text-gray-500"> / day</span>
//                         </p>
//                     </header>

//                     {/* Responsive Grid Layout: Stacks on mobile, 2/3 (Left) and 1/3 (Right) on large screens */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 bg-amber-800">

//                         {/* === LEFT COLUMN: Image & Description (lg:col-span-2) === */}
//                         <div className="lg:col-span-2 space-y-6">
                            
//                             {/* Main Car Image (using full width on all sizes) */}
//                             <div className="w-[536px] h-[303px] aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg">
//                                 <img src={hondacar} alt="" className='w-full h-full' />
//                             </div>

//                             {/* Thumbnail Images */}
//                             <div className="flex space-x-3 overflow-x-auto pb-2">
//                                 {/* Mapped to create 4 thumbnails */}
//                                 {[1, 2, 3].map((i) => (
//                                     <div 
                                  
//                                         key={i} 
//                                         className=" w-[32px] h-[20px] sm:w-40 sm:h-24 bg-gray-300 rounded-lg cursor-pointer "
//                                     >
//                                        <img src={hondacar} alt="" />
//                                     </div>
//                                 ))}
//                             </div>

                           
//                         </div>
//                         <div>
//                         {/* === RIGHT COLUMN: Specs, Equipment & CTA (lg:col-span-1) === */}
//                         <div className="lg:col-span-1 space-y-10 w-[636px] h-[388px] bg-yellow-200  -mr-80 ">
                            
//                             {/* Technical Specification Section */}
                          
//                                 <h2 className="text-2xl font-bold text-gray-800 mb-5 pb-3 text-left -mt-30 ">Technical Specifications</h2>
                                
//                                 {/* Responsive Grid for Specs: 2 columns on mobile/desktop */}
//                                 <div className="grid grid-cols-3  gap-4 w-[300px] h-[148px]  text-left ">
//                                     {carDetails.technicalSpecs.map((spec, index) => (
//                                         <SpecItem key={index} label={spec.label} value={spec.value} IconComponent={spec.icon} />
//                                     ))}
//                                 </div>
                            
                            
//                             {/* Car Equipment Section */}
//                           <div className='mt-60 text-left mr-100 -ml-40 '>
//                                {/* Rent Button (Call to Action) */}
//                             <button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-xl hover:active:scale-95">
//                                 Rent Car Now
//                             </button>
                        
//                                 <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b pb-3">Car Equipment</h2>
                                
//                                 {/* Grid for Equipment Checkboxes (2 columns) */}
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-3 gap-x-6">
//                                     {carDetails.equipment.map((item, index) => (
//                                         <div key={index} className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
//                                             {/* Checkmark Icon */}
//                                             <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
//                                             <span>{item}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>

                           
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;