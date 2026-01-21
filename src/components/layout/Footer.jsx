import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Daniel Rupaan Kalery. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
