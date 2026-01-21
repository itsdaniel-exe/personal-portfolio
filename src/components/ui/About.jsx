import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-background/50 relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                        BUILDING <br />
                        <span className="text-transparent text-outline">INTELLIGENT SYSTEMS</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                        <p>
                            I bridge the gap between <span className="text-white">Advanced AI</span> and <span className="text-white">Intuitive User Experiences</span>. My passion lies in creating systems that not only exist on a screen but perceive, reason, and adapt to user needs.
                        </p>
                        <p>
                            Currently pursuing my Computer Science degree. I specialize in integrating Large Language Models into scalable web applications, developing computer vision solutions, and building full-stack applications that solve complex, human-centric problems.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-3xl font-display font-bold text-secondary">04</div>
                            <div className="text-xs font-mono text-gray-500 mt-1">MAJOR SYSTEMS</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-secondary">AI</div>
                            <div className="text-xs font-mono text-gray-500 mt-1">RESEARCH FOCUS</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-secondary">WEB</div>
                            <div className="text-xs font-mono text-gray-500 mt-1">INTEGRATION</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] bg-surface relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
                    {/* Abstract visual to replace photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 border border-white/20 rounded-full animate-spin-slow"></div>
                        <div className="absolute w-48 h-48 border border-white/20 rounded-full animate-reverse-spin"></div>
                        <div className="absolute w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
                    </div>

                    <div className="absolute bottom-8 left-8 z-20">
                        <p className="font-mono text-xs text-primary mb-2">CURRENT FOCUS</p>
                        <p className="text-2xl font-display font-bold text-white">GENERATIVE AI & <br /> WEB SYSTEMS</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
