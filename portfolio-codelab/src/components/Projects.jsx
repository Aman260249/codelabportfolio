import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ALL');

  useEffect(() => {
    const getProjects = async () => {
      try {
        const backendUrl = 'https://codelabportfolio.onrender.com';
        const res = await axios.get(`${backendUrl}/api/projects`);
        setProjects(Array.isArray(res.data) ? res.data : []);
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  const filteredProjects =
    activeTab === 'ALL'
      ? projects
      : projects.filter(
          (p) =>
            p.category?.toUpperCase().trim() ===
            activeTab.toUpperCase()
        );

  if (loading) {
    return (
      <div className="h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[var(--color-accent)] font-bold tracking-widest text-sm">
          Loading Projects...
        </p>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24 px-5 sm:px-6 laptop:px-32 bg-[var(--color-bg)] snap-start"
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl laptop:text-7xl font-extrabold text-center mb-16 text-gradient"
      >
        Featured Projects
      </motion.h2>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {['ALL', 'WEB', 'UI/UX'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase
              transition-all duration-300 border
              ${
                activeTab === tab
                  ? 'bg-[var(--color-accent)] text-black border-[var(--color-accent)] shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'text-[var(--color-muted)] border-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-text)]'
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl p-[1px] bg-gradient-to-br from-[var(--color-accent)]/30 to-transparent"
              >
                <div className="bg-[var(--color-card)] rounded-3xl p-5 h-full border border-white/5 hover:border-[var(--color-accent)]/40 transition">

                  {/* IMAGE */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5">
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                      <span className="text-xs bg-[var(--color-accent)] text-black px-3 py-1 rounded-full font-bold">
                        View
                      </span>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">
                    {project.title}
                  </h3>

                  {/* TECH */}
                  <p className="text-[var(--color-muted)] text-sm mb-3">
                    {project.tech}
                  </p>

                  {/* PROBLEM */}
                  {project.problem && (
                    <p className="text-xs text-[var(--color-muted)] mb-3 line-clamp-2">
                      {project.problem}
                    </p>
                  )}

                  {/* FEATURES */}
                  {project.features?.length > 0 && (
                    <ul className="text-xs text-[var(--color-muted)] space-y-1 mb-4">
                      {project.features.slice(0, 3).map((f, i) => (
                        <li key={i}>✔ {f}</li>
                      ))}
                    </ul>
                  )}

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 h-11 flex items-center justify-center bg-[var(--color-accent)] text-black rounded-xl font-bold text-xs hover:scale-105 transition"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 h-11 flex items-center justify-center border border-[var(--color-accent)] text-[var(--color-text)] rounded-xl text-xs hover:bg-white/5 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-[var(--color-muted)]">
              No Projects Found
            </p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;