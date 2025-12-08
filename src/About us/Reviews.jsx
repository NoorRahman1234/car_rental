// src/components/TestimonialsSection.js
import React from 'react';
import { Quote } from 'lucide-react'; // Import the quote icon
import profileimage from '../assets/Vedios/profileimage.jpg'


// Helper component for a single testimonial card
const TestimonialCard = ({ quote, company, name, avatar }) => (
  // h-full ensures all cards in a row are the same height
  <div className="bg-gray-100 rounded-2xl  flex flex-col  w-[full] h-[480px] overflow-hidden ">
    
    {/* Review Content Area */}
    <div className="p-8 md:p-10 ">
      {/* Quote Icon */}
      <Quote 
        className="w-8 h-8 text-violet-600 mb-4" 
        fill="#7c3aed" // Hex code for violet-600
        strokeWidth={0} // Fill the icon solid
      />
      
      {/* Quote Text */}
      <p className="text-gray-700 leading-relaxed italic">
        {quote}
      </p>
    </div>

    {/* Customer Footer (Purple Section) */}
    <div className="bg-[#5937E0] text-white pt-8 pb-6 px-8 relative mt-auto">
      
      {/* Avatar Image Container - Overlapping Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={profileimage}
        //   alt={`Avatar of ${name}`}
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4 text-center">
        <p className="text-xs uppercase opacity-80 mb-1">{company}</p>
        <p className="text-lg font-bold tracking-wide">{name}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const reviews = [
    {
      quote: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
      company: "Kuphal LLC",
      name: "Emanuel Boyle",
    //   avatar: Avatar1,
    },
    {
      quote: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
      company: "Glover - Orn",
      name: "River Graves",
    //   avatar: Avatar2,
    },
    {
      quote: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
      company: "Haag LLC",
      name: "Ryder Malone",
    //   avatar: Avatar3,
    },
  ];

  return (
    // Section Container: Adds vertical padding and centers the content
    <section >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mr-7 gap-10 -8 -ml-6">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 md:mb-16">
          Reviews from our customers
        </h2>
        
        {/* Testimonials Grid: Responsive 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {reviews.map((review, index) => (
            <TestimonialCard 
              key={index}
              quote={review.quote}
              company={review.company}
              name={review.name}
              avatar={review.avatar}
            />
          ))}
          
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;