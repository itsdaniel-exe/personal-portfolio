import React from 'react';
import { motion } from 'framer-motion';
import { Home, FolderOpen, User, Mail, Cpu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/contact', label: 'Connect', icon: Mail },
];

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed top-6 left-1/2 z-40"
        >
            <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl shadow-primary/5">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `relative px-4 py-2 rounded-full transition-all duration-300 group flex items-center gap-2 ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <span className="relative z-10 flex items-center gap-2">
                                    <item.icon className="w-4 h-4" />
                                    <span className={`text-sm font-medium ${isActive ? 'block' : 'hidden md:block'}`}>
                                        {item.label}
                                    </span>
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
