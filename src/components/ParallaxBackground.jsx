// src/components/ParallaxBackground.jsx
import React, { useEffect, useRef } from 'react';
import logo from '/public/assets/logo_wisecoda.png';

const ParallaxBackground = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxContainer = parallaxRef.current;

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      parallaxContainer.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="parallax-background"
      style={{ backgroundImage: `url(${logo.src})` }}
    ></div>
  );
};

export default ParallaxBackground;
