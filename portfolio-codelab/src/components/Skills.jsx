import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress, SiTailwindcss, SiPostman, SiFirebase } from "react-icons/si";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "HTML/CSS", icon: <FaHtml5 /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Postman", icon: <SiPostman /> },
      ]
    }
  ];

  return (
    <section 
      id="skills"
      className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center px-4 md:px-10 bg-[var(--color-bg)] overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-[var(--color-accent2)]/10 blur-[120px] rounded-full" />

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-[0.4em] mb-4"
        >
          My Capabilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-[var(--font-heading)] text-[var(--color-text)]"
        >
          Tech Stack<span className="text-[var(--color-accent)]">.</span>
        </motion.h2>
      </div>

      {/* GRID */}
      <div className="w-full max-w-[1200px] flex flex-col gap-12 relative z-10">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="flex flex-col gap-6">

            <h3 className="text-sm md:text-base font-bold text-[var(--color-muted)] uppercase tracking-widest ml-2 font-[var(--font-heading)]">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -6 }}
                  transition={{ delay: i * 0.05 + catIndex * 0.1 }}
                  className="
                    group relative
                    flex items-center gap-3 md:gap-4
                    p-3 md:p-5
                    rounded-2xl md:rounded-[2rem]
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    hover:border-[var(--color-accent)]
                    transition-all duration-500
                  "
                >

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition rounded-[2rem]" />

                  {/* ICON */}
                  <div className="text-2xl md:text-3xl text-[var(--color-accent)] transition-transform duration-500 group-hover:scale-110">
                    {skill.icon}
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs text-[var(--color-muted)] uppercase tracking-widest">
                     
                    </span>
                    <p className="text-[var(--color-text)] text-sm md:text-base font-semibold font-[var(--font-body)]">
                      {skill.name}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM TAG */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="mt-20 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-[var(--color-muted)] tracking-widest font-[var(--font-body)]"
      >
        ALWAYS LEARNING NEW TECH
      </motion.div>

    </section>
  );
};

export default Skills;