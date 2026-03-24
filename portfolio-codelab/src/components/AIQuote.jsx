import React from 'react';
import { motion } from 'framer-motion';

const AIQuote = () => {

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-5 md:px-10 py-24 bg-[var(--color-bg)] overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl w-full text-center z-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-[var(--font-heading)] text-[var(--color-text)] leading-tight"
        >
          AI-Powered <span className="text-[var(--color-accent)]">Development</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-[var(--color-muted)] text-sm md:text-base"
        >
          Building smarter applications using AI tools & automation
        </motion.p>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
        >

          {/* CONTENT */}
          <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            I actively use AI tools to accelerate development, solve complex problems, and improve code quality.
            From debugging to building full-stack applications, I leverage AI to write cleaner, faster, and more efficient code.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "AI-assisted full-stack development",
              "Code debugging & optimization",
              "Rapid prototyping with AI",
              "API integrations with AI services",
              "Prompt engineering",
              "Performance improvements"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2 text-[var(--color-muted)] text-sm"
              >
                <span className="text-[var(--color-accent)] font-bold">✔</span>
                {item}
              </motion.div>
            ))}
          </div>

          {/* TOOLS */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["ChatGPT", "GitHub Copilot", "Gemini", "AI APIs"].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-1 text-xs rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]"
              >
                {tool}
              </span>
            ))}
          </div>

        </motion.div>

        {/* IMPACT LINE 🔥 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-[var(--color-text)] text-sm md:text-lg font-semibold"
        >
          AI helps me build faster, but my logic ensures the solution works.
        </motion.p>

      </div>
    </section>
  );
};

export default AIQuote;