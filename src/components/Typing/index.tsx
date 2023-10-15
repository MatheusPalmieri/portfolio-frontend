import { useEffect, useState, useRef } from 'react';

interface TypingProps {
  career: string[];
  time?: number;
}

export const Typing = ({ career, time = 300 }: TypingProps): string => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(time - Math.random() * 100);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [index, setIndex] = useState(1);
  const period = 2000;
  const toRotate = career;

  const tickerRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const startTicker = () => {
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
      }

      tickerRef.current = setInterval(tick, delta);
    };

    startTicker();

    return () => {
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return text;
};
