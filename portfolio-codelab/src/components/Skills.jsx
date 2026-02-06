import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const textGradient = "linear-gradient(to right, #8B8BD8, #575762, #494972)";
  const boxGradient = "linear-gradient(to right, #202021, #2C2833, #201731)";
  const borderColor = "#8E7FFF"; 

  const skillData = [
    { category: "Frontend", skills: ["React.js", "JavaScript", "HTML5 / CSS3", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
    { category: "Database", skills: ["MongoDB", "Firebase", "Supabase", "PostgreSQL"] },
    { category: "Design & Tools", skills: ["Figma", "Photoshop", "Git & GitHub", "Postman"] }
  ];

  return (
    // Changed h-screen to min-h-screen for flexibility
    // Desktop: items-center, Mobile: justify-start (to prevent top cut)
    <section id="skills" className="min-h-screen w-full flex flex-col items-center justify-start laptop:justify-center px-6 pt-24 pb-12 laptop:px-32 bg-[#0F0F0F] snap-start relative overflow-x-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] laptop:w-[500px] h-[300px] laptop:h-[500px] bg-[#8E7FFF]/5 blur-[120px] rounded-full -z-0" />

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ backgroundImage: textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        className="text-4xl laptop:text-6xl font-extrabold mb-12 laptop:mb-20 z-10 text-center"
      >
        Skills
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        style={{ 
          background: boxGradient, 
          borderColor: borderColor,
          boxShadow: `0 0 25px ${borderColor}20` 
        }}
        className="w-full max-w-[1200px] border-2 rounded-3xl p-6 laptop:p-12 relative z-10"
      >
        {/* Category Labels (Desktop Only Tabs) */}
        <div className="hidden laptop:flex justify-around absolute -top-5 left-0 w-full">
          {skillData.map((item) => (
            <motion.div 
              key={item.category}
              whileHover={{ y: -5 }}
              style={{ background: boxGradient, borderColor: borderColor }}
              className="px-8 py-2 border-2 rounded-full text-white text-sm font-bold shadow-[0_0_15px_rgba(142,127,255,0.4)]"
            >
              {item.category}
            </motion.div>
          ))}
        </div>

        {/* Skills Grid - Fixed Layout */}
        {/* Mobile: 1 col | Tablet: 2 cols | Laptop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-4 gap-8 laptop:gap-10">
          {skillData.map((group, groupIdx) => (
            <div key={group.category} className="flex flex-col space-y-4">
              
              {/* Category Label (Visible on Mobile/Tablet where tabs are hidden) */}
              <div 
                className="laptop:hidden text-white font-bold mb-2 uppercase tracking-widest border-b-2 pb-1 text-xs"
                style={{ borderColor: borderColor }}
              >
                {group.category}
              </div>

              {group.skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (groupIdx * 0.05) + (idx * 0.05) }}
                  style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(142, 127, 255, 0.1)' }}
                  whileHover={{ 
                    borderColor: borderColor, 
                    boxShadow: `0 0 12px ${borderColor}30`,
                    scale: 1.03
                  }}
                  className="p-4 rounded-xl border transition-all group flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: borderColor }} />
                  <span className="text-gray-300 group-hover:text-white text-sm laptop:text-base font-semibold transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;