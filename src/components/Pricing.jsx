// src/components/Pricing.jsx
import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Small Business</h3>
            <p className="text-4xl font-bold mb-4">$2000</p>
            <ul className="text-lg space-y-2">
              <li>Single Page Application</li>
              <li>Analytics</li>
              <li>Unlimited Pages</li>
              <li>Share Features</li>
            </ul>
            <button className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300 mt-6">
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <p className="text-4xl font-bold mb-4">$5000</p>
            <ul className="text-lg space-y-2">
              <li>Up to 10 pages</li>
              <li>Analytics</li>
              <li>Unlimited Pages</li>
              <li>Share Features</li>
            </ul>
            <button className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300 mt-6">
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Exclusive</h3>
            <p className="text-4xl font-bold mb-4">$10000</p>
            <ul className="text-lg space-y-2">
              <li>Unlimited</li>
              <li>Analytics</li>
              <li>Multiple Pages</li>
              <li>SEO</li>
            </ul>
            <button className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300 mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
