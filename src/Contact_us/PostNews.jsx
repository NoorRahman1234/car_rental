import React from 'react';
// import redcar from '../assets/Contactimages/redcar.jpg'
import darkcar from '../assets/Contactimages/darkcar.jpg'
// import whitesport from '../assets/Contactimages/whitesport.jpg'
// Sample Data for the Blog Posts
const blogPosts = [
  {
    id: 1,
    title: "How To Choose The Right Car",
    category: "News",
    date: "12 April 2024",
    imageUrl: "https://source.unsplash.com/random/400x300/?car-shopping",
  },
  {
    id: 2,
    title: "Which plan is right for me?",
    category: "News",
    date: "12 April 2024",
    imageUrl: "https://source.unsplash.com/random/400x300/?insurance-policy",
  },
  {
    id: 3,
    title: "Enjoy Speed, Choice & Total Control",
    category: "News",
    date: "12 April 2024",
    imageUrl: "https://source.unsplash.com/random/400x300/?sports-car",
  },
];

// --- Individual Blog Card Component ---
const BlogCard = ({ title, category, date, imageUrl }) => {
  return (
    <a href="#" className="block group">
      <div className="
        bg-white 
        border border-2
      
        w-[380px] h-[240px]
        rounded-xl 
        overflow-hidden 
        -ml-8
        -mr-28
        
         transition-all duration-300 hover:shadow-xl hover:-translate-y-2
      ">
        
        {/* Blurred Image Section */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img
            className="w-full h-full object-cover blur-md scale-105" // Apply blur-md and scale to match the image
            src={darkcar}
            alt={title}
          />
          
        </div>

        {/* Text Content */}
        <div className="p-4 sm:p-6">
          <h3 className="
            text-lg sm:text-xl 
            font-bold 
            text-gray-900 
            mb-2 
            group-hover:text-blue-600 
            transition duration-300
          ">
            {title}
          </h3>
          <p className="text-xs text-gray-500">
            {category} / {date}
          </p>
        </div>
      </div>
    </a>
  );
};

// --- Main Grid Component (A to Z) ---
const BlogCardGrid = () => {
  return (
    // Outer Container: Centers content and provides padding
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10 md:mb-16">
          Latest blog posts & news
        </h2>
        
        {/* Responsive Grid Layout */}
        <div className="
          grid 
          grid-cols-1 // Single column on small mobile
          md:grid-cols-3 // Three columns on tablet and desktop
          gap-8 // Spacing between cards
          justify-between 
          items-center
        ">
          
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              title={post.title}
              category={post.category}
              date={post.date}
              imageUrl={post.imageUrl}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;