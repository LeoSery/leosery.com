import { useState, useEffect } from 'react';

export const usePlatform = () => {
  const [platform, setPlatform] = useState('unknown');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setPlatform('ios');
      } else if (/android/.test(userAgent)) {
        setPlatform('android');
      } else {
        setPlatform('desktop');
      }
    }
  }, []);

  return platform;
};