import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--color-bg)] border-t border-white/10 px-5 md:px-10 py-20 overflow-hidden">

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT - ONLY LOGO (FIXED SIZE) */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="logo"
            className="h-10 md:h-14 w-auto object-contain"
          />

          {/* optional short line (clean) */}
          <p className="text-[var(--color-muted)] text-sm max-w-xs">
            Building modern web applications with clean UI & scalable backend.
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col md:items-center gap-4">
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
            Navigation
          </h4>

          <div className="flex flex-col gap-3 text-sm">
            {["Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:items-end gap-6">

          <div className="md:text-right">
            <h3 className="text-[var(--color-text)] text-lg font-semibold">
              Aman Sharma
            </h3>
            <p className="text-[var(--color-accent)] text-xs">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/Aman260249" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/aman-sharma-2b0183210" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                whileHover={{ scale: 1.15, y: -3 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">

        <p>
          © {currentYear} All rights reserved.
        </p>

        <p className="flex items-center gap-1">
          Built with <span className="text-[var(--color-accent)]">❤</span> by Aman
        </p>

      </div>

    </footer>
  );
};

export default Footer;