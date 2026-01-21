import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/projects" className="text-primary hover:underline">Back to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-background pt-32 pb-20 px-6"
        >
            <div className="max-w-4xl mx-auto">
                <Link to="/projects" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <span className="text-primary font-mono text-sm tracking-widest mb-4 block">{project.category}</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">{project.shortDescription}</p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-surface/50 border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {project.features && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white">Key Features</h3>
                                <div className="grid gap-4">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="bg-surface/30 border border-white/5 p-6 rounded-2xl">
                                            <div className="flex items-start gap-4">
                                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        {/* Links Card */}
                        <div className="bg-surface/50 border border-white/10 rounded-3xl p-6">
                            <h3 className="text-white font-bold mb-4">Project Links</h3>
                            <div className="flex flex-col gap-3">
                                {project.links.demo !== "#" && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-primary/10 hover:bg-primary/20 text-primary p-4 rounded-xl transition-colors">
                                        <span className="font-semibold">Live Demo</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                                {project.links.github !== "#" && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white/5 hover:bg-white/10 text-white p-4 rounded-xl transition-colors">
                                        <span className="font-semibold">Source Code</span>
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-surface/50 border border-white/10 rounded-3xl p-6">
                            <h3 className="text-white font-bold mb-4">Tech Stack</h3>
                            <div className="space-y-4">
                                {Object.entries(project.techStack || {}).map(([category, techs]) => (
                                    <div key={category}>
                                        <p className="text-xs text-gray-500 font-mono mb-2 uppercase">{category}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map(tech => (
                                                <span key={tech} className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-xs border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner Image if available */}
                {project.image && (
                    <div className="w-full h-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
