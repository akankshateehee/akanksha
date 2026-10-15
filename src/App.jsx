import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ConstructionBanner from './components/ConstructionBanner';

import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';

/* --- ROOT APP --- */
export default function App() {
  useEffect(() => {
    document.title = "Akanksha Kochrekar — Industrial & Product Designer";
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-[#faf8f5] text-[#17191d] font-sans selection:bg-[#cf1830] selection:text-white flex flex-col antialiased">
          <CustomCursor />
          <ConstructionBanner />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:slug" element={<ProjectDetailPage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Redirect removed sections cleanly to Home */}
              <Route path="/commercial" element={<Navigate to="/" replace />} />
              <Route path="/commercial-nda" element={<Navigate to="/" replace />} />
              <Route path="/playground" element={<Navigate to="/" replace />} />
              <Route path="/personal" element={<Navigate to="/" replace />} />
              <Route path="/experiments" element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}