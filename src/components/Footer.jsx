import React from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-accent text-light py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src={logo}
              alt="Wisecoda Logo"
              width={150}
              height="auto"
              className="h-auto w-auto"
            />
            <p className="ml-4 text-sm">
              &copy; {new Date().getFullYear()} Wisecoda. All rights reserved.
            </p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-light hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-light hover:text-primary">
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-light hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-light hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-light hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8">
          <p className="text-sm text-center">
            Transform Your Digital Presence Today - Contact Wisecoda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
