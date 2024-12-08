import React from 'react';

const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div role="status">
      <div 
        className={`
          border-4 rounded-full
          border-gray-100/30 dark:border-gray-800/30
          border-t-blue-600 hover:border-t-[#ff9f1c]
          dark:border-t-blue-500 dark:hover:border-t-[#ff9f1c]
          animate-spin
          transition-colors duration-300
          ${sizes[size]}
          ${className}
        `}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;