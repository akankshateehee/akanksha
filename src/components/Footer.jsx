import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { BIO_DATA } from '../data/aboutData';
import ProjectImage from './ProjectImage';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#f5f1eb] border-t border-neutomni-border text-neutomni-text pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      
      {/* Neutomni-style signature "cut along line" divider */}
      <div className="max-w-[1400px] mx-auto mb-16 flex items-center justify-between text-[11px] font-mono text-neutomni-textMuted uppercase tracking-widest border-b border-dashed border-neutomni-border pb-4">
        <span className="flex items-center gap-2">
          <span className="text-neutomni-red font-bold text-sm">✂</span>
          <span>cut along line // let's create something meaningful</span>
        </span>
        <span className="hidden sm:inline font-semibold text-neutomni-red">NID BHOPAL • INDUSTRIAL DESIGN</span>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Big Header & Call to Action */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutomni-border rounded-full text-xs font-mono text-neutomni-textSecondary mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-neutomni-red animate-pulse" />
              <span>Available for full-time product design roles & collaborations</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutomni-text mb-6 leading-[1.05]">
              Let’s build <br />
              <span className="font-serif italic font-normal text-neutomni-red">thoughtful products</span> <br />
              together.
            </h2>

            <p className="text-lg md:text-xl text-neutomni-textSecondary font-light leading-relaxed max-w-xl mb-8">
              Whether you're looking for an industrial designer who lives in the workshop, obsesses over CMF and mechanics, or thrives on deep field empathy—I'd love to chat.
            </p>

            {/* Quick contact buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${BIO_DATA.email}`}
                className="inline-flex items-center gap-2.5 bg-neutomni-red hover:bg-neutomni-redHover text-white px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutomni-surfaceMuted border border-neutomni-border text-neutomni-text px-5 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-neutomni-red" />}
                <span>{copied ? "Copied Email!" : "Copy Email"}</span>
              </button>

              <a
                href={`tel:${BIO_DATA.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-neutomni-textSecondary hover:text-neutomni-red px-4 py-3 font-mono text-xs tracking-wider transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-neutomni-red" />
                <span>{BIO_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Avatar / Portrait Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white border border-neutomni-border rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative group hover:shadow-xl transition-all">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden mb-6 bg-neutomni-surfaceMuted border border-neutomni-borderSubtle shadow-inner">
                <ProjectImage 
                  id="akanksha-avatar-connect"
                  altText="Akanksha Kochrekar - Let's Connect!"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="font-mono text-xs text-neutomni-red font-bold uppercase tracking-widest mb-1">
                Akanksha Kochrekar
              </span>
              <h3 className="text-xl font-bold text-neutomni-text mb-2">
                Empathy-Driven, Impact-Focused
              </h3>
              <p className="text-xs text-neutomni-textSecondary font-light leading-relaxed mb-6 max-w-xs">
                Industrial Design Graduate • National Institute of Design, Bhopal
              </p>

              <div className="w-full pt-4 border-t border-neutomni-border flex items-center justify-center gap-6 text-xs font-mono text-neutomni-textMuted">
                <span className="flex items-center gap-1.5 font-medium text-neutomni-textSecondary">
                  <MapPin className="w-3.5 h-3.5 text-neutomni-red" />
                  Mumbai, Maharashtra
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Directory links */}
        <div className="pt-12 border-t border-neutomni-border grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs">
          <div>
            <p className="text-neutomni-red uppercase tracking-widest text-[10px] font-bold mb-4">// NAVIGATION</p>
            <ul className="space-y-2.5 text-neutomni-textSecondary font-medium">
              <li><Link to="/" className="hover:text-neutomni-red transition-colors">01. Selected Work</Link></li>
              <li><Link to="/about" className="hover:text-neutomni-red transition-colors">02. About & Story</Link></li>
              <li><a href="#work" className="hover:text-neutomni-red transition-colors">03. Project Archive</a></li>
            </ul>
          </div>

          <div>
            <p className="text-neutomni-red uppercase tracking-widest text-[10px] font-bold mb-4">// FEATURED PROJECTS</p>
            <ul className="space-y-2.5 text-neutomni-textSecondary font-medium">
              <li><Link to="/project/airlert" className="hover:text-neutomni-red transition-colors">AIRLERT (frog Design)</Link></li>
              <li><Link to="/project/invert" className="hover:text-neutomni-red transition-colors">INVERT (Inclusive Meds)</Link></li>
              <li><Link to="/project/ventra" className="hover:text-neutomni-red transition-colors">VENTRA (Solar Cooling)</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-neutomni-red uppercase tracking-widest text-[10px] font-bold mb-4">// RECOGNITION</p>
            <ul className="space-y-2.5 text-neutomni-textSecondary">
              <li>Design for Bharat Finalist</li>
              <li>Co-Founder, BDDC NID</li>
              <li>Patent: BOXED Furniture</li>
              <li>Reg: AVIAN Teaset</li>
            </ul>
          </div>

          <div>
            <p className="text-neutomni-red uppercase tracking-widest text-[10px] font-bold mb-4">// SOCIAL & PORTFOLIO</p>
            <ul className="space-y-2.5 text-neutomni-textSecondary font-medium">
              <li>
                <a href={BIO_DATA.behance} target="_blank" rel="noreferrer" className="hover:text-neutomni-red transition-colors inline-flex items-center gap-1">
                  Behance <ArrowUpRight className="w-3 h-3 text-neutomni-red" />
                </a>
              </li>
              <li>
                <a href={BIO_DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-neutomni-red transition-colors inline-flex items-center gap-1">
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-neutomni-red" />
                </a>
              </li>
              <li>
                <a href={`mailto:${BIO_DATA.email}`} className="hover:text-neutomni-red transition-colors inline-flex items-center gap-1">
                  Direct Email <ArrowUpRight className="w-3 h-3 text-neutomni-red" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-neutomni-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutomni-textMuted">
          <p>© {new Date().getFullYear()} Akanksha Kochrekar. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>NID Bhopal B.Des Industrial Design</span>
            <span>•</span>
            <span className="text-neutomni-red font-semibold">Empathy-Driven, Impact-Focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
