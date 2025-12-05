import Image from "next/image";
import { useRouter } from "next/router";
import { HiUsers } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import React, { useState } from "react";
import LoadingSkeleton from "../Common/LoadingSkeleton";
import Spinner from "../Common/Spinner";
import * as gtag from '../../lib/gtag';
import { formatDate, formatPeriod } from '../../utils/dateHelpers';

const ProjectItem = ({ 
  title, 
  backgroundImg, 
  technologies, 
  projectUrl, 
  description, 
  type, 
  period,
  myRoles,
  collaborators = [] 
}) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleProjectClick = () => {
    gtag.event({
      action: 'project_click',
      params: {
        project_name: title
      }
    });
    router.push(projectUrl);
  };
  
  const mainTechnologies = technologies.slice(0, 2);

  const formattedPeriod = (() => {
    if (period.end === null) {
      return `${formatDate(period.start)} - Ongoing`;
    }
    
    const startDate = new Date(period.start);
    const endDate = new Date(period.end);
    
    if (startDate.getMonth() === endDate.getMonth() && 
        startDate.getFullYear() === endDate.getFullYear()) {
      return formatDate(period.start);
    }
    
    return `${formatDate(period.start)} - ${formatDate(period.end)}`;
  })();
  
  const typeBadgeStyle = {
    school: "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-300",
    personal: "bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-300",
    professional: "bg-purple-200 text-purple-900 dark:bg-purple-900 dark:text-purple-300",
    gamejam: "bg-orange-200 text-orange-900 dark:bg-orange-900 dark:text-orange-300"
  };

  const teamSize = collaborators.length + 1;

  return (
    <div onClick={handleProjectClick}
      className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl overflow-hidden shadow
                hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer
                flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video">
        {!imageLoaded && (
          <>
            <LoadingSkeleton variant="card" className="absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner size="md" />
            </div>
          </>
        )}
        <Image
          src={backgroundImg}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Type Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-medium
                        ${typeBadgeStyle[type]}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-[#CAC5BE] truncate">
            {title}
          </h3>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 whitespace-nowrap">
            {formattedPeriod}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-[#B1AAA0] mb-3 line-clamp-2">
          {description.split('.')[0]}.
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {mainTechnologies.map((tech, idx) => (
            <span 
              key={idx}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-[#2C2C2C] text-gray-700 dark:text-[#B1AAA0] rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Info */}
<div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2">
  <div className="flex items-center gap-1.5 group relative">
    {teamSize === 1 ? (
      <>
        <FaUser className="w-3.5 h-3.5" />
        <span>Solo Project</span>
      </>
    ) : (
      <>
        <div className="flex -space-x-1.5">
          <HiUsers className="w-4 h-4" />
        </div>
        <span>{teamSize} members</span>
        
        <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block">
          <div className="bg-gray-800 dark:bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-xs min-w-max">
            <ul className="space-y-1">
              <li className="text-blue-400">Me: {myRoles.join(', ')}</li>
              {collaborators.map((collab, idx) => (
                <li key={idx}>
                  {collab.firstName} {collab.lastName}: {collab.roles.join(', ')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )}
  </div>

  <div className="flex items-center">
    {myRoles.map((role, index) => (
      <span key={index} className="ml-2 text-blue-600 dark:text-blue-400">
        {role}
      </span>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default ProjectItem;