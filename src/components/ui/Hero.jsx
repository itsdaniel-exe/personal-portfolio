import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 opacity-30" />

            <div className="w-full max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Side (Left) */}
                <div className="lg:col-span-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-primary"></div>
                        <span className="font-mono text-primary tracking-widest text-xs uppercase">Full Stack & AI Developer</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 font-display"
                    >
                        ENGINEERING <br />
                        <span className="text-transparent text-outline hover:text-white transition-colors duration-500 cursor-default">
                            THE FUTURE
                        </span>
                        <span className="text-primary text-6xl md:text-8xl">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl text-gray-400 max-w-xl leading-relaxed font-light"
                    >
                        Building intelligent, high-performance web applications integrated with cutting-edge Generative AI. I create systems that perceive, reason, and solve complex problems.
                    </motion.p>
                </div>

                {/* Visual/Interactive Side (Right) */}
                <motion.div
                    style={{ y: y1 }}
                    className="lg:col-span-4 relative hidden lg:block"
                >
                    <div className="relative z-10 border border-white/20 p-8 pt-12 backdrop-blur-sm bg-white/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 left-0 bg-primary text-black px-4 py-1 text-xs font-bold uppercase tracking-wider">
                            Building Next-Gen Apps
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">Current Status</h3>
                        <div className="space-y-4 font-mono text-sm text-gray-300">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Name</span>
                                <span className="text-white">Daniel Rupaan Kalery</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Focus</span>
                                <span className="text-white text-right">AI-Powered<br />Web Applications</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Stack</span>
                                <span className="text-white">React / Python / AI</span>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button className="flex-1 bg-white text-black py-3 font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                LET'S TALK <ArrowDownRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Decorative element behind */}
                    <motion.div
                        style={{ y: y2 }}
                        className="absolute top-10 -right-10 w-full h-full border-2 border-primary/30 z-0"
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-6 lg:left-12 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                <span className="text-xs font-mono text-gray-400 tracking-widest writing-vertical-rl rotate-180">SCROLL TO EXPLORE</span>
            </motion.div>
        </section>
    );
};

export default Hero;
