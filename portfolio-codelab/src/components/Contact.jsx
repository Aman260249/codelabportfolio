import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaArrowRight, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const backendUrl = "https://codelabportfolio.onrender.com";
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/contact`, formData);
      if (res.data.success) {
        setStatus("success");
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-10 py-20 bg-[var(--color-bg)] overflow-hidden">
      
      {/* 2026 SHARP BACKGROUND ACCENT */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[var(--color-accent)]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* 🔥 SMART POP-UP (TOAST) */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className={`fixed top-0 z-[1000] flex items-center gap-3 px-6 py-3 rounded-2xl border backdrop-blur-2xl shadow-2xl
              ${status === "success" ? "bg-green-500/10 border-green-500/50 text-green-400" : "bg-red-500/10 border-red-500/50 text-red-400"}`}
          >
            {status === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
            <span className="font-['Outfit'] font-bold text-sm uppercase tracking-widest">
              {status === "success" ? "Message Delivered" : "Error Sending"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
        
        {/* LEFT CARD - THE INFO (2 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 flex flex-col justify-between p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-['Syne'] font-black text-[var(--color-text)] leading-tight mb-6">
              Have a <span className="text-[var(--color-accent)] underline decoration-1 underline-offset-8">Vision?</span> Let's Build.
            </h2>
            <p className="text-[var(--color-muted)] font-['Outfit'] mb-12 max-w-xs leading-relaxed">
              Available for high-end web development and collaborative ventures.
            </p>

            <div className="space-y-4">
              {[
                { label: "Github", icon: <FaGithub />, link: "https://github.com/Aman260249" },
                { label: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aman-sharma-2b0183210" }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[var(--color-accent)]/50 transition-all group/link">
                  <div className="flex items-center gap-4 text-[var(--color-text)]">
                    {item.icon} <span className="font-['Outfit'] font-bold text-sm uppercase">{item.label}</span>
                  </div>
                  <FaArrowRight size={12} className="text-[var(--color-accent)] -rotate-45 group-hover/link:rotate-0 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[var(--color-text)] font-['Outfit'] text-[10px] font-bold uppercase tracking-widest opacity-60">Open for work</span>
          </div>
        </motion.div>

        {/* RIGHT CARD - THE FORM (3 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="lg:col-span-3 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[var(--color-accent)] uppercase ml-2">First Name</label>
                <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--color-text)] focus:border-[var(--color-accent)] transition-all outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[var(--color-accent)] uppercase ml-2">Last Name</label>
                <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--color-text)] focus:border-[var(--color-accent)] transition-all outline-none" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[var(--color-accent)] uppercase ml-2">Email Address</label>
              <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--color-text)] focus:border-[var(--color-accent)] transition-all outline-none" required />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-[var(--color-accent)] uppercase ml-2">Message</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[var(--color-text)] focus:border-[var(--color-accent)] transition-all outline-none resize-none" required />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 mt-4 bg-[var(--color-accent)] text-black font-['Syne'] font-black uppercase text-sm tracking-[0.2em] rounded-2xl shadow-[0_20px_40px_rgba(0,212,255,0.2)] hover:shadow-[0_20px_50px_rgba(0,212,255,0.4)] transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;