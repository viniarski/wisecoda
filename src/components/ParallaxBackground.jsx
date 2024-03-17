// src/components/ParallaxBackground.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxContainer = parallaxRef.current;

    gsap.to(parallaxContainer, {
      scrollTrigger: {
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.5,
      ease: 'none',
    });
  }, []);

  return <div ref={parallaxRef} className="parallax-background"></div>;
};

export default ParallaxBackground;
