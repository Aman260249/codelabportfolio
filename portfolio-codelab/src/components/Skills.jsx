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
    // min-h-screen + pt-28 for mobile top gap
    <section id="skills" className="h-screen w-full flex flex-col items-center justify-start laptop:justify-center px-6 pt-28 pb-12 laptop:px-32 bg-[#0F0F0F] snap-start relative overflow-x-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] laptop:w-[500px] h-[300px] laptop:h-[500px] bg-[#8E7FFF]/5 blur-[120px] rounded-full -z-0" />

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ backgroundImage: textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        className="text-4xl laptop:text-6xl font-extrabold mb-12 laptop:mb-16 z-10 text-center"
      >
        Skills
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        style={{ 
          background: boxGradient, 
          borderColor: borderColor,
          boxShadow: `0 0 25px ${borderColor}20` 
        }}
        className="w-full max-w-[1200px] border-2 rounded-3xl p-6 laptop:p-12 relative z-10"
      >
        {/* Desktop Tabs */}
        <div className="hidden tablet:flex justify-around absolute -top-5 left-0 w-full">
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

        {/* Skills Grid - 2 cols on mobile, 4 on laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-4 gap-6 mt-4 laptop:mt-6">
          {skillData.map((group, groupIdx) => (
            <div key={group.category} className="space-y-4">
              <div 
                className="tablet:hidden text-white font-bold mb-3 uppercase tracking-widest border-b-2 pb-1 text-sm"
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
                  whileHover={{ borderColor: borderColor, boxShadow: `0 0 10px ${borderColor}30`, scale: 1.02 }}
                  className="p-3 laptop:p-4 rounded-xl border transition-all group flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: borderColor }} />
                  <span className="text-gray-300 group-hover:text-white text-sm laptop:text-base font-medium">
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