import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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

// Loader + Intro
import Loader from './components/Loader';
import Intro from './components/Intro';

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  const [loading, setLoading] = useState(true);
  const [intro, setIntro] = useState(false);

  return (
    <>
      {/* 🔥 LOADER */}
      <AnimatePresence>
        {loading && (
          <Loader
            onFinish={() => {
              setLoading(false);
              setIntro(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* 🔥 INTRO */}
      <AnimatePresence>
        {intro && (
          <Intro
            onFinish={() => setIntro(false)}
          />
        )}
      </AnimatePresence>

      {/* 🔥 MAIN WEBSITE */}
      {!loading && !intro && (
        <div className="bg-[var(--color-bg)] min-h-screen text-[var(--color-text)] overflow-x-hidden w-full">

          {!isAdminPage && <Navbar />}

          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <div className="w-full scroll-smooth">

                  <section><Hero /></section>
                  <section><About /></section>
                  <section><Skills /></section>
                  <section><Projects /></section>
                  <section><LearningJourney /></section>
                  <section><AIQuote /></section>
                  <section><Contact /></section>
                  <section><Footer /></section>

                </div>
              }
            />

            {/* ADMIN */}
            <Route path="/admin" element={<AdminPanel />} />

          </Routes>
        </div>
      )}
    </>
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