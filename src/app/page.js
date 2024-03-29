// page.js
'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import ParallaxBackground from '../components/ParallaxBackground';

const HomePage = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Header />

      <main className="flex-grow">
        <section
          id="hero"
          className="min-h-screen max-w-7xl mx-auto px-4 pt-12"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 leading-tight animate-slide-in">
                  <span className="block">We build</span>
                  <span className="block">online</span>
                  <span className="block">presence</span>
                </h1>
                <p className="text-xl text-secondary mb-8 py-8 animate-slide-in-from-top">
                  &#123;From concept to launch, we're here to bring
                  <strong>
                    <span className="text-accent"> your vision to life</span>
                  </strong>
                  &#125;
                </p>

                <button
                  className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300"
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </button>
              </div>
              <ParallaxBackground />
            </div>
          </div>
        </section>

        <AboutUs />
        <WhyChooseUs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
