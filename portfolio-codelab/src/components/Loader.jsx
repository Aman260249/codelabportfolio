import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Loader = ({ onFinish }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--color-bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* LOGO */}
      <motion.img
        src={logo}
        alt="logo"
        className="h-14 md:h-20 object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* GLOW */}
      <motion.div
        className="absolute w-40 h-40 bg-[var(--color-accent)]/20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

    </motion.div>
  );
};

export default Loader;