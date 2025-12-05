import SEO from '../components/Common/SEO';
import dynamic from 'next/dynamic';
import React from "react";

const PDFviewer = dynamic(
  () => import('../components/PDF/PDFviewer'),
  { 
    ssr: false,
    loading: () => <div className="text-white p-4">Loading PDF viewer...</div>
  }
);

export default function CV() {
  return (
    <>
      <SEO
        title="Curriculum Vitae"
        description="Explore Léo Séry's professional journey in game development."
        keywords="CV, Resume, Game Development"
        ogImage="/assets/images/Common/DefaultMediaImage.png"
      />
      <div className="flex-1 w-full dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
          <div className="mb-4">
            <h1 className="text-[#ff9f1c] text-xl sm:text-2xl font-bold tracking-wide">
              CURRICULUM VITAE
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              My professional experience and education history
            </p>
          </div>
            <PDFviewer />
        </div>
      </div>
    </>
  );
}
