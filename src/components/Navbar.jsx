import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

/* --- NAVIGATION --- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-lg md:text-xl font-medium tracking-[0.08em] text-neutral-900 hover:opacity-75 transition-opacity"
        >
          SAHITYA KASHYAP
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          <div className="flex items-center gap-8 text-[13px] font-medium text-neutral-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <Link to="/commercial" className="hover:text-neutral-900 transition-colors">Commercial</Link>
            <Link to="/playground" className="hover:text-neutral-900 transition-colors">Playground</Link>
            <Link to="/about" className="hover:text-neutral-900 transition-colors">About</Link>
            <a 
              href="https://www.behance.net/sahityakashyap" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-neutral-900 transition-colors"
            >
              Behance
            </a>
          </div>

          <a 
            href="mailto:design.er.saahi@gmail.com" 
            className="text-[13px] font-semibold bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 active:scale-95 transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-neutral-800 hover:text-black focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4 font-mono text-sm tracking-wider uppercase text-neutral-700">
            <Link to="/" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[01. Home]</Link>
            <Link to="/commercial" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[02. Commercial Hardware]</Link>
            <Link to="/playground" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[03. Playground & Visual Lab]</Link>
            <Link to="/about" onClick={closeMenu} className="py-2 border-b border-neutral-100 hover:text-black transition-colors">[04. About Sahitya]</Link>
            <a 
              href="https://www.behance.net/sahityakashyap" 
              target="_blank" 
              rel="noreferrer" 
              onClick={closeMenu}
              className="py-2 flex items-center justify-between text-neutral-900 font-bold border-b border-neutral-100"
            >
              <span>Behance Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="pt-2">
              <a 
                href="mailto:design.er.saahi@gmail.com" 
                onClick={closeMenu}
                className="w-full text-center block text-xs font-sans font-semibold bg-neutral-900 text-white px-5 py-3 rounded-full hover:bg-neutral-800 active:scale-95 transition-all tracking-normal"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

