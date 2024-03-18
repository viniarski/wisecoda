// Header.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 left-0 right-0 pt-8 z-10 bg-light">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Wisecoda Logo"
              width={250}
              height="auto"
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/">
                <span className="text-secondary hover:text-primary transition duration-300">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <span className="text-secondary hover:text-primary transition duration-300">
                  Discover
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <span className="text-secondary hover:text-primary transition duration-300">
                  Contact
                </span>
              </Link>
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
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light p-4">
          <ul>
            <li>
              <Link href="/">
                <span className="block text-secondary hover:text-primary transition duration-300">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <span className="block text-secondary hover:text-primary transition duration-300">
                  Discover
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <span className="block text-secondary hover:text-primary transition duration-300">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
