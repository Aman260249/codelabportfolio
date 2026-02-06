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
    <section
      id="skills"
      className="
        min-h-screen w-full
        flex flex-col items-center justify-center
        px-5 sm:px-6 laptop:px-32
        bg-[#0F0F0F]
        snap-start
        overflow-x-hidden
        relative
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-[#8E7FFF]/5 blur-[120px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ backgroundImage: textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        className="text-4xl laptop:text-6xl font-extrabold mb-12 z-10 text-center"
      >
        Technical Skills
      </motion.h2>

      {/* Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ background: boxGradient, borderColor, boxShadow: `0 0 25px ${borderColor}20` }}
        className="
          w-full max-w-[1200px]
          border-2 rounded-3xl
          p-5 sm:p-6 laptop:p-12
          relative z-10
          overflow-hidden
        "
      >
        {/* Desktop Tabs */}
        <div className="hidden tablet:flex justify-around mb-10">
          {skillData.map(item => (
            <motion.div
              key={item.category}
              whileHover={{ y: -4 }}
              style={{ background: boxGradient, borderColor }}
              className="px-6 py-2 border-2 rounded-full text-sm font-bold text-white shadow-[0_0_15px_rgba(142,127,255,0.4)]"
            >
              {item.category}
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6">
          {skillData.map((group, groupIdx) => (
            <div key={group.category} className="space-y-4">
              {/* Mobile Label */}
              <div
                className="tablet:hidden text-white font-bold uppercase tracking-widest border-b-2 pb-1"
                style={{ borderColor }}
              >
                {group.category}
              </div>

              {group.skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIdx * 0.1 + idx * 0.05 }}
                  style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(142,127,255,0.2)' }}
                  whileHover={{ borderColor, boxShadow: `0 0 15px ${borderColor}40`, scale: 1.02 }}
                  className="p-4 rounded-xl border flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: borderColor }} />
                  <span className="text-gray-300 group-hover:text-white font-medium">
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
