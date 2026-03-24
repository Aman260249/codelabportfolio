import React from 'react';
import { motion } from 'framer-motion';

const LearningJourney = () => {

  const steps = [
    {
      year: "2023",
      text: "Started learning JavaScript & Web Development fundamentals"
    },
    {
      year: "2024",
      text: "Mastered MERN Stack (MongoDB, Express, React, Node.js)"
    },
    {
      year: "2024",
      text: "Built real-world projects including dashboards, authentication & APIs"
    },
    {
      year: "2025",
      text: "Worked with Firebase & Supabase for scalable backend solutions"
    },
    {
      year: "2025+",
      text: "Continuously improving system design, UI/UX & performance"
    }
  ];

  return (
    <section
      id="journey"
      className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-10 py-24 bg-[var(--color-bg)] overflow-hidden"
    >

      {/* GLOW BACKGROUND */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12">

        {/* LEFT SIDE */}
        <div className="lg:w-1/3 space-y-6">
          
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-[var(--font-heading)] text-[var(--color-text)] leading-tight"
          >
            Learning <br />
            <span className="text-[var(--color-accent)]">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-muted)] text-sm md:text-base"
          >
            From curiosity to building real-world full-stack applications.
          </motion.p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-2">
            {["Self-Taught", "Fast Learner", "Problem Solver"].map((b, i) => (
              <span key={i} className="px-3 py-1 text-xs rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]">
                {b}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="lg:w-2/3 relative pl-6 md:pl-10">

  {/* LINE */}
  <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[2px] bg-[var(--color-accent)]/20" />

  <div className="space-y-10">

    {steps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-10 md:pl-14 group"
      >

        {/* DOT */}
        <div className="absolute left-0 md:left-2 top-2 w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />

        {/* CARD */}
        <div className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-5
          transition-all duration-500
          group-hover:border-[var(--color-accent)]
          group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]
        ">

          <p className="text-xs text-[var(--color-accent)] font-bold mb-1">
            {step.year}
          </p>

          <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed">
            {step.text}
          </p>

        </div>

      </motion.div>
    ))}

  </div>

  {/* FINAL TEXT (FIXED GAP) */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="mt-14 ml-6 md:ml-10 p-6 rounded-2xl bg-white/5 border border-white/10"
  >
    <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed">
      I am a <span className="text-[var(--color-text)] font-semibold">self-taught MERN Stack Developer</span> who learned development through 
      <span className="text-red-500 font-semibold"> YouTube</span> and hands-on practice.
      <br /><br />
      Instead of just watching tutorials, I focused on building real-world projects, solving problems, and improving every day.
    </p>
  </motion.div>

  {/* STATS (FIXED GAP) */}
  <div className="mt-10 ml-6 md:ml-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
    {[
      "5+ Projects",
      "Auth Systems",
      "REST APIs",
      "Responsive UI"
    ].map((s, i) => (
      <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[var(--color-muted)]">
        {s}
      </div>
    ))}
  </div>

</div>

      </div>
    </section>
  );
};

export default LearningJourney;