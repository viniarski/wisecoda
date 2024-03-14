import React from 'react';
import Image from 'next/image';
import logo from './images/assets/logo.png';

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
      <header className="text-center mb-8 z-10">
        <h1 className="text-4xl font-bold text-accent mb-2">Wisecoda</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-secondary hover:text-primary">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary hover:text-primary">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="z-10">
        <h2 className="text-5xl font-bold text-primary mb-4">
          We build your online presence
        </h2>
        <p className="text-xl text-secondary mb-8">
          From concept to launch, we're here to bring your vision to life!
        </p>
        <button className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default HomePage;
