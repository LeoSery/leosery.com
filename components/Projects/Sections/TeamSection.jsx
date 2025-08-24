import React, { useState } from 'react';
import { HiUsers } from 'react-icons/hi';
import { FaUser, FaExternalLinkAlt } from 'react-icons/fa';

const TeamSection = ({ 
  myRoles = [], 
  collaborators = [], 
  onCollaboratorClick,
  projectTitle,
  size = "single",
  membersLimit = 6 
}) => {
  const [showAllMembers, setShowAllMembers] = useState(false);
  
  const sizeClasses = {
    single: "",
    double: "md:col-span-2"
  };
  
  const teamSize = collaborators.length + 1;
  
  const handleCollaboratorClick = (collaborator) => {
    if (onCollaboratorClick) {
      onCollaboratorClick(collaborator, projectTitle);
    }
  };
  
  // Grille adaptative selon la taille de l'équipe et de la section
  const getGridClasses = () => {
    if (size === "double") {
      return teamSize > 10 
        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    } else {
      // Pour single, plus conservateur
      return 'grid-cols-1 sm:grid-cols-2';
    }
  };

  return (
    <section 
      aria-label="Project team" 
      className={`bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6 ${sizeClasses[size]}`}
    >
      <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4 flex items-center gap-2">
        Team
        <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
          ({teamSize} {teamSize === 1 ? 'member' : 'members'})
        </span>
      </h2>

      <div className="space-y-4">
        {/* My Role */}
        <div className="pb-4 border-b dark:border-gray-800">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <FaUser className="text-sm" aria-hidden="true" />
            <h3 className="text-sm font-medium">My Role</h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {myRoles.map((role, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Collaborators */}
        {collaborators.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
              <HiUsers className="text-sm" aria-hidden="true" />
              <h3 className="text-sm font-medium">Collaborators</h3>
            </div>
            
            <div className={`grid gap-2 mb-3 ${getGridClasses()}`}>
              {(showAllMembers ? collaborators : collaborators.slice(0, membersLimit)).map((collab, index) => (
                <div key={index}>
                  {collab.portfolio ? (
                    <a
                      href={collab.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCollaboratorClick(collab)}
                      className="flex justify-between items-center p-2.5 bg-gray-50 
                                dark:bg-gray-800/50 rounded-lg
                                hover:bg-gray-100 dark:hover:bg-gray-800
                                transition-colors group cursor-pointer"
                      aria-label={`Visit ${collab.firstName}'s portfolio`}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                          {collab.firstName} {collab.lastName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {collab.roles.join(', ')}
                        </p>
                      </div>
                      <FaExternalLinkAlt 
                        className="text-sm text-gray-400 group-hover:text-blue-500 
                                  dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" 
                        aria-hidden="true" 
                      />
                    </a>
                  ) : (
                    <div className="flex justify-between items-center p-2.5 bg-gray-50 
                                  dark:bg-gray-800/50 rounded-lg">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                          {collab.firstName} {collab.lastName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {collab.roles.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Bouton Show More/Less */}
            {collaborators.length > membersLimit && (
              <button
                onClick={() => setShowAllMembers(!showAllMembers)}
                className="w-full py-2 text-sm text-blue-600 dark:text-blue-400 
                           hover:text-blue-800 dark:hover:text-blue-300
                           border border-gray-200 dark:border-gray-700 rounded-lg
                           hover:bg-gray-50 dark:hover:bg-gray-800/50
                           transition-all duration-200"
              >
                {showAllMembers 
                  ? `Show less` 
                  : `Show ${collaborators.length - membersLimit} more members`
                }
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;