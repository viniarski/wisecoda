// src/pages/faq.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import '../app/globals.css';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col">
      <Header />
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
