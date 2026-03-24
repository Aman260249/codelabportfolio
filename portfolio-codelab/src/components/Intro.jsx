import { motion } from "framer-motion";

const Intro = ({ onFinish }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[998] flex items-center justify-center bg-[var(--color-bg)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onFinish, 2000)}
    >

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-bold text-[var(--color-text)]"
      >
        Welcome to Aman Portfolio
      </motion.h1>

    </motion.div>
  );
};

export default Intro;