import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Gradient Color: 8B8BD8, 575762, 494972
  const textGradient = "linear-gradient(to right, #8B8BD8, #575762, #494972)";

  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 laptop:px-32 bg-[#0F0F0F] snap-start relative overflow-hidden">
      
      {/* Background Decorative Element (Optional Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full -z-0" />

      <div className="z-10 text-center max-w-4xl space-y-10">
        
        {/* Main Quote with Reveal Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          className="text-3xl tablet:text-5xl laptop:text-6xl font-extrabold italic leading-tight"
        >
          “Turning ideas into scalable web applications.”
        </motion.h2>

        <div className="space-y-6">
          {/* About Me Label */}
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xl laptop:text-2xl font-bold tracking-[0.2em] uppercase"
          >
            About Me
          </motion.h3>

          {/* Main Content Paragraph 1 */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-400 text-lg laptop:text-2xl leading-relaxed"
          >
            I'm a fresher MERN Stack Developer with hands-on
            experience in building full-stack applications,
            dashboards, authentication systems, and CRUD features.
          </motion.p>

          {/* Main Content Paragraph 2 */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-gray-400 text-lg laptop:text-2xl leading-relaxed font-light"
          >
            Along with development, I also have a strong interest
            in UI/UX design and enjoy creating clean, modern interfaces.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;