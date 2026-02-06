import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from "../assets/logo.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const neonColor = "#8E7FFF";
  const mernGradient = "linear-gradient(to right, #8B8BD8, #575762, #494972)";

  return (
    // Height ko min-h-[50vh] rakha hai taki snap theek se ho
    <footer className="w-full min-h-[50vh] flex flex-col justify-between py-16 px-6 laptop:px-32 bg-[#0F0F0F] border-t border-white/5 snap-start relative">
      
      {/* Dynamic Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8E7FFF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-16">
        
        {/* LEFT: Logo Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
              <img
    src={logo}
    alt="CodeLabBro Logo"
    className="h-25 w-auto scale-125 origin-left"
  />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            "This logo is a symbol of my professional integrity—a personal brand mark I embed in every creation. 
            <span className="text-white font-semibold"> CodeLabBro</span> is my coding persona, representing my dedication to high-quality development."
          </p>
        </div>

        {/* MIDDLE: Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Quick Navigation</h4>
          <nav className="flex flex-col gap-3">
            {['Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-[#8E7FFF] transition-all w-fit text-sm font-semibold tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT: Follow & Personal Info */}
        <div className="flex flex-col laptop:items-end gap-6">
          <div className="laptop:text-right">
            <h3 className="text-white text-2xl font-black tracking-tight">Aman Sharma</h3>
            <p style={{ backgroundImage: mernGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className="text-xs font-bold uppercase tracking-widest">
                Full Stack Developer
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -5, scale: 1.1 }}
                style={{ borderColor: 'rgba(142, 127, 255, 0.2)' }}
                className="p-3 bg-white/5 rounded-xl text-gray-400 border hover:border-[#8E7FFF] hover:text-[#8E7FFF] transition-all text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col tablet:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
          © {currentYear} <span className="text-gray-400">CODELABBRO</span> • ALL RIGHTS RESERVED
        </p>
        <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-bold tracking-widest bg-white/5 px-4 py-2 rounded-full">
           Built with <span className="text-[#8E7FFF] animate-pulse">❤</span>by Aman
        </div>
      </div>
    </footer>
  );
};

export default Footer;