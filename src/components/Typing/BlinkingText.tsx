import React, { useState, useEffect, useRef } from 'react';

import { Text } from '@mantine/core';

interface BlinkingProps {
  margin?: number;
}

function useIsComponentVisible() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element: any = ref.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isElementVisible = rect.top < windowHeight && rect.bottom >= 0;

        setIsVisible(isElementVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isVisible, ref };
}

export const BlinkingText = ({ margin = 0 }: BlinkingProps) => {
  const { isVisible, ref } = useIsComponentVisible();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBlinking, setIsBlinking] = useState(true);
  const blinkIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isVisible) {
      const blinkInterval = setInterval(() => {
        setIsBlinking((prevIsBlinking) => !prevIsBlinking);
      }, 2000);
      blinkIntervalRef.current = blinkInterval;
    } else {
      clearInterval(blinkIntervalRef.current);
    }

    return () => {
      clearInterval(blinkIntervalRef.current);
    };
  }, [isVisible]);

  return (
    <Text span ml={margin}>
      <style>
        {`
          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .blinking {
            animation: blink 1s infinite;
          }
        `}
      </style>
      <Text ref={ref} className={isVisible ? 'blinking' : ''} span>
        |
      </Text>
    </Text>
  );
};
