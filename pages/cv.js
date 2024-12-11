import PDFviewerComponent from "../components/PDF/PDFviewer";
import SEO from '../components/Common/SEO';
import React from "react";

export default function CV() {
  return (
    <>
      <SEO
        title="Curriculum Vitae"
        description="Explore Leo Séry's professional journey in game development. View my education, skills, and experience with Unity3D, Unreal Engine, and game programming."
        keywords="CV, Resume, Game Development, Unity Developer, Unreal Engine Developer, C++, C#, Game Programming Skills"
        ogImage="/assets/images/Common/DefaultMediaImage.png"
      />
      <div className="flex-1 w-full dark:bg-[#121212] min-h-screen">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
          <div className="mb-4">
            <h1 className="text-[#ff9f1c] text-xl sm:text-2xl font-bold tracking-wide">
              CURRICULUM VITAE
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              My professional experience and education history
            </p>
          </div>
          <PDFviewerComponent />
        </div>
      </div>
    </>
  );
}