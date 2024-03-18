// src/components/Pricing.jsx
import React from 'react';
import Link from 'next/link';

const Pricing = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$2000</p>
            <p className="text-gray-500 mb-6">
              Perfect for small businesses and startups
            </p>
            <ul className="text-lg space-y-4 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Single Page Application</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Analytics</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SEO Optimization</span>
              </li>
            </ul>
            <Link href="/#contact" legacyBehavior>
              <a
                className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300 mt-8 text-center"
                onClick={handleGetStartedClick}
              >
                Get Started
              </a>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <p className="text-4xl font-bold mb-4">$5000</p>
            <p className="text-gray-500 mb-6">
              Ideal for larger and growing businesses
            </p>
            <ul className="text-lg space-y-4 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Multi-Page Application</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Up to 20 Pages</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced SEO Optimization</span>
              </li>
            </ul>
            <Link href="/#contact" legacyBehavior>
              <a
                className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300 mt-8 text-center"
                onClick={handleGetStartedClick}
              >
                Get Started
              </a>
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">$10000</p>
            <p className="text-gray-500 mb-6">
              Tailored for organizations and complex projects
            </p>
            <ul className="text-lg space-y-4 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom Application Development</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Enterprise-level Analytics</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited Pages</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced SEO Strategy</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Full E-commerce Integration</span>
              </li>
            </ul>
            <Link href="/#contact" legacyBehavior>
              <a
                className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300 mt-8 text-center"
                onClick={handleGetStartedClick}
              >
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
