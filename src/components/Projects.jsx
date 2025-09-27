import React from "react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "My first website",
            description: "a website to sell cars",
            technologies: ["Django, React, Javascript"],
            image: "#",
            livelink: "#",
            codelink: "#",
        },
        {
            id: 2,
            title: "inventory management",
            description: "a website to manage inventory",
            technologies: ["django, JavaScript"],
            image: "#",
            livelink: "#",
            codelink: "#",
        },
        {
            id: 3,
            title: "notification",
            description: "a website to manage notifications for an organisation",
            technologies: ["django, javascript"],
            image: "#",
            livelink: "#",
            codelink: "#",
        }
    ];

    return (
        <section id="projects" className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3l font-bold text-center text-gray-800 mb-4">My Projects</h2>
                <p className="text-center text-gray-600 mb-12">Here are some of my recent works</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a href={project.livelink} className="text-blue-600 hover:text-blue-800 font-medium">
                                        Live Demo
                                    </a>
                                    <a href={project.codelink} className="text-gray-600 hover:text-gray-800 font-medium">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;