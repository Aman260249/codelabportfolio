import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const mernGradient = "linear-gradient(to right, #8B8BD8, #575762, #494972)";
  const boxBg = "linear-gradient(135deg, #202021 0%, #2C2833 50%, #201731 100%)";
  const neonColor = "#8E7FFF";

  // 🔥 DIRECT BACKEND URL (No more undefined errors)
  const backendUrl = "https://codelabportfolio.onrender.com";

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call using direct URL
      const response = await axios.post(
        `${backendUrl}/api/contact`,
        formData
      );

      if (response.data.success) {
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
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 laptop:px-32 bg-[#0F0F0F] snap-start py-20 relative overflow-hidden"
    >
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#8E7FFF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 w-full max-w-7xl flex flex-col laptop:flex-row gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ background: boxBg, borderColor: neonColor }}
          className="w-full laptop:w-1/3 border-2 rounded-[2.5rem] p-10 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl laptop:text-5xl font-black text-white mb-4">
              Contact Me
            </h2>
            <p className="text-gray-400 mb-10 font-medium">
              Let's build something amazing together.
            </p>

            <div className="space-y-8">
              <a href="mailto:your@gmail.com" className="flex items-center gap-5">
                <FaEnvelope className="text-2xl text-[#8E7FFF]" />
                <span className="text-gray-300 font-bold">Gmail</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-5">
                <FaGithub className="text-2xl text-[#8E7FFF]" />
                <span className="text-gray-300 font-bold">GitHub</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-5">
                <FaLinkedin className="text-2xl text-[#8E7FFF]" />
                <span className="text-gray-300 font-bold">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="mt-12 text-xs text-gray-500 tracking-widest uppercase font-bold">
            Available for freelance & full-time
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ background: boxBg, borderColor: neonColor }}
          className="w-full laptop:w-2/3 border-2 rounded-[2.5rem] p-8 laptop:p-12"
        >
          <div className="mb-8">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              Get In Touch
            </h2>
            <p
              style={{
                backgroundImage: mernGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="font-bold text-lg italic"
            >
              Let's work together
            </p>
          </div>

          {/* ✅ SUCCESS / ERROR POPUP */}
          {status === "success" && (
            <div className="mb-6 p-4 rounded-xl border border-[#8E7FFF] bg-[#8E7FFF]/10 text-[#8E7FFF] font-bold shadow-[0_0_20px_#8E7FFF40]">
              ✅ Message sent successfully. I’ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl border border-red-500 bg-red-500/10 text-red-400 font-bold">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          {/* FORM */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="Your First Name"
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8E7FFF]"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Your Last Name"
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8E7FFF]"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email Address"
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8E7FFF]"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                placeholder="Your Phone Number"
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#8E7FFF]"
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              rows="5"
              value={formData.message}
              placeholder="Tell me about your project"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white resize-none outline-none focus:border-[#8E7FFF]"
              onChange={handleChange}
              required
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-5 bg-[#8E7FFF] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all"
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