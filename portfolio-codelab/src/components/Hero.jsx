import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png';

const Hero = () => {

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 bg-[var(--color-bg)] overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
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
            MERN Stack
            <br />
            <span className="text-gradient">
              Developer
            </span>
          </h1>

          {/* MAIN LINE */}
          <p className="mt-6 text-[var(--color-muted)] max-w-xl text-base md:text-lg leading-relaxed">
            MERN Stack Developer building scalable and user-focused web applications
          </p>

          {/* SUB INFO */}
          <p className="mt-3 text-[var(--color-muted)] text-sm">
            2+ Real-world projects | Authentication | Dashboard | API Integration | Landing Pages
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              className="
                px-6 py-3
                rounded-xl
                bg-[var(--color-accent)]
                text-black
                font-semibold
                shadow-[0_0_20px_rgba(0,212,255,0.4)]
                transition-all
              "
            >
              View Projects
            </motion.button>

            <motion.a
              href="/Aman_Sharma_MERN_ATS_Resume_2.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="
                px-6 py-3
                rounded-xl
                border border-[var(--color-accent)]
                text-[var(--color-text)]
                font-semibold
                hover:bg-white/5
                transition-all
                text-center
              "
            >
              Download Resume
            </motion.a>

          </div>

          {/* TECH STACK CHIPS */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            {["React", "Node", "MongoDB", "Express"].map((tech) => (
              <span 
                key={tech}
                className="
                  px-3 py-1
                  text-sm
                  bg-white/5
                  border border-white/10
                  rounded-full
                  text-[var(--color-muted)]
                "
              >
                {tech}
              </span>
            ))}
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
            className="
              w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px]
              object-contain
              select-none
            "
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }}
          />
        </motion.div>

      </div>

      {/* 🔥 SCROLL TEXT */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-muted)] text-sm">
        Scroll ↓
      </div>

    </section>
  );
};

export default Hero;