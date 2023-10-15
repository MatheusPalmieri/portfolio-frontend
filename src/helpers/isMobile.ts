import { useState, useEffect } from 'react';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 500);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
