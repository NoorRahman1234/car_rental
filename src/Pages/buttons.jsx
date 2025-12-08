import React, { useState } from 'react';
// Corrected imports: Replacing the problematic 'Van' with the available 'Bus' icon.
import { Car, CarFront, Truck, BusFront, Bus, Wrench } from 'lucide-react'; 

// Data structure for the vehicle types. 
// Each object contains a name, an associated Lucide icon component, and a unique value.
const vehicleGroups = [
  { name: 'All vehicles', icon: Wrench, value: 'all' },
  { name: 'Sedan', icon: CarFront, value: 'sedan' },
  { name: 'Cabriolet', icon: Car, value: 'cabriolet' },
  { name: 'Pickup', icon: Truck, value: 'pickup' },
  { name: 'SUV', icon: BusFront, value: 'suv' },
  { name: 'Minivan', icon: Bus, value: 'minivan' },   // Using 'Bus' as a generic Van/Minivan icon
];

const App = () => {
  // State to track which vehicle group is currently selected.
  // 'all' is set as the default selected group on initial load.
  const [selectedGroup, setSelectedGroup] = useState('all');

  return (
    <div className="min-h-[200px] flex flex-col items-center justify-center p-4 sm:p-6 -mt-4 -mb-4">
      
      {/* Main container for the vehicle selector card. */}
      {/* <div className="max-w-7xl w-full mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl"> */}
        
        {/* Title of the selector */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10 sm:mb-12">
          Select a vehicle group
        </h1>

        {/* Container for the vehicle selection buttons. */}
        <div 
          className="flex flex-wrap justify-center gap-y-0 gap-x-3 gap-y-10 sm:gap-x-4 md:gap-x-5"
        >
          {vehicleGroups.map((group) => {
            const isSelected = group.value === selectedGroup; // Check if the current button is selected
            
            // Base classes applied to all buttons for consistent styling
            const baseClasses = 'w-[148px] h-[50px] flex items-center justify-center py-3 rounded-3xl font-semibold transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer';
            
            // Classes for the active (selected) button - Remains indigo
            const activeClasses = 'bg-blue-600 text-white';
            
            // Default Inactive classes (Gray 100)
            const defaultInactiveClasses = 'bg-gray-100 text-gray-800 hover:bg-gray-200';
            
            // Sedan Specific Inactive classes (Blue 600)
            const sedanInactiveClasses = 'bg-gray-200 text-black hover:bg-gray-300 border';

            // --- Determine the final classes for this button ---
            let currentClasses = '';
            let paddingClasses = '';

            if (isSelected) {
                // If selected, use the active Indigo styling
                currentClasses = activeClasses;
            } else if (group.value === 'sedan') {
                                
            } else {
                // Otherwise (for all other unselected buttons), use the default Gray styling
                currentClasses = defaultInactiveClasses;
            }
            
            // Special padding logic for 'All vehicles' button
            if (group.value === 'all') {
                // 'All vehicles' button is wider
                paddingClasses = isSelected ? 'px-8 sm:px-10' : 'px-5 sm:px-8';
            } else {
                // Standard padding for all other buttons
                paddingClasses = 'px-3 sm:px-5'; 
            }

            return (
              <button
                key={group.value} // Unique key for list rendering
                onClick={() => setSelectedGroup(group.value)} // Updates state on click
                // Apply base classes, current state classes, and padding classes
                className={`${baseClasses} ${currentClasses} ${paddingClasses}`}
              >
                {/* Conditionally render the icon for all buttons except 'All vehicles' */}
                {group.value !== 'all' && (
                  // Lucide icon component. w-5 h-5 for size, mr-2/mr-3 for right margin.
                  <group.icon className="w-5 h-5 mr-2 sm:mr-3" />
                )}
                
                {/* Display the group name (e.g., "Sedan, SUV) */}
                {group.name}
              </button>
            );
          })}
        </div>
        
        
      </div>
    // </div>
  );
};

export default App;