import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock jab menu khula ho
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Works", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-8 pointer-events-none">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`
            w-full max-w-[1400px] h-24 md:h-32 
            flex items-center justify-between px-6 md:px-12
            rounded-[30px] border transition-all duration-500 pointer-events-auto
            ${scrolled ? "glass border-white/10 shadow-2xl backdrop-blur-3xl" : "bg-transparent border-transparent"}
          `}
        >
          {/* 🔥 LOGO: Laptop par bada, mobile par balanced */}
          <div onClick={() => handleScrollTo("hero")} className="h-full flex items-center cursor-pointer">
            <img 
              src={logo} 
              alt="logo" 
              className="h-[75%] md:h-[90%] w-auto object-contain drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]" 
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-12 font-['Outfit']">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleScrollTo(link.id)}
                className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[var(--color-accent)] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => handleScrollTo("contact")} className="bg-[var(--color-accent)] text-black px-8 py-4 rounded-2xl font-['Syne'] font-bold uppercase text-[11px] tracking-widest hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
              Hire Me
            </button>
          </div>

          {/* MOBILE TOGGLE: Clean & Premium */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[var(--color-accent)]"
          >
            <Menu size={30} />
          </button>
        </motion.nav>
      </div>

      {/* 🔥 2026 FULL-SCREEN MENU (No Overlaps) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#05101A] z-[200] flex flex-col p-8 md:hidden"
          >
            {/* Header Area */}
            <div className="flex justify-between items-center h-24 mb-10">
              <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
              <button 
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Links: Huge & Clear */}
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-7xl font-['Syne'] font-black text-white text-left flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight size={40} className="text-[var(--color-accent)] opacity-40" />
                </motion.button>
              ))}
            </div>

            {/* Bottom Contact Area */}
            <div className="mt-auto pb-10 border-t border-white/10 pt-10">
              <p className="font-['Outfit'] text-slate-500 uppercase tracking-widest text-xs mb-4">Let's build something</p>
              <h3 className="text-2xl font-['Syne'] font-bold text-white tracking-tighter">codelab.dev@gmail.com</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;