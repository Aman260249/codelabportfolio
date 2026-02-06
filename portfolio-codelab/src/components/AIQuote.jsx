import React from 'react';
import { motion } from 'framer-motion';

const AIQuote = () => {
  // Purple-Blue Gradient for AI/Gemini focus
  const aiGradient = "linear-gradient(to right, #8E7FFF, #D8B4FE, #60A5FA)";

  return (
    <section className=" h-[60vh] w-full flex items-center justify-center px-6  laptop:px-32 bg-[#0F0F0F] snap-start relative overflow-hidden">
      
      {/* Background Glow (Gemini Theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-600/5 blur-[120px] rounded-full -z-0" />

      <div className="z-10 text-center max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl tablet:text-5xl laptop:text-6xl font-extrabold leading-tight tracking-tight text-white/90"
        >
          Leveraging <span style={{ backgroundImage: aiGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Driven Development</span> to build 
          intelligent full-stack solutions, with a specialized focus on 
          <span className="relative inline-block ml-3">
             <span style={{ color: '#8E7FFF' }}>Google Gemini.</span>
             {/* Decorative underline for Gemini */}
             <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-0 left-0 h-[2px] bg-[#8E7FFF]"
             />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-gray-500 text-lg laptop:text-xl font-medium tracking-widest uppercase"
        >
          Future-Proofing Every Line of Code
        </motion.p>
      </div>
    </section>
  );
};

export default AIQuote;