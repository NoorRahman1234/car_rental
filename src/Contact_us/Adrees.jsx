import React from 'react';
// Assuming you use Lucide icons (or replace with your preferred icons/SVGs)
import { MapPin, Mail, Phone, Clock } from 'lucide-react'; 

// Data structure for the four contact items
const contactData = [
  {
    icon: MapPin,
    title: "Address",
    details: "Oxford Ave, Cary, NC 27511",
  },
  {
    icon: Mail,
    title: "Email",
    details: "nwiger@yahoo.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+537 547-6401",
  },
  {
    icon: Clock,
    title: "Opening hours",
    details: "Sun-Mon: 10am - 10pm",
  },
];

// Individual Contact Card Component (Internal Use)
const InfoCard = ({ icon: Icon, title, details }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6">
      
      {/* Orange Icon Circle */}
      <div className="
        bg-[#FF9E0C] 
        text-white 
        p-4 sm:p-5 // Padding for size
        rounded-full 
        mb-4 // Spacing below the icon
        // flex items-center justify-center
        mr-75
        
      ">
        <Icon size={24} className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      
      {/* Title */}
      <h3 className="sm:  text-gray-900  text-left -mt-20 mr-20 ">
        {title}
      </h3>
      
      {/* Details */}
      <p className="text- font-extrabold text-gray-900  ml-10">
        {details}
      </p>
    </div>
  );
};

// Main Grid Component (A to Z)
const ContactInfoGrid = () => {
  return (
    // Outer Container: Centers the grid and applies padding
    <div className="py-12 px-4 sm:px-6 lg:px-8  bg-gray-00 ">
      <div className="max-w-8xl mx-auto ">
        
        {/* Responsive Grid Layout */}
        <div className="
          grid 
          grid-cols-1 // 2 columns on mobile
          md:grid-cols-4 // 4 columns on tablet/desktop
          gap-auto // Spacing between items
            items-center
          
        ">
          
          {contactData.map((item) => (
            <InfoCard 
              key={item.title}
              icon={item.icon}
              title={item.title}
              details={item.details}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ContactInfoGrid;