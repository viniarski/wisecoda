import React from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo_wisecoda.png';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center relative">
      <Image
        src={logo}
        alt="Wisecoda Logo"
        width={500}
        height="auto"
        className="absolute opacity-10 z-0"
      />
      <Header />
      <main className="z-10 text-center">
        <h1 className="text-8xl font-bold text-primary text-left mb-4 max-w-3xl mx-auto leading-tight">
          We build your
          <br /> online <br />
          presence
        </h1>
        <p className="text-xl text-secondary text-left mb-8">
          &#123;From concept to launch,
          <br /> we're here to bring
          <strong>
            <span className="text-accent"> your vision to life</span>
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
