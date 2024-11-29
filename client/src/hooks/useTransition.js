import { useState, useEffect } from 'react';

const useTransition = (showDuration, dimDuration) => {
  const [showTransition, setShowTransition] = useState(true);
  const [animateDimming, setAnimateDimming] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setAnimateDimming(true), showDuration);
    const dimTimer = setTimeout(() => setShowTransition(false), dimDuration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(dimTimer);
    };
  }, [showDuration, dimDuration]);

  return { showTransition, animateDimming };
};

export default useTransition;
