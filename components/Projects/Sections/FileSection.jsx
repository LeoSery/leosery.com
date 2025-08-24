import React from 'react';
import { FaFilePdf, FaEye } from 'react-icons/fa';

const FileSection = ({ 
  pdfDocuments = [], 
  onPDFClick, 
  projectTitle, 
  size = "single" 
}) => {
  const sizeClasses = {
    single: "",
    double: "md:col-span-2"
  };

  const handlePDFClick = (pdfDoc) => {
    if (onPDFClick) {
      onPDFClick(pdfDoc.title, {
        filename: pdfDoc.filename,
        description: pdfDoc.description,
        project_name: projectTitle
      });
    }
  };

  const visibleDocuments = pdfDocuments.filter(doc => doc.visible !== false);

  if (!visibleDocuments || visibleDocuments.length === 0) {
    return null;
  }

  return (
    <section 
      aria-label="Project PDF documents" 
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
        Files
      </h2>
      <div className="space-y-2">
        {visibleDocuments.map((pdfDoc, index) => (
          <button
            key={index}
            onClick={() => handlePDFClick(pdfDoc)}
            className="flex items-center justify-between w-full p-2.5 
                     bg-gray-50 dark:bg-gray-800/50 rounded-lg
                     hover:bg-gray-200 dark:hover:bg-gray-800 
                     group transition-all duration-200
                     text-left
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`View PDF: ${pdfDoc.title}`}
            type="button"
          >
            <div className="flex-1 min-w-0">
              <span className="text-sm text-gray-600 dark:text-gray-300 block truncate">
                {pdfDoc.title}
              </span>
              {pdfDoc.description && (
                <span className="text-xs text-gray-500 dark:text-gray-400 block mt-0.5 normal-case">
                  {pdfDoc.description}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 ml-3">
              <FaFilePdf 
                className="text-sm text-red-500 group-hover:text-red-600 
                         transition-colors flex-shrink-0" 
                aria-hidden="true" 
              />
              <FaEye 
                className="text-sm text-gray-400 group-hover:text-blue-500 
                         dark:group-hover:text-blue-400 transition-colors flex-shrink-0" 
                aria-hidden="true" 
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FileSection;