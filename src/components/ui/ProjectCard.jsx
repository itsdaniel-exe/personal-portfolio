import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            className="group relative block"
        >
            {/* Navigates to detail page */}
            <Link
                to={`/project/${project.id}`}
                className="relative block border-b border-white/20 pb-8 hover:border-primary transition-colors duration-500 cursor-pointer"
            >

                {/* Header - shown before hover */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-primary font-mono text-xs mb-2 block">{project.category}</span>
                        <h3 className="text-3xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>
                    </div>
                    <ArrowUpRight className="w-8 h-8 text-white/50 group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                </div>

                {/* Content reveal on click/hover - simplified for this view */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-48 w-full bg-surface overflow-hidden relative transition-all duration-500">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-contain p-6" />
                        ) : (
                            <>
                                <div className={`absolute inset-0 ${project.color} opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                                {/* Mock UI Elements */}
                                <div className="absolute inset-4 border border-white/10"></div>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col justify-between">
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {project.shortDescription || project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
