import React, { useState, useEffect, useContext, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { ThemeContext } from '../../context/themeContext';
import { useTheme } from 'next-themes';
import Spinner from "../Common/Spinner";
import LoadingSkeleton from '../Common/LoadingSkeleton';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFWorker = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Worker), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  )
});

const PDFViewer = dynamic(() => import('@react-pdf-viewer/core').then(mod => mod.Viewer), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  )
});

const PDFviewerComponent = () => {
  const [scale, setScale] = useState(1);
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
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) setScale(0.55);
      else if (width <= 390) setScale(0.58);
      else if (width <= 430) setScale(0.62);
      else if (width <= 768) setScale(0.75);
      else if (width <= 1024) setScale(0.85);
      else if (width <= 1280) setScale(0.9);
      else setScale(1.5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
  });

  // Security: Disable eval support to mitigate CVE-2024-4367
  // This prevents arbitrary JavaScript execution when opening malicious PDFs
  const viewerOptions = useMemo(() => ({
    isEvalSupported: false,
  }), []);

  const handleError = (error) => {
    setError(error);
    setIsLoading(false);
    console.error('Error loading PDF:', error);
  };

  const globalStyles = `
    [aria-describedby="rpv-core__tooltip-body-theme-switch"],
    button[aria-label="Switch to the light theme"],
    button[aria-label="Open"],
    .rpv-toolbar__item:has([aria-label="Open"]),
    button[data-testid="page-navigation__previous-button"],
    button[data-testid="page-navigation__next-button"],
    button[data-testid="open__button"],
    .rpv-page-navigation__current-page-input,
    .rpv-toolbar__item:has(.rpv-page-navigation__current-page-input) {
      display: none !important;
    }

    .rpv-core__viewer.rpv-core__viewer--dark {
      --rpv-color-page-background: #121212;
      --rpv-color-foreground: #FAFAFA;
      --rpv-color-background: #1A1A1A;
      --rpv-color-popup-background: #1E1E1E;
      --rpv-color-tooltip-background: #2C2C2C;
    }

    .rpv-core__viewer.rpv-core__viewer--light {
      --rpv-color-page-background: #FFFFFF;
      --rpv-color-foreground: #2D2D2D;
      --rpv-color-background: #FFFFFF;
      --rpv-color-popup-background: #FFFFFF;
      --rpv-color-tooltip-background: #FFFFFF;
    }

    .rpv-core__viewer {
      height: 85vh !important;
      min-height: 600px !important;
      max-height: 1200px !important;
    }

    @media (max-width: 1280px) {
      .rpv-core__viewer {
        height: 80vh !important;
      }
    }

    @media (max-width: 1024px) {
      .rpv-core__viewer {
        height: 75vh !important;
      }
    }

    @media (max-width: 480px) {
      .rpv-core__viewer {
        height: 65vh !important;
        min-height: 350px !important;
      }

      .rpv-core__viewer-content,
      .rpv-core__inner-container,
      .rpv-core__inner-pages,
      .rpv-core__inner-page {
        margin: 0 !important;
        padding: 0 !important;
      }

      .rpv-core__inner-container {
        margin-bottom: -20px !important;
      }

      .rpv-core__inner-page {
        margin: 0 auto !important;
        padding-bottom: 0 !important;
      }
    }

    @media (max-width: 375px) {
      .rpv-core__viewer {
        height: 60vh !important;
      }
    }

    .rpv-core__viewer-zone,
    .rpv-core__inner-pages {
      height: 100% !important;
    }

    .rpv-core__inner-container,
    .rpv-core__viewer-zone {
      min-width: unset !important;
      width: 100% !important;
    }

    .rpv-core__inner-pages {
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
    }
  `;

  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{globalStyles}</style>

      <div 
        className={`w-full rounded-lg overflow-hidden ${isDark ? 'bg-[#1A1A1A]' : 'bg-gray-50'}`}
        role="document"
        aria-label="CV PDF Viewer"
      >
        {isLoading && (
          <div className="flex justify-center items-center h-[50vh]" role="alert" aria-label="Loading PDF">
            <LoadingSkeleton variant="rect" className="w-full h-full absolute" />
            <Spinner size="lg" />
          </div>
        )}

        {error && (
          <div 
            className="text-red-500 text-center py-4 bg-red-100 dark:bg-red-900/20 rounded-lg mx-4 my-2"
            role="alert"
            aria-live="polite"
          >
            <p>Une erreur est survenue lors du chargement du CV.</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 text-sm underline hover:text-red-600 dark:hover:text-red-400"
            >
              Cliquez ici pour réessayer
            </button>
          </div>
        )}

        <PDFWorker workerUrl="/assets/pdf/pdf.worker.min.js">
          <PDFViewer
            fileUrl="/CV.pdf"
            theme={currentTheme()}
            defaultScale={scale}
            plugins={[defaultLayoutPluginInstance]}
            onDocumentLoad={() => setIsLoading(false)}
            onError={handleError}
            {...viewerOptions}
          />
        </PDFWorker>
      </div>
    </>
  );
};

export default PDFviewerComponent;