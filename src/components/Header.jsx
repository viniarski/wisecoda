'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-4 z-10 flex items-center justify-between bg-light">
      <div className="flex justify-center w-full md:justify-start md:w-auto">
        <Image
          src={logo}
          alt="Wisecoda Logo"
          width={200}
          height="auto"
          className="h-auto w-auto"
        />
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="text-secondary hover:text-primary transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="text-secondary hover:text-primary transition duration-300"
            >
              Discover
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="text-secondary hover:text-primary transition duration-300"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="text-secondary hover:text-primary transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light p-4">
          <ul>
            <li>
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, 'hero')}
                className="block text-secondary hover:text-primary py-2 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="block text-secondary hover:text-primary py-2 transition duration-300"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, 'gallery')}
                className="block text-secondary hover:text-primary py-2 transition duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="block text-secondary hover:text-primary py-2 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
