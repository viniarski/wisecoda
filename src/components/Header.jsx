import React from 'react';
import Image from 'next/image';
import logo from '../images/assets/logo.png';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 z-10 flex items-center justify-between">
      <Image
        src={logo}
        alt="Wisecoda Logo"
        width={150}
        height={50}
        className="h-auto w-auto"
      />
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
  );
};

export default Header;
