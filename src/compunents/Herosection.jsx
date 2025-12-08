
import React from 'react';

function Herosection() {
  // Mock state for form inputs (for demonstration, actual state management will be required)
  const [formData, setFormData] = React.useState({
    carType: '',
    rentalPlace: '',
    returnPlace: '',
    startDate: '',
    returnDate: '',
  });

  return (
    // Main Container: Responsive Padding, Custom Color, Dynamic Height
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-30 sm:-mt-30">
      <div 
        className="  w-full  min-h-[636px] flex flex-col lg:flex-row items-center justify-between 
                   p-8 sm:p-12 lg:p-16 bg-[#5937E0] rounded-3xl text-white relative overflow-hidden"
      >
        
        {/* --- Left Side: Hero Text Content --- */}
        <div className="lg:w-1/2 max-w-xl text-center lg:text-left mb-10 lg:mb-0">
          
          {/* Heading: Responsive Font Size */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Experience the road like never before
          </h1>
          
          {/* Description Text: Hardcoded <br/> removed for better flow */}
          <p className="text-base sm:text-lg leading-relaxed mb-8 opacity-90">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor 
            tristique et gravida. Quis nunc interdum gravida ullamcorper.
          </p>
          
          {/* Button: Custom Orange Color */}
          <button className="bg-[#FF9E0C] text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:bg-orange-600 cursor-pointer">
            View all cars
          </button>
        </div>


        {/* --- Right Side: Booking Card --- */}
        {/* Mobile: Full width, centered. Desktop: Fixed width, side-by-side */}
        <div className="w-[350px] max-w-md  bg-white text-black p-6 sm:p-8 rounded-2xl shadow-2xl">
          <h2 className="text-xl font-bold text-center mb-6">Book your car</h2>

          <div className="flex flex-col gap-4">
            
            {/* Car Type Select */}
            <select 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-600   transition duration-150"
              value={formData.carType}
              onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
            >
              <option value="" disabled>Car type</option>
              <option value="corolla">Corolla</option>
              <option value="honda">Honda</option>
            </select>
            
            {/* Place of Rental Select */}
            <select 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-600  focus:border-blue-500 transition duration-150"
              value={formData.rentalPlace}
              onChange={(e) => setFormData({ ...formData, rentalPlace: e.target.value })}
            >
              <option value="" disabled>Place of rental</option>
              <option value="peshawar">Peshawar</option>
              <option value="islamabad">Islamabad</option>
            </select>
            
            {/* Place of Return Select */}
            <select 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-600  focus:border-blue-500 transition duration-150"
              value={formData.returnPlace}
              onChange={(e) => setFormData({ ...formData, returnPlace: e.target.value })}
            >
              <option value="" disabled>Place of return</option>
              <option value="kohat">Kohat</option>
              <option value="lahore">Lahore</option>
            </select>
            
            {/* Date Inputs */}
            <input 
              type="date" 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-600  focus:border-blue-500 transition duration-150" 
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            <input 
              type="date" 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-600  focus:border-blue-500 transition duration-150" 
              value={formData.returnDate}
              onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
            />

            {/* Book Now Button */}
            <button className="w-full bg-[#FF9E0C] text-white font-bold py-3 rounded-lg mt-2 shadow-md transition duration-300 hover:bg-orange-600 cursor-pointer">
              Book now
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Herosection;
