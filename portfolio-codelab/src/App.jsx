import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Aapke saare components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import AIQuote from './components/AIQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

// Ek naya function banate hain Router ke andar use karne ke liye
function AppContent() {
  const location = useLocation();
  
  // Ye check karega ki hum admin page par hain ya nahi
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      {/* Agar admin page NAHI hai, tabhi Navbar dikhao */}
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* HOME PAGE ROUTE */}
        <Route path="/" element={
          <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <LearningJourney />
            <AIQuote />
            <Contact />
            <Footer />
          </div>
        } />

        {/* ADMIN PAGE ROUTE */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;