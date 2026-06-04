import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { IoArrowBack } from "react-icons/io5";
import * as gtag from '../../lib/gtag';
import GitHubReadme from '../Common/GitHubReadme';
import OverviewSection from './Sections/OverviewSection';
import ProjectLinksSection from './Sections/ProjectLinksSection';
import KeywordsSection from './Sections/KeywordsSection';
import TeamSection from './Sections/TeamSection';
import PDFDocumentsSection from './Sections/FileSection';
import PDFModal from '../Common/PDFViewer';
import { useState, useCallback } from 'react';
import { formatDate } from '../../utils/dateHelpers';
import YoutubeSection from './Sections/YoutubeSection';
import TableOfContents from './TableOfContents';

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
    Keywords = [],
    PDFDocuments  = [],
    Youtube,
  } = project;

  const [pdfModalData, setPdfModalData] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [readmeHeadings, setReadmeHeadings] = useState(null);
  const handleHeadingsParsed = useCallback((headings) => {
    setReadmeHeadings(headings);
  }, []);

  const handlePDFClick = (pdfTitle, pdfData) => {
    setPdfModalData({
      title: pdfTitle,
      filename: pdfData.filename,
      description: pdfData.description,
      project_name: pdfData.project_name
    });
    setIsPdfModalOpen(true);

    // Analytics event
    gtag.event({
      action: 'pdf_document_open',
      params: {
        project_name: pdfData.project_name,
        pdf_title: pdfTitle,
        filename: pdfData.filename
      }
    });
  };

  const closePDFModal = () => {
    setIsPdfModalOpen(false);
    setPdfModalData(null);
  };

  const handlePDFAnalyticsEvent = (eventAction, eventData) => {
    gtag.event({
      action: eventAction,
      params: eventData
    });
  };

  const extractRepoInfo = (url) => {
    if (!url || !url.includes('github.com')) return null;
    
    try {
      const parts = url.split('github.com/')[1].split('/');
      return {
        username: parts[0],
        repo: parts[1]
      };
    } catch (error) {
      console.error("Error extracting repo info:", error);
      return null;
    }
  };

  const getReadmeInfo = () => {
    if (!Actions) return null;
    
    const readmeAction = Actions.find(action => action.showReadme === true);
    
    if (readmeAction && readmeAction.url) {
      return extractRepoInfo(readmeAction.url);
    }
    
    return null;
  };

  const repoInfo = getReadmeInfo();

    const handleActionClick = (actionType, actionData) => {
      gtag.event({
        action: 'project_link_click',
        params: {
          project_name: actionData.project_name,
          link_type: actionType,
          url: actionData.url
        }
      });
    };
  
  const handleCollaboratorClick = (collaborator, projectTitle) => {
    if (!collaborator?.portfolio) return;
    
    gtag.event({
      action: 'collaborator_portfolio_click',
      params: {
        project_name: projectTitle,
        collaborator_name: `${collaborator.firstName} ${collaborator.lastName}`,
        portfolio_type: collaborator.portfolio.includes('github.com') ? 'github' : 
                       collaborator.portfolio.includes('linkedin.com') ? 'linkedin' : 
                       collaborator.portfolio.includes('artstation.com') ? 'artstation' : 'other'
      }
    });
  };

  const teamSize = Collaborators.length + 1;
  const metaDescription = Description.length > 155 ? Description.slice(0, 152) + '...' : Description;

  const tocSections = [
    { id: 'project-overview', label: 'Overview' },
    PDFDocuments.filter(d => d.visible !== false).length > 0 && { id: 'project-files', label: 'Files' },
    Youtube?.url && { id: 'project-video', label: 'Video' },
    repoInfo && { id: 'project-readme', label: 'Readme' },
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>{`Léo Séry - ${Title}`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={[...Technologies, ...Keywords, 'Léo Séry', 'Portfolio', 'Game Development'].join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Léo Séry - ${Title}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={BannerImage} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Léo Séry - ${Title}`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={BannerImage} />
      </Head>

      <Link
        href="/projects"
        className="fixed z-50 group flex items-center shadow-md
           bg-gray-50 dark:bg-[#212121]
           border border-gray-200 dark:border-gray-800
           text-gray-700 dark:text-[#CAC5BE]
           hover:text-[#ff9f1c] dark:hover:text-[#ff9f1c]
           hover:border-[#ff9f1c] dark:hover:border-[#ff9f1c]
           hover:scale-105 active:scale-95
           rounded-full p-3
           transition-all duration-300 ease-in-out
           focus:outline-none focus:ring-2 focus:ring-[#ff9f1c]/30"
        style={{ top: 'calc(var(--navbar-height, 80px) + 8px)', left: '16px' }}
        aria-label="Return to projects list"
        title="Back to projects"
      >
        <IoArrowBack className="text-2xl flex-shrink-0" aria-hidden="true" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap
                        group-hover:max-w-[120px]
                        transition-all duration-300 ease-in-out
                        text-sm font-medium ml-0 group-hover:ml-2">
          Back to projects
        </span>
    </Link>

    <TableOfContents
      sections={tocSections}
      readmeHeadings={readmeHeadings}
      className="hidden min-[1640px]:block"
    />

      <article className="w-full pb-16">
        {/* Hero Section */}
        <header id="project-info" className="relative w-full h-[45vh] rounded-b-xl overflow-hidden">
          <Image
            src={BannerImage}
            alt={`${Title} - Project Banner`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          
          <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-[1240px] mx-auto px-4 w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{Title}</h1>
            <p className="text-sm text-white/80">
              {formatDate(Period.start)} - {Period.end ? formatDate(Period.end) : 'Present'}
            </p>
          </div>
        </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1240px] mx-auto px-4">
          {/* Technologies Tags */}
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

          {/* Sections Grid Layout */}
          <div className="space-y-6">
            <OverviewSection 
              id="project-overview"
              description={Description}
              references={project.References}
              size="double"
            />

            {teamSize > 4 ? (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <ProjectLinksSection 
                    id="project-links"
                    actions={Actions}
                    onActionClick={handleActionClick}
                    projectTitle={Title}
                    size="single"
                  />
                  
                  <KeywordsSection 
                    id="project-keywords"
                    keywords={Keywords}
                    size="single"
                  />
                </div>

                <PDFDocumentsSection 
                  id="project-files"
                  pdfDocuments={PDFDocuments}
                  onPDFClick={handlePDFClick}
                  projectTitle={Title}
                  size="single"
                />

                <TeamSection 
                  id="project-team"
                  myRoles={MyRoles}
                  collaborators={Collaborators}
                  onCollaboratorClick={handleCollaboratorClick}
                  projectTitle={Title}
                  size="double"
                  membersLimit={8}
                />
              </>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectLinksSection 
                  id="project-links"
                  actions={Actions}
                  onActionClick={handleActionClick}
                  projectTitle={Title}
                  size="single"
                />
                
                <KeywordsSection 
                  id="project-keywords"
                  keywords={Keywords}
                  size="single"
                />

                <PDFDocumentsSection 
                  id="project-files"
                  pdfDocuments={PDFDocuments}
                  onPDFClick={handlePDFClick}
                  projectTitle={Title}
                  size="single"
                />

                <TeamSection 
                  id="project-team"
                  myRoles={MyRoles}
                  collaborators={Collaborators}
                  onCollaboratorClick={handleCollaboratorClick}
                  projectTitle={Title}
                  size="single"
                  membersLimit={8}
                />
              </div>
            )}

          {Youtube?.url && (
            <YoutubeSection
              youtubeVideo={Youtube?.url}
              title={`${Title} - demo video`}
              uploadDate={Period.end || Period.start}
              description={Description}
              duration={Youtube?.duration}
              size="double"
            />
          )}
          </div>

          {/* GitHub README */}
          {repoInfo && (
            <section id="project-readme" className="mt-8 bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow py-2 px-0 md:p-6">
              <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4 px-2">
                Project README
              </h2>
              <GitHubReadme 
                username={repoInfo.username} 
                repo={repoInfo.repo}
                onHeadingsParsed={handleHeadingsParsed}
              />
            </section>
          )}
        </main>
      </article>
      <PDFModal
      isOpen={isPdfModalOpen}
      onClose={closePDFModal}
      pdfData={pdfModalData}
      onAnalyticsEvent={handlePDFAnalyticsEvent}
    />
    </>
  );
};

export default ProjectTemplate;