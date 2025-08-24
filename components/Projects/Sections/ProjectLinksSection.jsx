import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectLinksSection = ({ actions = [], onActionClick, projectTitle, size = "single" }) => {
  const sizeClasses = {
    single: "",
    double: "md:col-span-2"
  };

  const handleActionClick = (action) => {
    if (onActionClick) {
      onActionClick(action.label, { 
        url: action.url, 
        project_name: projectTitle 
      });
    }
  };

  if (!actions || actions.length === 0) {
    return null;
  }

  return (
    <section 
      aria-label="Project links" 
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
        Project Links
      </h2>
      <div className="space-y-2">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleActionClick(action)}
            className="flex items-center justify-between w-full p-2.5 
                     bg-gray-50 dark:bg-gray-800/50 rounded-lg
                     hover:bg-gray-200 dark:hover:bg-gray-800 
                     group transition-all duration-200"
            aria-label={`${action.label} (opens in new tab)`}
          >
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {action.label}
            </span>
            {action.url.includes('github.com') ? (
              <FaGithub className="text-sm text-gray-400 group-hover:text-blue-500 
                                 dark:group-hover:text-blue-400 transition-colors" 
                       aria-hidden="true" />
            ) : (
              <FaExternalLinkAlt className="text-sm text-gray-400 group-hover:text-blue-500 
                                          dark:group-hover:text-blue-400 transition-colors" 
                               aria-hidden="true" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectLinksSection;