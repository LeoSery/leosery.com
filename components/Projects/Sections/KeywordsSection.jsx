import React from 'react';

const KeywordsSection = ({ keywords = [], size = "single" }) => {
  const sizeClasses = {
    single: "",
    double: "md:col-span-2"
  };

  if (!keywords || keywords.length === 0) {
    return null;
  }

  return (
    <section 
      aria-label="Project keywords" 
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
        Keywords
      </h2>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span 
            key={index}
            className="px-2.5 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
};

export default KeywordsSection;