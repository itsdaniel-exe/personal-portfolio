import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden flex flex-col justify-center">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-30" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 opacity-30" />

            <div className="max-w-6xl w-full mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                    {/* Header Block */}
                    <div className="md:col-span-2 md:row-span-2 bg-surface/50 border border-white/10 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div>
                            <p className="text-primary font-mono text-sm tracking-widest mb-4">CONTACT</p>
                            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[0.9]">
                                LET'S <br /> CONNECT
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-sm mt-8">
                            Ready to build something extraordinary? I'm currently available for freelance projects and full-time opportunities.
                        </p>
                    </div>

                    {/* Personal Email */}
                    <a href="mailto:dabber109@gmail.com" className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-primary/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white group-hover:bg-primary group-hover:text-black transition-colors">
                            <ArrowRight className="w-4 h-4 -rotate-45" />
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">Personal</span>
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-white mt-4 break-all">
                            dabber109<span className="text-gray-500">@gmail.com</span>
                        </div>
                    </a>

                    {/* Work Email */}
                    <a href="mailto:daniwork300@gmail.com" className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4 -rotate-45" />
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                                <Mail className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">Work</span>
                        </div>
                        <div className="text-2xl lg:text-3xl font-bold text-white mt-4 break-all">
                            daniwork300<span className="text-gray-500">@gmail.com</span>
                        </div>
                    </a>

                    {/* Socials - LinkedIn */}
                    <a href="https://linkedin.com/in/daniel-rupaan-kalery-f-47786821b" target="_blank" rel="noopener noreferrer" className="md:col-span-1 md:row-span-1 bg-[#0077b5]/10 border border-[#0077b5]/20 rounded-3xl p-6 hover:bg-[#0077b5] hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-[200px]">
                        <Linkedin className="w-8 h-8 text-[#0077b5] group-hover:text-white transition-colors" />
                        <div>
                            <p className="text-sm text-[#0077b5] group-hover:text-white/80 mb-1">Connect on</p>
                            <p className="text-xl font-bold text-white">LinkedIn</p>
                        </div>
                    </a>

                    {/* Socials - GitHub */}
                    <a href="https://github.com/DabsterMaster" target="_blank" rel="noopener noreferrer" className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 group flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Github className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                            <div>
                                <p className="text-sm text-gray-400 group-hover:text-gray-500">Check Code</p>
                                <p className="text-xl font-bold text-white group-hover:text-black">GitHub</p>
                            </div>
                        </div>
                        <ArrowRight className="w-6 h-6 -rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>

                    {/* Socials - Instagram */}
                    <a href="https://www.instagram.com/its_daniel.exe?igsh=MXE3aGo2cDB0Z3hvbw==" target="_blank" rel="noopener noreferrer" className="md:col-span-1 bg-gradient-to-tr from-[#F58529]/10 via-[#E1306C]/10 to-[#833AB4]/10 border border-[#E1306C]/20 rounded-3xl p-6 hover:from-[#F58529] hover:via-[#E1306C] hover:to-[#833AB4] hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-[200px]">
                        <Instagram className="w-8 h-8 text-[#E1306C] group-hover:text-white transition-colors" />
                        <div>
                            <p className="text-sm text-[#E1306C] group-hover:text-white/80 mb-1">Follow on</p>
                            <p className="text-xl font-bold text-white">Instagram</p>
                        </div>
                    </a>

                </motion.div>


            </div>
        </section>
    );
};

export default Contact;
