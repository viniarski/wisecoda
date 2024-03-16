// src/components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-20 pt-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold mb-8 text-primary">FAQ</h2>
        <div className="space-y-2">
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 0 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(0)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                What sets Wisecoda apart from other web development agencies?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 0 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 0 && (
              <p className="text-lg mt-4">
                At Wisecoda, we blend wisdom with code to create innovative
                digital solutions that drive tangible business results. Our
                unique approach, backed by expertise and advanced technology,
                sets us apart in the industry.
              </p>
            )}
          </div>
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 1 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                Can you customize your web development services to suit my
                business needs?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 1 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 1 && (
              <p className="text-lg mt-4">
                Absolutely! We understand that every business is unique, which
                is why we offer tailored solutions to meet your specific
                requirements. Whether you're a small startup or a large
                corporation, we'll work closely with you to develop a customized
                strategy that aligns with your goals.
              </p>
            )}
          </div>
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 2 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                How long does it typically take to complete a web development
                project?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 2 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 2 && (
              <p className="text-lg mt-4">
                The duration of a web development project varies depending on
                the complexity and scope of the project. However, at Wisecoda,
                we strive to deliver high-quality results within a reasonable
                timeframe. On average, a standard website development project
                takes around 6-8 weeks from the initial consultation to the
                final launch. For more complex projects or those with additional
                features, the timeline may be longer. We work closely with our
                clients to establish a clear project plan and timeline to ensure
                a smooth and efficient development process.
              </p>
            )}
          </div>
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 3 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                Do you provide ongoing maintenance and support after the website
                is launched?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 3 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 3 && (
              <p className="text-lg mt-4">
                Yes, we offer ongoing maintenance and support services to ensure
                that your website remains up-to-date, secure, and performs
                optimally. Our maintenance packages include regular software
                updates, security monitoring, backups, and technical support. We
                understand that your website is a critical asset for your
                business, and we are committed to providing reliable and
                proactive support to keep it running smoothly. You can choose
                from our flexible maintenance plans based on your specific needs
                and budget.
              </p>
            )}
          </div>
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 4 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(4)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                Can you help with search engine optimization (SEO) for my
                website?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 4 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 4 && (
              <p className="text-lg mt-4">
                Absolutely! We understand the importance of search engine
                visibility for the success of your website. Our team of SEO
                experts can help optimize your website to improve its search
                engine rankings and drive organic traffic. We follow the latest
                SEO best practices and techniques, including keyword research,
                on-page optimization, content optimization, and link building.
                We can also provide ongoing SEO services to monitor and maintain
                your website's search engine performance. Our goal is to help
                your website rank higher in search results and attract more
                qualified leads.
              </p>
            )}
          </div>
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 5 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(5)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                Do you offer custom website design, or do you work with
                templates?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 5 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 5 && (
              <p className="text-lg mt-4">
                At Wisecoda, we specialize in custom website design to ensure
                that your website stands out from the competition and aligns
                with your brand identity. We believe that every business is
                unique, and a custom design allows us to create a website that
                perfectly captures your brand personality and meets your
                specific requirements. Our design process involves understanding
                your business goals, target audience, and design preferences to
                create a visually appealing and user-friendly website. While we
                do not work with pre-built templates, we can develop custom
                themes and layouts that are tailored to your needs.
              </p>
            )}
          </div>
          <div
            className={`border border-gray-300 rounded-2xl p-6 cursor-pointer transition duration-300 ${
              activeIndex === 6 ? 'bg-white shadow-md' : 'bg-gray-100'
            }`}
            onClick={() => toggleAccordion(6)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                How do you ensure the security of my website?
              </h3>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === 6 ? 'transform rotate-45' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            {activeIndex === 6 && (
              <p className="text-lg mt-4">
                Website security is a top priority for us at Wisecoda. We
                implement various security measures to protect your website from
                potential threats and vulnerabilities. Our security practices
                include using secure hosting environments, implementing SSL
                certificates for encrypted data transmission, regularly updating
                software and plugins, and setting up firewall protection. We
                also conduct periodic security audits and vulnerability scans to
                identify and address any potential security risks. Additionally,
                we provide security training to our development team to ensure
                that they follow the latest security best practices throughout
                the development process.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
