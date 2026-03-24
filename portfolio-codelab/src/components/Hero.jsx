import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 bg-[var(--color-bg)] overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center md:text-left"
        >

          {/* INTRO */}
          <p className="text-[var(--color-muted)] text-sm md:text-base mb-3">
            Hi, I'm Aman 👋
          </p>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--color-text)]">
            I Build
          </h1>

          {/* 🔥 TYPEWRITER */}
          <div className="mt-2">
            <TypeAnimation
              sequence={[
                'MERN Stack Applications',
                1500,
                'Full Stack Systems',
                1500,
                'Modern Web Interfaces',
                1500
              ]}
              speed={50}
              repeat={Infinity}
              className="
                text-[var(--color-accent)]
                text-xl md:text-2xl lg:text-3xl
                font-semibold
              "
            />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[var(--color-muted)] max-w-xl text-base md:text-lg leading-relaxed">
            MERN Stack Developer building scalable and user-focused web applications
          </p>

          {/* STATS */}
          <p className="mt-3 text-[var(--color-muted)] text-sm">
            2+ Projects • Authentication • Dashboard • API Integration
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <motion.button
              onClick={scrollToProjects}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="
                px-6 py-3
                rounded-xl
                bg-[var(--color-accent)]
                text-black
                font-semibold
                shadow-[0_0_20px_rgba(0,212,255,0.4)]
              "
            >
              View Projects
            </motion.button>

            <motion.a
              href="/Aman_Sharma_MERN_ATS_Resume_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="
                px-6 py-3
                rounded-xl
                border border-[var(--color-accent)]
                text-[var(--color-text)]
                font-semibold
                hover:bg-white/5
                text-center
              "
            >
              Download Resume
            </motion.a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={myPhoto}
            alt="Aman"
            className="w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px] object-contain select-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }}
          />
        </motion.div>

      </div>

      {/* SCROLL TEXT */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-muted)] text-sm animate-pulse">
        Scroll ↓
      </div>

    </section>
  );
};

export default Hero;