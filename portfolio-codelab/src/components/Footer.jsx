import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--color-bg)] px-6 md:px-14 py-24 border-t border-white/5 overflow-hidden">
      
      {/* 2026 BACKGROUND ACCENT - Ek halka sa glow background mein */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-accent)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP SECTION: LOGO & CONTACT GIANT TEXT */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          
          <div className="space-y-6 flex flex-col items-start w-full md:w-auto">
            {/* 🔥 MEGA LOGO - Size fixed for all devices */}
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={logo}
              alt="logo"
              className="
                h-16 md:h-24 /* 🔥 Laptop par 24 (96px) aur mobile par 16 (64px) - kaafi bada hai */
                w-auto object-contain
                drop-shadow-[0_0_25px_rgba(0,212,255,0.3)]
              "
            />
            <p className="font-['Outfit'] text-[var(--color-muted)] text-sm md:text-base max-w-sm leading-relaxed">
              Crafting high-end digital experiences with the power of MERN stack & modern UI.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <span className="text-[var(--color-accent)] font-['Syne'] font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Get in touch
            </span>
            <a 
              href="mailto:codelab.dev@gmail.com" 
              className="text-3xl md:text-5xl font-['Syne'] font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-all duration-500 tracking-tighter"
            >
              Let's Talk.
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION: BENTO LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/5">
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-['Syne'] text-xs font-bold uppercase tracking-widest text-[var(--color-text)]">Navigation</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors text-sm font-['Outfit'] w-fit">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Presence */}
          <div className="space-y-4 md:col-span-2">
             <h4 className="font-['Syne'] text-xs font-bold uppercase tracking-widest text-[var(--color-text)]">Socials</h4>
             <div className="flex gap-3">
               {[
                 { icon: <FaGithub />, link: "https://github.com/Aman260249" },
                 { icon: <FaInstagram />, link: "#" },
                 { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/aman-sharma-2b0183210" }
               ].map((social, i) => (
                 <motion.a
                   key={i}
                   href={social.link}
                   target="_blank"
                   whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                   className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all"
                 >
                   {social.icon}
                 </motion.a>
               ))}
             </div>
          </div>

          {/* Info */}
          <div className="md:text-right space-y-2">
            <p className="font-['Syne'] text-xl font-bold text-[var(--color-text)]">Aman Sharma</p>
            <p className="text-[var(--color-muted)] text-xs font-['Outfit'] uppercase tracking-widest">Delhi, India IN</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] md:text-xs font-['Outfit'] text-[var(--color-muted)] uppercase tracking-widest">
          <p>© {currentYear} Codelab — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p>Built with <span className="text-[var(--color-accent)] animate-pulse">❤</span></p>
            <p className="text-[var(--color-text)]">V: 2.0.26</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;