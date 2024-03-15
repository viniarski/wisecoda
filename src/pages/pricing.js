// src/pages/faq.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import '../app/globals.css';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Header />
      <main className="flex-grow">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
