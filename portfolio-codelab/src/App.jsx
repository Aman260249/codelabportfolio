import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
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

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    /* 🔥 MOST IMPORTANT FIX */
    <div className="bg-[#0F0F0F] min-h-screen text-white overflow-x-hidden w-full">
      
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            /* ❌ h-screen REMOVED
               ❌ overflow-y-scroll REMOVED
               ✅ natural scroll + snap works better */
            <div className="w-full snap-y snap-mandatory scroll-smooth">
              <section className="snap-start"><Hero /></section>
              <section className="snap-start"><About /></section>
              <section className="snap-start"><Skills /></section>
              <section className="snap-start"><Projects /></section>
              <section className="snap-start"><LearningJourney /></section>
              <section className="snap-start"><AIQuote /></section>
              <section className="snap-start"><Contact /></section>
              <section className="snap-start"><Footer /></section>
            </div>
          }
        />

        {/* ADMIN */}
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
