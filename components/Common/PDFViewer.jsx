import React, { useState, useEffect, useContext, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ThemeContext } from '../../context/themeContext';
import { useTheme } from 'next-themes';
import { IoClose } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiZoomIn, FiZoomOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Spinner from "../Common/Spinner";

// Dynamic imports
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false, loading: () => <Spinner size="lg" /> }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

const PDFWorkerSetup = dynamic(
  () => import('react-pdf').then((mod) => {
    mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
    return () => null;
  }),
  { ssr: false }
);

const PDFModal = ({ 
  isOpen, 
  onClose, 
  pdfData,
  onAnalyticsEvent
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  const { isDark } = useContext(ThemeContext);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state when modal opens with new PDF
  useEffect(() => {
    if (isOpen) {
      setPageNumber(1);
      setIsLoading(true);
      setError(null);
    }
  }, [isOpen, pdfData?.url]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Responsive scale
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) setScale(0.5);
      else if (width <= 768) setScale(0.7);
      else if (width <= 1024) setScale(0.9);
      else setScale(1.1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentTheme = () => {
    if (!mounted) return 'light';
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    return resolvedTheme === 'dark' ? 'dark' : 'light';
  };

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setIsLoading(false);
  }, []);

  const onDocumentLoadError = useCallback((error) => {
    setError(error);
    setIsLoading(false);
    console.error('Error loading PDF:', error);
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleOpenInNewTab = () => {
    if (pdfData?.url) {
      window.open(pdfData.url, '_blank', 'noopener,noreferrer');
      if (onAnalyticsEvent) {
        onAnalyticsEvent({
          action: 'pdf_open_new_tab',
          category: 'PDF',
          label: pdfData.title || 'Unknown PDF'
        });
      }
    }
  };

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.3));

  if (!mounted || !isOpen || !pdfData) {
    return null;
  }

  return (
    <>
      <PDFWorkerSetup />
      
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
      >
        <div 
          className={`rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden ${
            isDark ? 'bg-[#1A1A1A]' : 'bg-white'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex-1 min-w-0">
              <h3 
                id="pdf-modal-title"
                className={`text-lg font-semibold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {pdfData.title}
              </h3>
              {pdfData.description && (
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {pdfData.description}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handleOpenInNewTab}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                aria-label="Ouvrir dans un nouvel onglet"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleClose}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }`}
                aria-label="Fermer"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className={`flex items-center justify-center gap-4 px-4 py-2 border-b ${
            isDark ? 'bg-[#252525] border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className={`p-1.5 rounded transition-colors ${
                  pageNumber <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                } ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {pageNumber} / {numPages || '-'}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= (numPages || 1)}
                className={`p-1.5 rounded transition-colors ${
                  pageNumber >= (numPages || 1) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                } ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className={`w-px h-5 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />

            {/* Zoom */}
            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                disabled={scale <= 0.3}
                className={`p-1.5 rounded transition-colors ${
                  scale <= 0.3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                } ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <FiZoomOut className="w-4 h-4" />
              </button>
              <span className={`text-sm min-w-[45px] text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={scale >= 2.5}
                className={`p-1.5 rounded transition-colors ${
                  scale >= 2.5 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                } ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <FiZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF Content */}
          <div 
            className={`overflow-auto ${isDark ? 'bg-[#121212]' : 'bg-gray-100'}`}
            style={{ height: 'calc(80vh - 140px)', minHeight: '400px' }}
          >
            {isLoading && (
              <div className="flex justify-center items-center h-full">
                <Spinner size="lg" />
              </div>
            )}

            {error && (
              <div className="flex items-center justify-center h-full">
                <div className="text-red-500 text-center py-4 bg-red-100 dark:bg-red-900/20 rounded-lg px-6">
                  <p>Erreur lors du chargement du PDF</p>
                </div>
              </div>
            )}

            <div className="flex justify-center py-4">
              <Document
                file={pdfData.url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={null}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className={`shadow-lg ${isDark ? 'shadow-black/40' : 'shadow-gray-400/50'}`}
                  loading={null}
                />
              </Document>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFModal;