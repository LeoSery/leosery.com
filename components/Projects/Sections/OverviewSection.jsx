import React from 'react';

const OverviewSection = ({ description, references = [], size = "double" }) => {
  const sizeClasses = {
    single: "",
    double: "md:col-span-2"
  };

  return (
    <section 
      aria-label="Project overview" 
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
        Overview
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
      {references.length > 0 && (
        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-700 dark:text-white mb-1">
            References:
          </h3>
          <ul className="list-disc pl-5">
            {references.map((ref, index) => (
              <li key={index}>
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  {ref.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default OverviewSection;