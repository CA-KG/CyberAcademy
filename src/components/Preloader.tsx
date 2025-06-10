import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    };

    const progressEl = progressRef.current;
    if (progressEl) {
      progressEl.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (progressEl) {
        progressEl.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <img src="/images/logo.svg" alt="Логотип" className="preloader-logo" />
      <div className="progress-bar">
        <div className="progress" ref={progressRef} />
      </div>
    </div>
  );
};

export default Preloader;
