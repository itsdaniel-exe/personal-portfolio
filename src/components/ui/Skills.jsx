import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "PYTHON", "GEMINI AI", "YOLOv8", "TENSORFLOW",
    "REACT", "TYPESCRIPT", "NEXT.JS", "NODE.JS",
    "TAILWIND", "FIREBASE", "AWS", "DOCKER",
    "GIT", "FRAMER MOTION", "POSTGRESQL", "VITE"
];

const experience = [
    {
        role: "LEAD ENGINEER",
        company: "ZENSLEEP",
        period: "2025",
    },
    {
        role: "SYSTEMS ARCHITECT",
        company: "AI PROCTORING",
        period: "2024",
    },
    {
        role: "FULL STACK DEV",
        company: "REMMATE.IO",
        period: "2024",
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-background relative border-b border-white/10">
            <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">

                {/* Skills Marquee / Grid */}
                <div>
                    <h2 className="font-mono text-primary tracking-widest text-xs mb-12 uppercase">Technical Arsenal</h2>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="text-2xl md:text-4xl font-display font-bold text-transparent text-outline hover:text-primary transition-colors duration-300 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Experience Table */}
                <div>
                    <h2 className="font-mono text-primary tracking-widest text-xs mb-12 uppercase">Trajectory</h2>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group border-t border-white/20 pt-8"
                            >
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-3xl text-white font-display font-bold group-hover:text-secondary transition-colors">{exp.company}</h3>
                                    <span className="font-mono text-gray-400 text-sm">{exp.period}</span>
                                </div>
                                <p className="text-gray-500 font-mono text-sm">{exp.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
