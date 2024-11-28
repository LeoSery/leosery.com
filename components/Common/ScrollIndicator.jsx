import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Gestion de l'apparition initiale
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (!isInitialLoad) {
        setIsVisible(scrollPosition < 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInitialLoad]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('home/about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Gestion des animations
  const animationClasses = isInitialLoad
    ? isVisible
      ? 'opacity-100 translate-y-0'  // Animation d'entrée depuis le bas
      : 'opacity-0 translate-y-16'
    : isVisible
      ? 'opacity-100 translate-y-0'  // État normal
      : 'opacity-0 -translate-y-16';  // Animation de sortie vers le haut

  return (
    <div 
      onClick={scrollToNextSection}
      className={`inline-flex flex-col items-center gap-2 cursor-pointer hover:opacity-75
                 transition-all duration-500 ease-out ${animationClasses}`}
    >
      <span className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
        Scroll to discover more
      </span>
      <div className="w-6 h-9 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
        <div className="w-1 bg-gray-400 dark:bg-gray-600 rounded-full animate-scrollBounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;