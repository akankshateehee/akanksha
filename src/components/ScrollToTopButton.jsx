import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/* --- SCROLL TO TOP FLOATING BUTTON --- */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutomni-card text-white shadow-2xl hover:bg-neutomni-red border border-neutral-800 hover:border-neutomni-red active:scale-95 transition-all flex items-center justify-center cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

