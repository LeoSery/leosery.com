import React from 'react';

const OverviewSection = ({ description, references = [], size = "double" }) => {
  const sizeClasses = {
    single: "",
    double: "md:col-span-2"
  };

  // Split description into paragraphs if it contains line breaks or is very long
  const formatDescription = (text) => {
    // If text contains double line breaks, split there
    if (text.includes('\n\n')) {
      return text.split('\n\n').filter(p => p.trim());
    }
    
    // If text is very long (>400 chars), try to split at sentence boundaries
    if (text.length > 400) {
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      const paragraphs = [];
      let currentParagraph = '';
      
      sentences.forEach((sentence, index) => {
        currentParagraph += sentence;
        // Create new paragraph every 2-3 sentences or at natural breaks
        if ((index + 1) % 3 === 0 || index === sentences.length - 1) {
          paragraphs.push(currentParagraph.trim());
          currentParagraph = '';
        }
      });
      
      return paragraphs.filter(p => p);
    }
    
    // Return as single paragraph if not too long
    return [text];
  };

  const paragraphs = formatDescription(description);

  return (
    <section 
      aria-label="Project overview" 
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-4 md:p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
        Overview
      </h2>
      
      {/* Text container with full width utilization */}
      <div>
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index}
            className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed text-justify mb-3 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
      
      {references.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-2">
            References
          </h3>
          <ul className="space-y-1.5">
            {references.map((ref, index) => (
              <li key={index}>
                <a 
                  href={ref.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center gap-1 transition-colors"
                >
                  <span>{ref.text}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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