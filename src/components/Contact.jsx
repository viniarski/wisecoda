'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can use an API endpoint or a server-side script to handle form submission
    // For simplicity, let's just log the form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex mb-6">
            <div className="w-1/2 mr-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-light px-6 py-3 rounded-full hover:bg-secondary transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
