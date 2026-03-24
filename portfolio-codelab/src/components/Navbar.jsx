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

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
      
      {/* 🔥 FLOATING GLASS NAV */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          w-full max-w-[1200px]
          h-14 md:h-16
          flex items-center justify-between
          px-5 md:px-8
          rounded-2xl
          border transition-all duration-500
          ${scrolled 
            ? "bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"}
        `}
      >

        {/* 🔥 LOGO (PERFECT SIZE FIXED) */}
        <div 
          onClick={() => handleScrollTo("hero")}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </div>

        {/* 🔥 DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.id)}
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[var(--color-muted)]
                hover:text-[var(--color-accent)]
                transition-all
              "
            >
              {link.name}
            </button>
          ))}

          {/* CTA BUTTON */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="
              px-5 py-2
              rounded-full
              bg-[var(--color-accent)]
              text-black
              text-[11px]
              font-bold
              uppercase
              tracking-widest
              hover:scale-105 active:scale-95
              transition-all
              shadow-[0_0_20px_rgba(0,212,255,0.4)]
            "
          >
            Hire Me
          </button>
        </div>

        {/* 🔥 MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="
            md:hidden
            flex items-center gap-2
            px-3 py-1.5
            rounded-full
            border border-white/10
            bg-white/5
          "
        >
          <span className="text-[10px] font-bold tracking-widest">Menu</span>
          <Menu size={18} className="text-[var(--color-accent)]" />
        </button>

        {/* 🔥 FULLSCREEN MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed inset-0
                bg-[var(--color-bg)]
                z-[200]
                flex flex-col
                p-6
              "
            >

              {/* TOP BAR */}
              <div className="flex justify-between items-center mb-12">
                <img src={logo} className="h-8" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    p-3
                    rounded-full
                    bg-[var(--color-accent)]
                    text-black
                  "
                >
                  <X size={18} />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleScrollTo(link.id)}
                    className="
                      text-4xl
                      font-bold
                      text-[var(--color-text)]
                      flex justify-between items-center
                      group
                    "
                  >
                    <span className="group-hover:text-[var(--color-accent)] transition">
                      {link.name}
                    </span>
                    <ArrowUpRight className="opacity-40 group-hover:opacity-100" />
                  </motion.button>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-auto pt-10 border-t border-white/10">
                <p className="text-[var(--color-muted)] text-sm">
                  Built with MERN ⚡ | Aman Sharma
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </div>
  );
};

export default Navbar;