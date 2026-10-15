import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { BIO_DATA } from '../data/aboutData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mumbaiTime, setMumbaiTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      setMumbaiTime(timeString);
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-neutomni-border text-neutomni-text">
      {/* Top Neutomni-style status ticker bar */}
      <div className="hidden lg:flex items-center justify-between max-w-[1400px] mx-auto px-6 md:px-12 py-1.5 border-b border-neutomni-borderSubtle text-[11px] font-mono text-neutomni-textMuted">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-neutomni-text font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutomni-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutomni-red"></span>
            </span>
            <span>Open for Design Opportunities</span>
          </span>
          <span className="text-neutral-300">/</span>
          <span>NID Bhopal Graduate (2021–25)</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-neutomni-textMuted">MUMBAI, IN</span>
            <span className="text-neutomni-text font-semibold tabular-nums">{mumbaiTime || '03:52:00 PM'} IST</span>
          </div>
          <span className="text-neutral-300">/</span>
          <a 
            href={`mailto:${BIO_DATA.email}`} 
            className="text-neutomni-textSecondary hover:text-neutomni-red transition-colors flex items-center gap-1.5 font-medium"
          >
            <Mail className="w-3 h-3 text-neutomni-red" />
            <span>{BIO_DATA.email}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="group flex flex-col"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg md:text-xl font-bold tracking-[0.08em] text-neutomni-text group-hover:text-neutomni-red transition-colors">
              AKANKSHA KOCHREKAR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutomni-red" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutomni-textMuted font-medium">
            Industrial & Product Design
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-[12px] font-mono tracking-wider uppercase">
            <Link 
              to="/" 
              className={`transition-colors py-1 relative ${
                location.pathname === '/' 
                  ? 'text-neutomni-text font-bold' 
                  : 'text-neutomni-textMuted hover:text-neutomni-text font-medium'
              }`}
            >
              <span className="text-neutomni-red mr-1 font-bold">01.</span> Work
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neutomni-red" />
              )}
            </Link>

            <Link 
              to="/about" 
              className={`transition-colors py-1 relative ${
                location.pathname === '/about' 
                  ? 'text-neutomni-text font-bold' 
                  : 'text-neutomni-textMuted hover:text-neutomni-text font-medium'
              }`}
            >
              <span className="text-neutomni-red mr-1 font-bold">02.</span> About & Story
              {location.pathname === '/about' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neutomni-red" />
              )}
            </Link>

            <a 
              href={BIO_DATA.behance} 
              target="_blank" 
              rel="noreferrer" 
              className="text-neutomni-textMuted hover:text-neutomni-text transition-colors flex items-center gap-1 font-medium"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3 h-3 text-neutomni-red" />
            </a>

            <a 
              href={BIO_DATA.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-neutomni-textMuted hover:text-neutomni-text transition-colors flex items-center gap-1 font-medium"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutomni-red" />
            </a>
          </div>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider bg-neutomni-red hover:bg-neutomni-redHover text-white px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-sm"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`mailto:${BIO_DATA.email}`}
            aria-label="Email Akanksha"
            className="p-2 text-neutomni-text hover:text-neutomni-red"
          >
            <Mail className="w-5 h-5 text-neutomni-red" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-neutomni-text hover:text-neutomni-red focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutomni-border px-6 pt-6 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4 font-mono text-sm tracking-wider uppercase text-neutomni-text">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="py-3 border-b border-neutomni-borderSubtle hover:text-neutomni-red transition-colors flex items-center justify-between"
            >
              <span>[01. Selected Work]</span>
              <span className="text-neutomni-red text-xs font-bold">6 Projects</span>
            </Link>

            <Link 
              to="/about" 
              onClick={closeMenu} 
              className="py-3 border-b border-neutomni-borderSubtle hover:text-neutomni-red transition-colors flex items-center justify-between"
            >
              <span>[02. About Akanksha]</span>
              <span className="text-neutomni-textMuted text-xs">NID 2021-25</span>
            </Link>

            <a 
              href={BIO_DATA.behance} 
              target="_blank" 
              rel="noreferrer" 
              onClick={closeMenu}
              className="py-3 border-b border-neutomni-borderSubtle hover:text-neutomni-red transition-colors flex items-center justify-between"
            >
              <span>Behance Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-neutomni-red" />
            </a>

            <a 
              href={BIO_DATA.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              onClick={closeMenu}
              className="py-3 border-b border-neutomni-borderSubtle hover:text-neutomni-red transition-colors flex items-center justify-between"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-neutomni-red" />
            </a>

            <div className="pt-4 flex flex-col gap-3">
              <a 
                href={`mailto:${BIO_DATA.email}`}
                onClick={closeMenu}
                className="w-full text-center inline-flex items-center justify-center gap-2 text-xs font-mono uppercase bg-neutomni-red text-white px-5 py-3.5 rounded-full hover:bg-neutomni-redHover active:scale-95 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{BIO_DATA.email}</span>
              </a>
              <div className="text-center font-mono text-[11px] text-neutomni-textMuted pt-1">
                Mumbai, India • {mumbaiTime} IST
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
