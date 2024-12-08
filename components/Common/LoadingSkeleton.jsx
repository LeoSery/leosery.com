import React from 'react';

const LoadingSkeleton = ({ className, variant = 'rect', animate = true }) => {
  const baseClasses = "bg-gray-100/80 dark:bg-[#2C2C2C]";
  const animationClasses = animate ? "animate-pulse" : "";
  
  const variants = {
    rect: "rounded",
    circle: "rounded-full",
    text: "rounded h-4",
    card: "rounded-xl h-48"
  };

  return (
    <div 
      className={`
        ${baseClasses}
        ${animationClasses}
        ${variants[variant]}
        ${className}
      `}
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;