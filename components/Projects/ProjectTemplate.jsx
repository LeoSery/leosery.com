import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { HiUsers } from 'react-icons/hi';
import { FaUser, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoArrowBack } from "react-icons/io5";
import * as gtag from '../../lib/gtag';

const ProjectTemplate = ({ project }) => {
  const {
    Title,
    BannerImage,
    Description,
    Technologies,
    Actions,
    Period,
    MyRoles,
    Collaborators = [],
    Keywords = []
  } = project;

  const handleActionClick = (actionType, project) => {
    gtag.event({
      action: 'project_link_click',
      params: {
        project_name: Title,
        link_type: actionType,
        url: project.url,
        project_type: project.type
      }
    });
  };
  
  const handleCollaboratorClick = (collaborator) => {
    if (!collaborator?.portfolio) return;
    
    gtag.event({
      action: 'collaborator_portfolio_click',
      params: {
        project_name: Title,
        collaborator_name: `${collaborator.firstName} ${collaborator.lastName}`,
        portfolio_type: collaborator.portfolio.includes('github.com') ? 'github' : 
                       collaborator.portfolio.includes('linkedin.com') ? 'linkedin' : 
                       collaborator.portfolio.includes('artstation.com') ? 'artstation' : 'other'
      }
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const teamSize = Collaborators.length + 1;
  const metaDescription = Description.length > 155 ? Description.slice(0, 152) + '...' : Description;

  return (
    <>
      <Head>
        <title>{`Leo Séry - ${Title}`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={[...Technologies, ...Keywords, 'Leo Séry', 'Portfolio', 'Game Development'].join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Leo Séry - ${Title}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={BannerImage} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Leo Séry - ${Title}`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={BannerImage} />
      </Head>

      <article className="w-full pb-16">
        {/* Hero Section */}
        <header className="relative w-full h-[45vh]">
          <Image
            src={BannerImage}
            alt={`${Title} - Project Banner`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          
          {/* Contenu Hero */}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-[1240px] mx-auto px-4 w-full">
              <Link 
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white 
                         transition-colors mb-6"
                aria-label="Return to projects list"
              >
                <IoArrowBack aria-hidden="true" />
                <span>Back to projects</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{Title}</h1>
              <p className="text-sm text-white/80">
                {formatDate(Period.start)} - {Period.end ? formatDate(Period.end) : 'Present'}
              </p>
            </div>
          </div>
        </header>

        {/* Contenu Principal */}
        <main className="max-w-[1240px] mx-auto px-4">
          {/* Technologies Tags - Flottant sur l'image */}
          <section aria-label="Project technologies" className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-4 md:p-6 -mt-8 relative z-10 mb-8">
            <div className="flex flex-wrap gap-2">
              {Technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Grid Layout pour le Contenu */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Colonne Gauche - Description et Team */}
            <div className="space-y-6">
              {/* Description Card */}
              <section aria-label="Project overview" className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6">
                <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">Overview</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {Description}
                </p>
              </section>

              {/* Team Card */}
              <section aria-label="Project team" className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6">
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
                      {MyRoles.map((role, index) => (
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
                  {Collaborators.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                        <HiUsers className="text-sm" aria-hidden="true" />
                        <h3 className="text-sm font-medium">Collaborators</h3>
                      </div>
                      <div className="space-y-2">
                        {Collaborators.map((collab, index) => (
                          <div key={index}>
                            {collab.portfolio ? (
                              <a
                                key={index}
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
                                <div>
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {collab.firstName} {collab.lastName}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {collab.roles.join(', ')}
                                  </p>
                                </div>
                                <FaExternalLinkAlt 
                                  className="text-sm text-gray-400 group-hover:text-blue-500 
                                            dark:group-hover:text-blue-400 transition-colors" 
                                  aria-hidden="true" 
                                />
                              </a>
                            ) : (
                              <div className="flex justify-between items-center p-2.5 bg-gray-50 
                                            dark:bg-gray-800/50 rounded-lg">
                                <div>
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {collab.firstName} {collab.lastName}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {collab.roles.join(', ')}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Colonne Droite - Links et Keywords */}
            <div className="space-y-6">
              {/* Project Links */}
              {Actions && Actions.length > 0 && (
                <section aria-label="Project links" className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6">
                  <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
                    Project Links
                  </h2>
                  <div className="space-y-2">
                    {Actions.map((action, index) => (
                      <a
                        key={index}
                        href={action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleActionClick(action.label, action)}
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
              )}

              {/* Keywords/Tags */}
              {Keywords.length > 0 && (
                <section aria-label="Project keywords" className="bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow p-6">
                  <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4">
                    Keywords
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {Keywords.map((keyword, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
      </article>
    </>
  );
};

export default ProjectTemplate;