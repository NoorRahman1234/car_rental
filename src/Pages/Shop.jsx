
import React from 'react';
// import Img from '../assets/Herosection/Img.png'
import gear from '../assets/Herosection/gear.png';
import Clippathgroup from '../assets/Herosection/Clippathgroup.png';
import g1593 from '../assets/Herosection/g1593.png';
import crollaimage from '../assets/Herosection/crollaimage.jfif';
import hondacar from '../assets/Herosection/hondacar.jfif';
import toyotacar from '../assets/Herosection/toyotacar.jfif';

// Logo images
import Logo1 from '../assets/Pagesimages/Logo1.png'
import Logo2 from '../assets/Pagesimages/Logo2.png'
import Logo3 from '../assets/Pagesimages/Logo3.png'
import Logo4 from '../assets/Pagesimages/Logo4.png'
import Logo5 from '../assets/Pagesimages/Logo5.png'
import Logo6 from '../assets/Pagesimages/Logo6.png'

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

function Carsection() {
  return (
    <div>
  
      <div className="w-full py-10 bg-white text-left ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-40 gap-y-10 text-center -px-6 ml-8 ">

          {/* Cart 1 */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={crollaimage} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Mercedes</h2>
                  <p className="text-lg text-gray-600">Sedan</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$25</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>


          {/* Cart 2 */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={toyotacar} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Mercedes</h2>
                  <p className="text-lg text-gray-600">Sport</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$50</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Cart 3 */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={hondacar} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Mercedes</h2>
                  <p className="text-lg text-gray-600">Sedan</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$45</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Cart 4 */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={hondacar} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Porsche</h2>
                  <p className="text-lg text-gray-600">SUV</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$40</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart 5 */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={crollaimage} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Toyota </h2>
                  <p className="text-lg text-gray-600">Sedan</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$35</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart 6 */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={toyotacar} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Porsche</h2>
                  <p className="text-lg text-gray-600">SUV</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$50</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart 7 (New) */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={hondacar} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Audi</h2>
                  <p className="text-lg text-gray-600">Sedan</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$30</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart 8 (New) */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={crollaimage} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Ford</h2>
                  <p className="text-lg text-gray-600">Coupe</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$60</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Cart 9 (New) */}
          <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section - Placeholder for car image */}
            <img src={toyotacar} alt="" />

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Jeep</h2>
                  <p className="text-lg text-gray-600">4x4</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#5937E0]">$48</p>
                  <p className="text-gray-600">per day</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4 mt-5">
                  <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Automat
                  </span>
                  <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                    PB 95
                  </span>
                  <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2 text-base text-xs">
                    Air Conditioner
                  </span>
                </div>
              </div>

              {/* Additional spacing to push button to bottom */}
              <div className="flex-1"></div>

              {/* Button Section */}
              <div className="mt-auto">
                <button className="w-full bg-[#5937E0] hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-lg cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div  className='w-full h-[174px] bg-gray-50 rounded-3xl'>
        <div className='flex flex-row gap-32 px-4 py-14'>
     <a href=""> <img src={Logo1} alt="" /></a>
     <a href=""> <img src={Logo2} alt="" /></a>
     <a href=""> <img src={Logo3} alt="" /></a>
     <a href=""> <img src={Logo4} alt="" /></a>
     <a href=""> <img src={Logo5} alt="" /></a>
     <a href=""> <img src={Logo6} alt="" /></a>
      </div>
      </div> */}


       <div className='p-4 md:p-8 lg:p-12'> {/* Outer padding for spacing around the component */}
      
      {/* Main Container: Fixed height removed for responsiveness */}
      <div 
        className='
          w-full h-full
          bg-gray-300 
        
          rounded-3xl 
          p-6 sm:p-8 md:p-10 /* Responsive inner padding */
          
          /* Grid Layout for Responsiveness */
          grid 
          grid-cols-2    /* Default (Mobile): 2 columns */
          sm:grid-cols-3 /* Small/Medium Screens: 3 columns */
          lg:grid-cols-6 /* Large Screens (Desktop): 6 columns */
          
          /* Gap Management */
          gap-8 sm:gap-12 lg:gap-10
          
          /* Centering items */
          items-center 
          justify-items-center
          -ml-5
        
          
        '
      >
        {logos.map((Logo, index) => (
          // Mapping and rendering each logo
          <a key={index} href="#" 
             className="
                block w-full max-w-[100px] h-auto 
                opacity-100 hover:opacity-100 
                transition duration-300 ease-in-out
                
             ">
            <img 
              src={Logo} 
              alt={`Brand Logo ${index + 1}`} 
              className='w-full h-full object-contain'
            />
          </a>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Carsection;