import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  const stats = [
    { number: "4+", label: "Projects" },
    { number: "100%", label: "Responsive UI" },
    { number: "REST", label: "APIs" },
    { number: "Secure", label: "Auth Systems" },
  ];

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 bg-[var(--color-bg)] overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-[1100px] flex flex-col gap-16 z-10">

        {/* 🔥 TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)]">
            About Me
          </h2>

          <p className="text-[var(--color-muted)] mt-4 text-base md:text-lg">
            Turning ideas into scalable digital products
          </p>
        </motion.div>

        {/* 🔥 MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >

            <p className="text-[var(--color-text)] text-lg md:text-xl leading-relaxed">
              I’m a <span className="text-[var(--color-accent)] font-semibold">MERN Stack Developer</span> 
              focused on building scalable and user-friendly web applications.
            </p>

            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              I specialize in developing full-stack solutions using MongoDB, Express, React and Node.js 
              with a strong focus on performance, clean UI and efficient backend systems.
            </p>

            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              Currently pursuing BCA from IGNOU and continuously improving my skills by building real-world projects.
            </p>

            <p className="text-[var(--color-muted)] text-sm">
              Based in Delhi, India 🇮🇳
            </p>

          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="
                  p-6
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  text-center
                "
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                  {item.number}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;