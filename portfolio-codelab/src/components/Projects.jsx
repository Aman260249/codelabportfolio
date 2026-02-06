import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const mernGradient = "linear-gradient(135deg, #8B8BD8 0%, #494972 100%)";
  const cardGradient = "linear-gradient(160deg, #202021 0%, #111112 100%)";

  useEffect(() => {
    const getProjects = async () => {
      try {
        // Backend URL check
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://codelabportfolio.onrender.com';
        const res = await axios.get(`${backendUrl}/api/projects`);
        
        // Safety check: Ensure we always set an array
        setProjects(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setProjects([]); // Fallback to empty array on error
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  // --- SAFE TAB FILTER LOGIC ---
  const filteredProjects = activeTab === 'ALL' 
    ? projects 
    : projects.filter(p => p.category?.trim().toUpperCase() === activeTab.toUpperCase());

  const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);

  if (loading) return (
    <div className="h-screen bg-[#0F0F0F] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#8E7FFF] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#8E7FFF] font-black uppercase tracking-widest text-sm">Loading Projects...</p>
    </div>
  );

  return (
    <section id="projects" className="min-h-screen w-full py-20 px-6 laptop:px-32 bg-[#0F0F0F] snap-start relative">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ backgroundImage: mernGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        className="text-5xl laptop:text-7xl font-black text-center mb-16 tracking-tighter"
      >
        Featured Projects
      </motion.h2>

      {/* PRO TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {['ALL', 'RECENT WORK', 'UX/UI', 'WEB'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all overflow-hidden group"
          >
            <span className={`relative z-10 ${activeTab === tab ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
              {tab}
            </span>
            {activeTab === tab && (
              <motion.div 
                layoutId="activePill"
                className="absolute inset-0 z-0 shadow-lg shadow-purple-500/20"
                style={{ background: mernGradient }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* PROJECT GRID - SAFE MAPPING */}
      <motion.div layout className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10">
        <AnimatePresence mode="popLayout">
          {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                layout
                key={project._id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.4 }}
                style={{ background: cardGradient }}
                className="group relative rounded-[2rem] border border-white/5 p-2 hover:border-[#8E7FFF]/50 transition-colors duration-500 shadow-2xl overflow-hidden flex flex-col h-full"
              >
                {/* Image Container */}
                <div 
                  onClick={() => { setSelectedProject(project); setCurrentImgIndex(0); }}
                  className="relative h-64 w-full overflow-hidden rounded-[1.6rem] cursor-pointer"
                >
                  <motion.img 
                    src={project.images && project.images[0] ? project.images[0] : 'https://via.placeholder.com/400x300?text=No+Image'} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-sm font-bold tracking-widest uppercase bg-[#8E7FFF] px-4 py-1 rounded-full">Explore</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">{project.title}</h3>
                    <span className="text-[10px] bg-white/5 text-purple-400 px-2 py-1 rounded border border-purple-400/20 shrink-0 uppercase font-bold">{project.category}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 font-medium line-clamp-2">{project.tech}</p>

                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-[3] h-12 flex items-center justify-center bg-[#8E7FFF] text-black rounded-2xl font-black text-[11px] uppercase tracking-tighter hover:bg-white transition-colors"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 h-12 flex items-center justify-center border border-white/10 text-white rounded-2xl hover:bg-white/5 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
               <p className="text-gray-500 font-bold uppercase tracking-widest">No Projects Found in this category.</p>
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 tablet:p-10"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              {selectedProject.images && selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute left-0 tablet:-left-20 p-4 text-white/20 hover:text-[#8E7FFF] transition-colors">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button onClick={nextImg} className="absolute right-0 tablet:-right-20 p-4 text-white/20 hover:text-[#8E7FFF] transition-colors">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </>
              )}
              <div className="w-full">
                <motion.img 
                  key={currentImgIndex}
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  src={selectedProject.images && selectedProject.images[currentImgIndex]} 
                  className="w-full max-h-[75vh] object-contain rounded-3xl shadow-[0_0_50px_rgba(142,127,255,0.1)] border border-white/5"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;