import React from "react";

export const CarouselItem = ({ item }) => {
    // Check if 'item' and 'icon' properties exist before accessing them
    return (
      <div>
        {item && item.icon && (
          <img src={item.icon} alt="Icon" />
          
        )}
       
      </div>
      
    );
  };