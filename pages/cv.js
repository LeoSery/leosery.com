import SEO from '../components/Common/SEO';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PDFviewer = dynamic(
  () => import('../components/PDF/PDFviewer'),
  {
    ssr: false,
    loading: () => <div className="text-white p-4">Loading PDF viewer...</div>
  }
);

const CV_TYPES = {
  cpp: {
    label: 'C++',
    file: '/CV_files/CV_Sery_Leo_Cpp.pdf',
    downloadName: 'CV_Séry_Léo.pdf',
  },
  csharp: {
    label: 'C#',
    file: '/CV_files/CV_Sery_Leo_CSharp.pdf',
    downloadName: 'CV_Séry_Léo.pdf',
  },
};

export default function CV() {
  const router = useRouter();
  const [activeType, setActiveType] = useState('cpp');

  useEffect(() => {
    if (router.isReady) {
      const type = router.query.type;
      if (type && CV_TYPES[type]) {
        setActiveType(type);
      } else if (type) {
        router.replace({ query: {} }, undefined, { shallow: true });
      }
    }
  }, [router.isReady, router.query.type, router]);

  const handleSwitch = (type) => {
    setActiveType(type);
    router.replace({ query: { type } }, undefined, { shallow: true });
  };

  const current = CV_TYPES[activeType];

  return (
    <>
      <SEO
        title="Curriculum Vitae"
        description="Explore Léo Séry's professional journey in game development."
        keywords="CV, Resume, Game Development, C++, C#, Engine Programming"
        ogImage="/assets/images/Common/DefaultMediaImage.png"
      />
      <div className="flex-1 w-full dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
          <div className="mb-6">
            <h1 className="text-[#ff9f1c] text-xl sm:text-2xl font-bold tracking-wide">
              CURRICULUM VITAE
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              My professional experience and education history
            </p>

            <div className="mt-4 mb-4 border-t border-[#2a2a2a]" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-gray-400 text-justify">
                I have experience in both{' '}
                <span className="text-[#ff9f1c] font-medium">C++</span>{' '}
                (engine dev, low-level, performance) and{' '}
                <span className="text-[#ff9f1c] font-medium">C#</span>{' '}
                (Unity / .NET). Each resume highlights different projects.
              </p>

              <div className="flex gap-2 flex-shrink-0 justify-center sm:justify-end">
                {Object.entries(CV_TYPES).map(([key, { label }]) => (
                  <button
                    key={key}
                    onClick={() => handleSwitch(key)}
                    aria-pressed={activeType === key}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                      activeType === key
                        ? 'bg-[#ff9f1c] text-black'
                        : 'bg-[#1E1E1E] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <PDFviewer file={current.file} downloadName={current.downloadName} />
        </div>
      </div>
    </>
  );
}