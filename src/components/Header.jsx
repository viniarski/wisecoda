// Header.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === '/') {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="top-0 left-0 right-0 p-8 z-10 bg-light">
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
              <Link href="/#hero" legacyBehavior>
                <a
                  onClick={(e) => handleLinkClick(e, 'hero')}
                  className="text-secondary hover:text-primary transition duration-300"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about" legacyBehavior>
                <a
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-secondary hover:text-primary transition duration-300"
                >
                  Discover
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact" legacyBehavior>
                <a
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="text-secondary hover:text-primary transition duration-300"
                >
                  Contact
                </a>
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
              <Link href="/#hero" legacyBehavior>
                <a
                  onClick={(e) => handleLinkClick(e, 'hero')}
                  className="block text-secondary hover:text-primary transition duration-300"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about" legacyBehavior>
                <a
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="block text-secondary hover:text-primary transition duration-300"
                >
                  Discover
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact" legacyBehavior>
                <a
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="block text-secondary hover:text-primary transition duration-300"
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
