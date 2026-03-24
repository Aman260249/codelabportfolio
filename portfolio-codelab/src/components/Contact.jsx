import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {

  const backendUrl = "https://codelabportfolio.onrender.com";

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
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
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setStatus(null), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-5 md:px-10 py-24 bg-[var(--color-bg)] overflow-hidden">

      {/* GLOW */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[var(--color-accent)]/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-[var(--font-heading)] text-[var(--color-text)] mb-4">
              Let's Work Together
            </h2>

            <p className="text-[var(--color-muted)] mb-10">
              Have a project idea or want to collaborate? Feel free to reach out.
            </p>

            <div className="space-y-6">

              <a href="mailto:aman26024@gmail.com" className="flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition">
                <FaEnvelope className="text-xl" />
                <span>Email Me</span>
              </a>

              <a href="https://github.com/Aman260249" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition">
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/aman-sharma-2b0183210" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition">
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>

            </div>
          </div>

          <div className="mt-10 text-sm text-[var(--color-accent)] font-semibold">
            🟢 Available for freelance & full-time
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >

          <h3 className="text-2xl md:text-3xl font-[var(--font-heading)] text-[var(--color-text)] mb-6">
            Get In Touch
          </h3>

          {/* STATUS */}
          {status === "success" && (
            <div className="mb-4 text-green-400 text-sm">
              ✅ Message sent successfully
            </div>
          )}

          {status === "error" && (
            <div className="mb-4 text-red-400 text-sm">
              ❌ Failed to send message
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="firstName" value={formData.firstName} onChange={handleChange}
                placeholder="First Name"
                className="input" required />

              <input name="lastName" value={formData.lastName} onChange={handleChange}
                placeholder="Last Name"
                className="input" required />
            </div>

            <input name="email" value={formData.email} onChange={handleChange}
              placeholder="Email"
              className="input" required />

            <input name="phone" value={formData.phone} onChange={handleChange}
              placeholder="Phone (optional)"
              className="input" />

            <textarea name="message" rows="4" value={formData.message} onChange={handleChange}
              placeholder="Your message..."
              className="input resize-none" required />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-[var(--color-accent)] text-black font-bold rounded-xl transition hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
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