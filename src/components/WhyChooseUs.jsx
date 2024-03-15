// WhyChooseUs.jsx
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Expertise and Insight</h3>
            <p className="text-lg">
              Our team comprises seasoned professionals with a wealth of
              experience in web development and digital strategy. We bring a
              unique blend of expertise and insight to every project, ensuring
              optimal results for our clients.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Innovative Approach</h3>
            <p className="text-lg">
              We're not afraid to push boundaries and explore new technologies
              to stay ahead of the curve. Our innovative approach to web
              development sets us apart, allowing us to deliver cutting-edge
              solutions that drive real impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Customer-Centric Focus</h3>
            <p className="text-lg">
              At Wisecoda, customer satisfaction is our top priority. We go
              above and beyond to understand our clients' needs and exceed their
              expectations. From personalized service to ongoing support, we're
              committed to building lasting relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
