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
    <section id="projects" className="min-h-screen w-full py-20 px-4 md:px-10 lg:px-24 bg-[var(--color-bg)]">
      
      {/* HEADING - Scaled for devices */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-12 text-gradient tracking-tighter"
      >
        Featured Projects
      </motion.h2>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {['ALL', 'WEB', 'UI/UX'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-5 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase
              transition-all duration-300 border
              ${activeTab === tab
                  ? 'bg-[var(--color-accent)] text-black border-[var(--color-accent)]'
                  : 'text-[var(--color-muted)] border-white/10 hover:border-[var(--color-accent)]'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID - Optimized spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="flex flex-col h-full rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
              >
                <div className="bg-[var(--color-card)] rounded-[2rem] p-4 md:p-5 flex flex-col h-full border border-white/5 shadow-xl">

                  {/* IMAGE - Height fixed for mobile vs laptop */}
                  <div className="relative h-48 md:h-52 lg:h-56 w-full rounded-[1.5rem] overflow-hidden mb-4 shrink-0">
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* CONTENT AREA - Auto grows */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-1 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-[var(--color-accent)] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
                      {project.tech}
                    </p>

                    {project.problem && (
                      <p className="text-xs text-[var(--color-muted)] mb-4 line-clamp-2 leading-relaxed">
                        {project.problem}
                      </p>
                    )}

                    {/* Features - Hidden or limited on mobile to save space */}
                    {project.features?.length > 0 && (
                      <div className="hidden sm:block mb-4">
                        <ul className="text-[11px] text-[var(--color-muted)] space-y-1">
                          {project.features.slice(0, 2).map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full"></span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* BUTTONS - Stick to bottom */}
                  <div className="flex gap-3 mt-auto pt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 h-10 md:h-11 flex items-center justify-center bg-[var(--color-accent)] text-black rounded-xl font-bold text-[11px] uppercase tracking-tighter hover:brightness-110 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 h-10 md:h-11 flex items-center justify-center border border-white/10 text-[var(--color-text)] rounded-xl font-bold text-[11px] uppercase tracking-tighter hover:bg-white/5 transition"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
               <p className="text-[var(--color-muted)] font-medium">No Projects Found in this category.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;