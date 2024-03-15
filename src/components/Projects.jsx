// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-primary">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/path/to/project1.jpg" alt="Project 1" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">Brief description of project 1.</p>
          </div>
          <div>
            <img src="/path/to/project2.jpg" alt="Project 2" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">Brief description of project 2.</p>
          </div>
          <div>
            <img src="/path/to/project3.jpg" alt="Project 3" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-lg">Brief description of project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
