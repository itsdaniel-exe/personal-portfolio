import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

import { projects, categories } from '../../data/projects';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredProjects = activeCategory === "ALL"
        ? projects
        : projects.filter(p => p.category.includes(activeCategory));

    return (
        <section id="projects" className="py-32 bg-background relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/20 pb-6">
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-transparent text-outline">
                        RECENT <br /> <span className="text-white">PROJECTS</span>
                    </h2>

                    <div className="flex gap-4 mt-6 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-xs font-mono transition-colors ${activeCategory === cat ? 'text-primary underline decoration-2 underline-offset-4' : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
