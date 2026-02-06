import React from 'react';
import { motion } from 'framer-motion';

const LearningJourney = () => {
  const mernGradient = "linear-gradient(to right, #8B8BD8, #575762, #494972)";
  const cardBg = "linear-gradient(135deg, #202021 0%, #2C2833 50%, #201731 100%)";
  const neonColor = "#8E7FFF";

  return (
    <section id="journey" className="pt-20 h-screen w-full flex items-center justify-center px-6 pt-6 laptop:px-32 bg-[#0F0F0F] snap-start relative overflow-hidden">
      
      {/* Subtle Glow in Background */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#8E7FFF]/10 blur-[120px] rounded-full" />

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          background: cardBg, 
          borderColor: neonColor,
          boxShadow: `0 0 30px ${neonColor}20` 
        }}
        className="w-full max-w-6xl border-2 rounded-[2.5rem] p-8 laptop:p-20 flex flex-col laptop:flex-row items-center gap-12 laptop:gap-20"
      >
        
        {/* Left Side: Heading */}
        <div className="w-full laptop:w-1/3">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl laptop:text-7xl font-black text-white leading-tight tracking-tighter"
          >
            Learning <br />
            <span style={{ backgroundImage: mernGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Journey
            </span>
          </motion.h2>
        </div>

        {/* Right Side: Content */}
        <div className="w-full laptop:w-2/3 space-y-8">
          <ul className="space-y-4 text-gray-300 text-lg laptop:text-xl font-medium">
            {[
              "Started JavaScript & Web Development",
              "Learned MERN Stack & UI/UX basics",
              "Built 5+ full-stack projects using MERN",
              "Worked with Firebase & Supabase in real projects"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="flex items-start gap-3"
              >
                <span className="text-[#8E7FFF] mt-1">•</span>
                {item}
              </motion.li>
            ))}
          </ul>

          {/* New Personal Details Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-6 border-t border-white/10"
          >
            <p className="text-gray-400 italic text-lg leading-relaxed">
              "I am a <span className="text-white font-bold">self-taught developer</span> who mastered the MERN stack through dedicated learning on <span className="text-[#FF0000] font-bold">YouTube</span> and online resources. 
              Along this path, I've earned several <span className="text-white font-bold">certifications</span> that validate my technical expertise and commitment to building high-quality web applications."
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default LearningJourney;