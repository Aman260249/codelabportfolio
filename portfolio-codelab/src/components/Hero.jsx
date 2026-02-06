import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png'; 

const Hero = () => {
  const mernGradient = "linear-gradient(to right, #8B8BD8, #575762, #494972)";
  const btnGradient = "linear-gradient(to right, #202021, #2C2833, #201731)";

  // View Work function: Smooth scroll to Projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen w-full flex flex-col tablet:flex-row items-center justify-between px-6 laptop:px-32 relative bg-[#0F0F0F] snap-start overflow-hidden">
      
      {/* LEFT SIDE: Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 z-10 flex flex-col justify-center text-center tablet:text-left h-full pt-20 tablet:pt-0"
      >
        <p className="text-gray-400 text-xl laptop:text-2xl mb-2">Hi, I'm Aman 👋</p>

        <div className="relative overflow-hidden">
          <h1 className="text-5xl laptop:text-8xl font-extrabold leading-tight">
            <span 
              style={{ backgroundImage: mernGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              MERN Stack
            </span>
          </h1>
        </div>

        <h1 className="text-5xl laptop:text-8xl font-extrabold text-white">Developer</h1>

        <p className="text-gray-400 mt-6 max-w-lg text-lg tablet:text-xl">
          I build full-stack web applications using MongoDB, Express, React & Node.js 
          with clean UI and scalable backend.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10 justify-center tablet:justify-start">
          {/* View Work Button */}
          <motion.button 
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }} 
            style={{ background: btnGradient }} 
            className="px-10 py-4 border border-[#8E7FFF] rounded-full text-white font-bold shadow-lg shadow-purple-500/10"
          >
            View Work
          </motion.button>

          {/* Resume Download Button */}
          <motion.a 
            href="/resume.pdf" // PDF file public folder mein honi chahiye
            download="Aman_Resume.pdf" // Download hone par file ka naam
            whileHover={{ scale: 1.05 }} 
            className="px-10 py-4 border border-white/10 rounded-full text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image Content */}
      <motion.div 
        initial={{ opacity: 0, y: 150 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} 
        className="flex-1 relative flex items-end justify-center tablet:justify-end h-full pt-10"
      >
        <img 
          src={myPhoto} 
          alt="Aman" 
          className="w-[300px] tablet:w-[450px] laptop:w-[650px] object-contain select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)'
          }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;