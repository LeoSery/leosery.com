import React, { useState, useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { ThemeContext } from '../../context/themeContext';
import { useTheme } from 'next-themes';
import { IoClose } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Spinner from "../Common/Spinner";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFWorker = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Worker), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-[50vh]">
      <Spinner size="lg" />
    </div>
  )
});

const PDFViewer = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Viewer), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-[50vh]">
      <Spinner size="lg" />
    </div>
  )
});

const PDFModal = ({ 
  isOpen, 
  onClose, 
  pdfData,
  onAnalyticsEvent
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = () => {
    if (!mounted) return null;
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    return resolvedTheme === 'dark' ? 'dark' : 'light';
  };

  useEffect(() => {
    if (isOpen && pdfData) {
      setIsLoading(true);
      setError(null);
    }
  }, [isOpen, pdfData]);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  const [scale, setScale] = useState(1.0);

  useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 375) setScale(0.5);
    else if (width <= 390) setScale(0.55);
    else if (width <= 430) setScale(0.6);
    else if (width <= 768) setScale(0.7);
    else if (width <= 1024) setScale(0.75);
    else if (width <= 1280) setScale(1.0);
    else setScale(1.1);
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  const handleError = (error) => {
    setError(error);
    setIsLoading(false);
    console.error('Error loading PDF:', error);
  };

  const handleClose = () => {
    setIsLoading(true);
    setError(null);
    onClose();
  };

  const handleOpenInNewTab = () => {
    if (pdfData?.filename) {
      window.open(pdfData.filename, '_blank');
      
      // Analytics event
      if (onAnalyticsEvent) {
        onAnalyticsEvent('pdf_open_new_tab', {
          pdf_title: pdfData.title,
          project_name: pdfData.project_name
        });
      }
    }
  };

  const modalStyles = `
  .pdf-modal-container .rpv-core__viewer.rpv-core__viewer--dark {
    --rpv-color-page-background: #121212;
    --rpv-color-foreground: #FAFAFA;
    --rpv-color-background: #1A1A1A;
    --rpv-color-popup-background: #1E1E1E;
    --rpv-color-tooltip-background: #2C2C2C;
  }

  .pdf-modal-container .rpv-core__viewer.rpv-core__viewer--light {
    --rpv-color-page-background: #FFFFFF;
    --rpv-color-foreground: #2D2D2D;
    --rpv-color-background: #FFFFFF;
    --rpv-color-popup-background: #FFFFFF;
    --rpv-color-tooltip-background: #FFFFFF;
  }

  .pdf-modal-container .rpv-core__viewer {
    height: 80vh !important;
    min-height: 600px !important;
  }

  @media (max-width: 768px) {
    .pdf-modal-container .rpv-core__viewer {
      height: 70vh !important;
      min-height: 500px !important;
    }
  }

  .pdf-modal-container [aria-describedby="rpv-core__tooltip-body-theme-switch"],
  .pdf-modal-container button[aria-label="Switch to the light theme"],
  .pdf-modal-container button[aria-label="Open"],
  .pdf-modal-container .rpv-toolbar__item:has([aria-label="Open"]),
  .pdf-modal-container button[data-testid="open__button"] {
    display: none !important;
  }
`;

  if (!mounted) {
    return null;
  }

  if (!isOpen || !pdfData) {
    return null;
  }

  return (
    <>
      <style jsx global>{modalStyles}</style>
      
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
        aria-describedby="pdf-modal-description"
      >
        <div 
          className="bg-white dark:bg-[#1A1A1A] rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex-1 min-w-0">
              <h3 
                id="pdf-modal-title"
                className="text-lg font-semibold text-gray-900 dark:text-white truncate"
              >
                {pdfData.title}
              </h3>
              {pdfData.description && (
                <p 
                  id="pdf-modal-description"
                  className="text-sm text-gray-500 dark:text-gray-400 mt-1"
                >
                  {pdfData.description}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handleOpenInNewTab}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open PDF in new tab"
                title="Open in new tab"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close PDF viewer"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-[#1A1A1A] z-10">
                <div className="text-center">
                  <Spinner size="lg" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Loading PDF...
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="p-8 text-center">
                <div className="text-red-500 bg-red-100 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="font-medium">Unable to load PDF</p>
                  <p className="text-sm mt-1">
                    Please try again or open in a new tab
                  </p>
                  <button 
                    onClick={handleOpenInNewTab}
                    className="mt-3 text-sm underline hover:text-red-600 dark:hover:text-red-400"
                  >
                    Open in new tab
                  </button>
                </div>
              </div>
            )}

            <div className={`pdf-modal-container ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'}`}>
              <PDFWorker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
                <PDFViewer
                  fileUrl={pdfData.filename}
                  theme={currentTheme()}
                  defaultScale={scale}
                  plugins={[defaultLayoutPluginInstance]}
                  onDocumentLoad={() => setIsLoading(false)}
                  onError={handleError}
                />
              </PDFWorker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFModal;