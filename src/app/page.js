import React from 'react';
import Image from 'next/image';
import logo from '../images/assets/logo_wisecoda.png';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center relative">
      <Image
        src={logo}
        alt="Wisecoda Logo"
        width={500}
        height={500}
        className="absolute opacity-10 z-0"
      />
      <Header />
      <main className="z-10 text-center">
        <h2 className="text-5xl font-bold text-primary mb-4 max-w-3xl mx-auto leading-tight">
          We build your online presence
        </h2>
        <p className="text-xl text-secondary mb-8">
          &#123;From concept to launch,{' '}
          <strong>
            we're here to bring{' '}
            <span className="text-accent">your vision to life!&#125;</span>
          </strong>
          &#125;
        </p>
        <button className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default HomePage;
