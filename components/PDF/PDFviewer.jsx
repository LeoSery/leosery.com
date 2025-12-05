import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import Spinner from "../Common/Spinner";
import LoadingSkeleton from '../Common/LoadingSkeleton';
import { FiZoomIn, FiZoomOut, FiDownload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFviewerComponent = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  const { resolvedTheme } = useTheme();
  const isDarkMode = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) setScale(0.5);
      else if (width <= 430) setScale(0.6);
      else if (width <= 768) setScale(0.75);
      else if (width <= 1024) setScale(0.9);
      else if (width <= 1280) setScale(1.0);
      else setScale(1.2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    setError(error);
    setIsLoading(false);
  }, []);

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.4));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV_Sery_Leo.pdf';
    link.click();
  };

  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div 
      id="pdf-container"
      className={`w-full rounded-xl overflow-hidden border ${
        isDarkMode 
          ? 'bg-[#1A1A1A] border-[#2a2a2a]' 
          : 'bg-white border-gray-200 shadow-lg'
      }`}
      role="document"
      aria-label="CV PDF Viewer"
    >
      {/* Toolbar */}
      <div className={`flex items-center justify-between px-4 py-3 border-b ${
        isDarkMode 
          ? 'bg-[#1E1E1E] border-[#2a2a2a]' 
          : 'bg-gray-50 border-gray-200'
      }`}>
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className={`p-2 rounded-lg transition-colors ${
              pageNumber <= 1 
                ? 'opacity-50 cursor-not-allowed' 
                : isDarkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-gray-200'
            } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            aria-label="Page précédente"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          
          <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {pageNumber} / {numPages || '-'}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
            className={`p-2 rounded-lg transition-colors ${
              pageNumber >= (numPages || 1)
                ? 'opacity-50 cursor-not-allowed' 
                : isDarkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-gray-200'
            } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            aria-label="Page suivante"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Zoom controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.4}
            className={`p-2 rounded-lg transition-colors ${
              scale <= 0.4 
                ? 'opacity-50 cursor-not-allowed' 
                : isDarkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-gray-200'
            } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            aria-label="Zoom arrière"
          >
            <FiZoomOut className="w-5 h-5" />
          </button>
          
          <span className={`text-sm font-medium min-w-[50px] text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {Math.round(scale * 100)}%
          </span>
          
          <button
            onClick={zoomIn}
            disabled={scale >= 2.5}
            className={`p-2 rounded-lg transition-colors ${
              scale >= 2.5
                ? 'opacity-50 cursor-not-allowed' 
                : isDarkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-gray-200'
            } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            aria-label="Zoom avant"
          >
            <FiZoomIn className="w-5 h-5" />
          </button>
        </div>

        {/* Download */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700 text-white"
          aria-label="Télécharger le CV"
        >
          <FiDownload className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Télécharger</span>
        </button>
      </div>

      {/* PDF Content - Hauteur adaptive selon le contenu */}
      <div 
        className={`relative overflow-auto ${isDarkMode ? 'bg-[#252525]' : 'bg-gray-100'}`}
      >
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center z-10 min-h-[300px]" role="alert" aria-label="Loading PDF">
            <LoadingSkeleton variant="rect" className="w-full h-full absolute" />
            <Spinner size="lg" />
          </div>
        )}

        {error && (
          <div 
            className="flex items-center justify-center min-h-[300px]"
            role="alert"
            aria-live="polite"
          >
            <div className={`text-center py-4 rounded-lg px-6 ${isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-500'}`}>
              <p className="font-medium">Une erreur est survenue lors du chargement du CV.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-3 text-sm underline hover:opacity-80"
              >
                Cliquez ici pour réessayer
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center py-4 sm:py-6">
          <Document
            file="/CV.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className="flex justify-center"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-2xl rounded-sm"
              loading={null}
            />
          </Document>
        </div>
      </div>

      {/* Mobile page indicator */}
      {numPages && numPages > 1 && (
        <div className={`sm:hidden flex justify-center py-2 border-t ${
          isDarkMode ? 'bg-[#1E1E1E] border-[#2a2a2a]' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex gap-1">
            {Array.from({ length: numPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPageNumber(i + 1)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  pageNumber === i + 1
                    ? 'bg-blue-500'
                    : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFviewerComponent;