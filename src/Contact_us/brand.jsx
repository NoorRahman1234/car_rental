// import React from 'react'
// // Logo images
// import Logo1 from '../assets/Pagesimages/Logo1.png'
// import Logo2 from '../assets/Pagesimages/Logo2.png'
// import Logo3 from '../assets/Pagesimages/Logo3.png'
// import Logo4 from '../assets/Pagesimages/Logo4.png'
// import Logo5 from '../assets/Pagesimages/Logo5.png'
// import Logo6 from '../assets/Pagesimages/Logo6.png'

// function brand() {
//   return (
//     <div>
//        <div  className='w-full h-[174px] bg-gray-50 rounded-3xl'>
//               <div className='flex flex-row gap-32 px-4 py-14'>
//            <a href=""> <img src={Logo1} alt="" /></a>
//            <a href=""> <img src={Logo2} alt="" /></a>
//            <a href=""> <img src={Logo3} alt="" /></a>
//            <a href=""> <img src={Logo4} alt="" /></a>
//            <a href=""> <img src={Logo5} alt="" /></a>
//            <a href=""> <img src={Logo6} alt="" /></a>
//             </div>
//             </div>
      
//     </div>
//   )
// }

// export default brand
















// import React from 'react';
// // Logo images
// import Logo1 from '../assets/Pagesimages/Logo1.png';
// import Logo2 from '../assets/Pagesimages/Logo2.png';
// import Logo3 from '../assets/Pagesimages/Logo3.png';
// import Logo4 from '../assets/Pagesimages/Logo4.png';
// import Logo5 from '../assets/Pagesimages/Logo5.png';
// import Logo6 from '../assets/Pagesimages/Logo6.png';

// // Consolidating logos into an array makes the render cleaner
// const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

// function Brand() {
//   return (
//     <div className='p-4 md:p-8 lg:p-12'> {/* Outer padding for spacing around the component */}
      
//       {/* Main Container: Fixed height removed for responsiveness */}
//       <div 
//         className='
//           w-[1250px] h[176px]
//           bg-gray-300 
        
//           rounded-3xl 
//           p-6 sm:p-8 md:p-10 /* Responsive inner padding */
          
//           /* Grid Layout for Responsiveness */
//           grid 
//           grid-cols-2    /* Default (Mobile): 2 columns */
//           sm:grid-cols-3 /* Small/Medium Screens: 3 columns */
//           lg:grid-cols-6 /* Large Screens (Desktop): 6 columns */
          
//           /* Gap Management */
//           gap-8 sm:gap-12 lg:gap-10
          
//           /* Centering items */
//           items-center 
//           justify-items-center
//           -ml-18
        
          
//         '
//       >
//         {logos.map((Logo, index) => (
//           // Mapping and rendering each logo
//           <a key={index} href="#" 
//              className="
//                 block w-full max-w-[100px] h-auto 
//                 opacity-100 hover:opacity-100 
//                 transition duration-300 ease-in-out
                
//              ">
//             <img 
//               src={Logo} 
//               alt={`Brand Logo ${index + 1}`} 
//               className='w-full h-full object-contain'
//             />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Brand;






import React from 'react';
// Logo images
import Logo1 from '../assets/Pagesimages/Logo1.png';
import Logo2 from '../assets/Pagesimages/Logo2.png';
import Logo3 from '../assets/Pagesimages/Logo3.png';
import Logo4 from '../assets/Pagesimages/Logo4.png';
import Logo5 from '../assets/Pagesimages/Logo5.png';
import Logo6 from '../assets/Pagesimages/Logo6.png';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

function Brand() {
  return (
    <div className=" bg-gray-400 p-4 md:p-8 lg:p-12 flex justify-center">
      
      {/* Main Container */}
      <div
        className="
          w-full md:w-full lg:w-[1296px]         /* Laptop / large screens width */
          h-auto md:h-auto lg:h-[174px]          /* Laptop / large screens height */
          bg-gray-300 
          rounded-3xl 
          p-6 sm:p-8 md:p-10
          grid
          grid-cols-2       /* Mobile */
          sm:grid-cols-3    /* Tablets */
          lg:grid-cols-6    /* Desktop */

          gap-8 sm:gap-12 lg:gap-10
          items-center
          justify-items-center
        "
      >
        {logos.map((Logo, index) => (
          <a
            key={index}
            href="#"
            className="
              block 
              w-full max-w-[90px] sm:max-w-[100px] md:max-w-[110px] lg:max-w-[120px]
              h-auto
              transition duration-300 ease-in-out
            "
          >
            <img
              src={Logo}
              alt={`Brand Logo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Brand;
