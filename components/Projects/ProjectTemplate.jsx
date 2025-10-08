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
import { useState } from 'react';

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
    PDFDocuments  = []
  } = project;

  const [pdfModalData, setPdfModalData] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

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

      <article className="w-full pb-16">
        {/* Hero Section */}
        <header className="relative w-full h-[45vh] rounded-b-xl overflow-hidden">
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
              description={Description}
              references={project.References}
              size="double"
            />

            {teamSize > 4 ? (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <ProjectLinksSection 
                    actions={Actions}
                    onActionClick={handleActionClick}
                    projectTitle={Title}
                    size="single"
                  />
                  
                  <KeywordsSection 
                    keywords={Keywords}
                    size="single"
                  />
                </div>

                <PDFDocumentsSection 
                  pdfDocuments={PDFDocuments}
                  onPDFClick={handlePDFClick}
                  projectTitle={Title}
                  size="single"
                />

                <TeamSection 
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
                  actions={Actions}
                  onActionClick={handleActionClick}
                  projectTitle={Title}
                  size="single"
                />
                
                <KeywordsSection 
                  keywords={Keywords}
                  size="single"
                />

                <PDFDocumentsSection 
                  pdfDocuments={PDFDocuments}
                  onPDFClick={handlePDFClick}
                  projectTitle={Title}
                  size="single"
                />

                <TeamSection 
                  myRoles={MyRoles}
                  collaborators={Collaborators}
                  onCollaboratorClick={handleCollaboratorClick}
                  projectTitle={Title}
                  size="single"
                  membersLimit={8}
                />
              </div>
            )}
          </div>

          {/* GitHub README*/}
          {repoInfo && (
            <section className="mt-8 bg-gray-50 dark:bg-[#1E1E1E] rounded-xl shadow py-2 px-0 md:p-6">
              <h2 className="text-lg font-bold text-gray-700 dark:text-white mb-4 px-2">
                Project README
              </h2>
              <GitHubReadme 
                username={repoInfo.username} 
                repo={repoInfo.repo}
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