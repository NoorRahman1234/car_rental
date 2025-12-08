import React from 'react'
// import Img from '../assets/Herosection/Img.png'
import gear from '../assets/Herosection/gear.png'
import Clippathgroup from '../assets/Herosection/Clippathgroup.png'
import g1593 from '../assets/Herosection/g1593.png'
import crollaimage from '../assets/Herosection/crollaimage.jfif'
import hondacar from '../assets/Herosection/hondacar.jfif'
import toyotacar from '../assets/Herosection/toyotacar.jfif'
function Carsection() {
  return (
    <div>
        <div className="w-full py-10 bg-white text-left ">

    <div className="w-full  px-4 sm:px-6 lg:px-8 py-8 md:py-4 -ml-8 -mt-20">
      <div className="flex justify-between items-end  pb-">
        
        {/* Main Heading */}
        <h2 className="text-4xl  ml-5 sm:text-2xl lg:text-2xl font-bold  text-black">
          Choose the car that <br /> suits you
        </h2>
        
        {/* View All Link */}
        <a 
          href="#" 
          className="flex items-center space-x-1 text-sm font-bold text-gray-800 hover:text-black -mr-12 "
          aria-label="View All Cars"
        >
          <span>View All</span>
          {/* <FaArrowRight className="text-xs ml-1" /> */}
        </a>
      </div>
    </div>




            
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-30 gap-y-10 text-center -px-6 -ml-1 ml-5 ">

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
                                    <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
                                        Automat
                                    </span>
                                    <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                                        PB 95
                                    </span>
                                    <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
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


                    {/* Cart 2*/}
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
                                    <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
                                        Automat
                                    </span>
                                    <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                                        PB 95
                                    </span>
                                    <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
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
                                    <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
                                        Automat
                                    </span>
                                    <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                                        PB 95
                                    </span>
                                    <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
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
                    <div className="w-[350px] h-[513px] bg-white rounded-lg shadow-lg  border border-gray-200 flex flex-col">
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
                                    <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
                                        Automat
                                    </span>
                                    <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                                        PB 95
                                    </span>
                                    <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
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
                                    <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
                                        Automat
                                    </span>
                                    <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                                        PB 95
                                    </span>
                                    <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
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
                    {/* Cart 6*/}
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
                                    <span><img src={gear} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
                                        Automat
                                    </span>
                                    <span><img src={Clippathgroup} alt="" /></span> <span className=" text-gray-500 px-1 py-2 text-base text-xs">
                                        PB 95
                                    </span>
                                    <span><img src={g1593} alt="" /></span> <span className="text-gray-500 px-1 py-2  text-base text-xs">
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
    </div>
  )
}

export default Carsection












