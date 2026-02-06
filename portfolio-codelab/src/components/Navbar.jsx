// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import logo from '../assets/logo.png'; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <div className="fixed top-4 w-full z-50 px-4 flex justify-center">
//       {/* Desktop & Base Nav */}
//       <motion.nav 
//         style={{ background: 'linear-gradient(to right, #202021, #2c2833, #201731)' }}
//         className="h-16 tablet:h-20 w-full max-w-[1200px] rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-between px-6 shadow-2xl relative"
//       >
//         <img src={logo} alt="CodeLabBro" style={{ height: '130px', width: 'auto' }} className="h-8 tablet:h-10 w-auto" />

//         <div className="hidden tablet:flex items-center gap-12">
//           {menuItems.map((item) => (
//             <a key={item.name} href={item.href} className="text-gray-300 hover:text-purple-400 font-medium transition-colors text-sm tracking-widest uppercase">
//               {item.name}
//             </a>
//           ))}
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)} className="tablet:hidden text-white p-2">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* --- MOBILE GLASS MENU START --- */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 10, scale: 0.95 }}
//               className="absolute top-20 left-0 w-full tablet:hidden p-[1px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.2)]"
//               // Gradient Border Effect using padding + background
//               style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #EC4899 100%)' }}
//             >
//               <div className="bg-[#0F0F0F]/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col gap-8 items-center">
//                 {menuItems.map((item, i) => (
//                   <motion.a 
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     key={item.name} 
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className="text-2xl font-bold text-gray-100 active:text-purple-500"
//                   >
//                     {item.name}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* --- MOBILE GLASS MENU END --- */}
//       </motion.nav>
//     </div>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ HOME ADDED
  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-4 w-full z-50 px-4 flex justify-center">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative
          h-16 tablet:h-20
          w-full max-w-[1200px]
          rounded-2xl
          border border-white/10
          backdrop-blur-xl
          shadow-[0_20px_50px_rgba(0,0,0,0.6)]
          flex items-center justify-between
          px-6 tablet:px-10
        "
        style={{
          background:
            "linear-gradient(90deg, #202021 0%, #2C2833 50%, #201731 100%)",
        }}
      >
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="CodeLabBro"
            style={{ height: '100px', width: 'auto' }}
            className="
              h-8 tablet:h-10
              w-auto
              object-contain
              scale-125
              origin-left
              drop-shadow-[0_0_20px_rgba(142,127,255,0.35)]
            "
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden tablet:flex items-center gap-14">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative
                text-gray-300
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                transition-all
                hover:text-[#8E7FFF]
                after:absolute after:-bottom-2 after:left-0
                after:h-[1px] after:w-0
                after:bg-[#8E7FFF]
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            tablet:hidden
            text-white
            p-2
            rounded-xl
            bg-white/5
            border border-white/10
          "
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                absolute
                top-[88px]
                left-0
                w-full
                tablet:hidden
                p-[1px]
                rounded-2xl
                shadow-[0_0_30px_rgba(142,127,255,0.25)]
              "
              style={{
                background:
                  "linear-gradient(135deg, #8E7FFF 0%, #EC4899 100%)",
              }}
            >
              <div className="bg-[#0F0F0F]/95 backdrop-blur-2xl rounded-2xl p-8 flex flex-col items-center gap-8">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setIsOpen(false)}
                    className="
                      text-xl
                      font-bold
                      text-gray-200
                      tracking-widest
                      hover:text-[#8E7FFF]
                      transition-colors
                    "
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
