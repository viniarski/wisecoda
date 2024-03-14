'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo_wisecoda.png';
import Header from '../components/Header';
import Contact from '../components/Contact';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Header />
      <main className="flex-grow">
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 leading-tight animate-slide-in">
                  <span className="block">We build your</span>
                  <span className="block">online</span>
                  <span className="block">presence</span>
                </h1>
                <p className="text-xl text-secondary mb-8">
                  &#123;From concept to launch, we're here <br /> to bring
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
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src={logo}
                  alt="Wisecoda Logo"
                  width={800}
                  height="auto"
                  className="opacity-20"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-4">
              At Wisecoda, we're a team of visionaries, blending wisdom and code
              to craft digital solutions that propel businesses forward. Our
              mission is to empower businesses with strategic web development
              services backed by expertise, insight, and cutting-edge
              technology.
            </p>
          </div>
        </section>

        <section id="why-us" className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Expertise and Insight
                </h3>
                <p className="text-lg">
                  Our team comprises seasoned professionals with a wealth of
                  experience in web development and digital strategy. We bring a
                  unique blend of expertise and insight to every project,
                  ensuring optimal results for our clients.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Innovative Approach</h3>
                <p className="text-lg">
                  We're not afraid to push boundaries and explore new
                  technologies to stay ahead of the curve. Our innovative
                  approach to web development sets us apart, allowing us to
                  deliver cutting-edge solutions that drive real impact.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Customer-Centric Focus
                </h3>
                <p className="text-lg">
                  At Wisecoda, customer satisfaction is our top priority. We go
                  above and beyond to understand our clients' needs and exceed
                  their expectations. From personalized service to ongoing
                  support, we're committed to building lasting relationships
                  with our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Gallery</h2>
            {/* Add gallery component or images */}
          </div>
        </section>

        <section id="faq" className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">FAQ</h2>
            <div className="space-y-4">
              <div
                className="border border-gray-300 rounded p-4 cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                <h3 className="text-xl font-bold mb-2">
                  What sets Wisecoda apart from other web development agencies?
                </h3>
                {activeIndex === 0 && (
                  <p className="text-lg">
                    At Wisecoda, we blend wisdom with code to create innovative
                    digital solutions that drive tangible business results. Our
                    unique approach, backed by expertise and advanced
                    technology, sets us apart in the industry.
                  </p>
                )}
              </div>
              <div
                className="border border-gray-300 rounded p-4 cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                <h3 className="text-xl font-bold mb-2">
                  Can you customize your web development services to suit my
                  business needs?
                </h3>
                {activeIndex === 1 && (
                  <p className="text-lg">
                    Absolutely! We understand that every business is unique,
                    which is why we offer tailored solutions to meet your
                    specific requirements. Whether you're a small startup or a
                    large corporation, we'll work closely with you to develop a
                    customized strategy that aligns with your goals.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
