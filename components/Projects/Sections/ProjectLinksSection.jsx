import React from 'react';
import { 
  FaGithub, 
  FaInstagram, 
  FaDownload, 
  FaGlobe,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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

  const iconStyles = {
  base: "text-sm text-gray-400 transition-colors",
  green: "group-hover:text-green-500 dark:group-hover:text-green-400",
  blue: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
  pink: "group-hover:text-pink-500 dark:group-hover:text-pink-400",
  red: "group-hover:text-red-500 dark:group-hover:text-red-400"
};

  const getIconClasses = (color) => `${iconStyles.base} ${iconStyles[color]}`;

  const getActionIcon = (action) => {
    const url = action.url.toLowerCase();
    
    if (url.includes('.zip') || url.includes('.exe') || url.includes('.apk') || 
        url.includes('.dmg') || url.includes('.tar.gz') || url.includes('.rar') || 
        url.includes('.deb') || url.includes('.msi')) {
      return <FaDownload className={getIconClasses('green')} aria-hidden="true" />;
    }
    
    if (url.includes('github.com'))
    {
      return <FaGithub className={getIconClasses('blue')} aria-hidden="true" />;
    }
    if (url.includes('instagram.com'))
    {
      return <FaInstagram className={getIconClasses('pink')} aria-hidden="true" />;
    }
    if (url.includes('x.com') || url.includes('twitter.com'))
    {
      return <FaXTwitter className="text-sm text-gray-400 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors" aria-hidden="true" />;
    }
    if (url.includes('youtube.com') || url.includes('youtu.be'))
    {
      return <FaYoutube className={getIconClasses('red')} aria-hidden="true" />;
    }
    if (url.includes('linkedin.com'))
    {
      return <FaLinkedin className="text-sm text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" aria-hidden="true" />;
    }
    return <FaGlobe className={getIconClasses('blue')} aria-hidden="true" />;
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
            {getActionIcon(action)}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectLinksSection;