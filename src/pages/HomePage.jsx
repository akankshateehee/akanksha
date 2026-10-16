import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Award, Sparkles, CheckCircle2, Cpu, Heart, Layers } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import BrandLogos from '../components/BrandLogos';
import { FLAGSHIP_PROJECTS, ARCHIVE_PROJECTS } from '../data/projectsData';
import { BIO_DATA, AWARDS_AND_ACHIEVEMENTS } from '../data/aboutData';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterProjects = () => {
    if (activeFilter === 'hardware') {
      return FLAGSHIP_PROJECTS.filter(p => p.slug === 'airlert' || p.slug === 'ventra');
    }
    if (activeFilter === 'inclusive') {
      return [...FLAGSHIP_PROJECTS.filter(p => p.slug === 'invert'), ...ARCHIVE_PROJECTS.filter(p => p.slug === 'boxed')];
    }
    if (activeFilter === 'sustainable') {
      return ARCHIVE_PROJECTS.filter(p => p.slug === 'toto' || p.slug === 'avian');
    }
    return FLAGSHIP_PROJECTS;
  };

  return (
    <div className="bg-[#faf8f5] text-neutomni-text">
      
      {/* --- HERO SECTION (NEUTOMNI-INSPIRED LIGHT EDITORIAL STATEMENT) --- */}
      <section className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-28 border-b border-neutomni-border">
        
        {/* Editorial Sub-bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-dashed border-neutomni-border text-[11px] font-mono text-neutomni-textMuted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutomni-red" />
            <span className="text-neutomni-text font-bold tracking-wider">PRODUCT & USER EXPERIENCE DESIGNER</span>
            <span className="text-neutral-300">//</span>
            <span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutomni-textSecondary font-medium">BASED IN MUMBAI</span>
            <span className="hidden sm:inline text-neutral-300">//</span>
            <span className="hidden sm:inline text-neutomni-red font-semibold"></span>
          </div>
        </div>

        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-tight text-neutomni-text leading-[1.06] mb-8">
            I stare at products a little longer than most people. <br />
            <span className="font-serif italic font-normal text-neutomni-red">That’s how I’m designed. That’s how I design.</span> <br />
            
          </h1>


          {/* Quick CTA cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#work"
              className="inline-flex items-center gap-2.5 bg-neutomni-red hover:bg-neutomni-redHover text-white px-7 py-4 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutomni-surfaceMuted border border-neutomni-border text-neutomni-text px-7 py-4 rounded-full font-mono text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              <span>About Section</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutomni-red" />
            </Link>


          </div>
        </div>

        {/* Neutomni-style 4-column metric strip */}
        <div className="mt-20 pt-8 border-t border-neutomni-border grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
          <div className="border-l-2 border-neutomni-red pl-4 py-1">
            <span className="text-[10px] text-neutomni-red font-bold uppercase tracking-widest block mb-1">01 / CURRENT ROLE</span>
            <p className="text-sm font-bold text-neutomni-text">Future Factory, Mum</p>
            <p className="text-xs text-neutomni-textSecondary">Consumer Product Design</p>
          </div>

          <div className="border-l-2 border-neutomni-red pl-4 py-1">
            <span className="text-[10px] text-neutomni-red font-bold uppercase tracking-widest block mb-1">02 / EDUCATION</span>
            <p className="text-sm font-bold text-neutomni-text">NID Madhya Pradesh</p>
            <p className="text-xs text-neutomni-textSecondary">B.Des Industrial Design</p>
          </div>

          <div className="border-l-2 border-neutomni-red pl-4 py-1">
            <span className="text-[10px] text-neutomni-red font-bold uppercase tracking-widest block mb-1">03 / EXPERIENCE</span>
            <p className="text-sm font-bold text-neutomni-text">frog Design, Blr</p>
            <p className="text-xs text-neutomni-textSecondary">Physical & Digital Design</p>
          </div>

          <div className="border-l-2 border-neutomni-red pl-4 py-1">
            <span className="text-[10px] text-neutomni-red font-bold uppercase tracking-widest block mb-1">04 / RECOGNITION</span>
            <p className="text-sm font-bold text-neutomni-text">Patents & Awards</p>
            <p className="text-xs text-neutomni-textSecondary">BOXED · AVIAN · VBYLD</p>
          </div>
        </div>

      </section>

      {/* --- SECTION: FEATURED FLAGSHIP WORKS --- */}
      <section id="work" className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-28">
        
        {/* Section Header & Neutomni Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-neutomni-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutomni-red" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutomni-red font-mono">
                Portfolio Showcase
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutomni-text tracking-tight">
              Core Projects
            </h3>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-neutomni-red text-white font-medium shadow-xs'
                  : 'bg-white border border-neutomni-border text-neutomni-textSecondary hover:text-neutomni-text hover:border-neutomni-text'
              }`}
            >
              All Flagships
            </button>
            <button
              onClick={() => setActiveFilter('hardware')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeFilter === 'hardware'
                  ? 'bg-neutomni-red text-white font-medium shadow-xs'
                  : 'bg-white border border-neutomni-border text-neutomni-textSecondary hover:text-neutomni-text hover:border-neutomni-text'
              }`}
            >
              Consumer Hardware & IoT
            </button>
            <button
              onClick={() => setActiveFilter('inclusive')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeFilter === 'inclusive'
                  ? 'bg-neutomni-red text-white font-medium shadow-xs'
                  : 'bg-white border border-neutomni-border text-neutomni-textSecondary hover:text-neutomni-text hover:border-neutomni-text'
              }`}
            >
              Inclusive & Humanitarian
            </button>
            <button
              onClick={() => setActiveFilter('sustainable')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeFilter === 'sustainable'
                  ? 'bg-neutomni-red text-white font-medium shadow-xs'
                  : 'bg-white border border-neutomni-border text-neutomni-textSecondary hover:text-neutomni-text hover:border-neutomni-text'
              }`}
            >
              Craft & Sustainability
            </button>
          </div>
        </div>

        {/* Flagship Projects Cards (Clean White Elevated Cards with Neutomni Red Accents) */}
        <div className="space-y-24">
          {filterProjects().map((proj, idx) => (
            <article 
              key={proj.slug}
              className="group bg-white border border-neutomni-border hover:border-neutomni-red/40 rounded-3xl p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Project Visual Container */}
                <div className="lg:col-span-7">
                  <Link to={`/project/${proj.slug}`} className="block overflow-hidden rounded-2xl border border-neutomni-borderSubtle bg-neutomni-surfaceMuted shadow-inner group/img relative">
                    <div className="aspect-[16/10] overflow-hidden">
                      <ProjectImage 
                        id={proj.thumbId || proj.heroId} 
                        altText={proj.title}
                        className="group-hover/img:scale-103 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md border border-neutomni-border text-neutomni-text font-mono text-[10px] font-bold uppercase tracking-wider rounded-full shadow-xs">
                        {proj.timeline}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-neutomni-red text-white p-3 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>

                {/* Project Text & Data */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 font-mono text-xs">
                      <span className="text-neutomni-red font-bold uppercase tracking-widest">
                        [{String(idx + 1).padStart(2, '0')}] // {proj.category}
                      </span>
                      <span className="text-neutomni-textMuted font-medium">{proj.date}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutomni-text mb-4 tracking-tight group-hover:text-neutomni-red transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-base sm:text-lg text-neutomni-textSecondary font-light leading-relaxed mb-6">
                      {proj.tagline}
                    </p>

                    {/* Hero metrics grid */}
                    {proj.heroMetrics && (
                      <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-neutomni-border font-mono text-xs">
                        {proj.heroMetrics.slice(0, 4).map((metric, mIdx) => (
                          <div key={mIdx} className="bg-neutomni-surfaceMuted border border-neutomni-borderSubtle rounded-xl p-3">
                            <span className="text-neutomni-textMuted block text-[9px] uppercase tracking-wider mb-1 font-semibold">
                              {metric.label}
                            </span>
                            <span className="text-neutomni-text font-bold text-xs leading-snug">
                              {metric.val}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/project/${proj.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-neutomni-text hover:bg-neutomni-red text-white px-6 py-3.5 rounded-full transition-all active:scale-95 font-semibold shadow-xs"
                    >
                      <span>View In-Depth Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </section>

      {/* --- SECTION: ARCHIVE & DISCOVERY PROJECTS --- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="border-t border-neutomni-border pt-16 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-neutomni-red">
              <span>●</span>
              <span>PATENTS, MATERIAL EXPLORATIONS & SYSTEMIC CRAFT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutomni-text tracking-tight">
              Additional Research & Design Explorations
            </h3>
          </div>
          <span className="font-mono text-xs text-neutomni-textMuted">
            03 Additional Works
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARCHIVE_PROJECTS.map((proj, idx) => (
            <div
              key={proj.slug}
              className="group bg-white border border-neutomni-border hover:border-neutomni-red/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <div className="aspect-[16/10] bg-neutomni-surfaceMuted rounded-xl overflow-hidden mb-6 border border-neutomni-borderSubtle">
                  <ProjectImage 
                    id={proj.thumbId} 
                    altText={proj.title}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex items-center justify-between mb-2 font-mono text-[10px]">
                  <span className="text-neutomni-red font-bold uppercase tracking-wider">
                    {proj.badge}
                  </span>
                  <span className="text-neutomni-textMuted font-medium">{proj.timeline}</span>
                </div>

                <h4 className="text-2xl font-bold text-neutomni-text mb-2 group-hover:text-neutomni-red transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-neutomni-textSecondary leading-relaxed font-light mb-4">
                  {proj.desc || proj.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-neutomni-borderSubtle flex items-center justify-between font-mono text-[11px] text-neutomni-textMuted">
                <span>{proj.category}</span>
                <span className="text-neutomni-red font-medium">NID Exploration</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION: NEUTOMNI-INSPIRED DESIGN PHILOSOPHY & PROCESS --- */}
      <section className="bg-neutomni-surfaceMuted border-t border-b border-neutomni-border py-28 text-neutomni-text relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs text-neutomni-red uppercase tracking-widest block mb-3 font-semibold">
              // DESIGN APPROACH & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutomni-text mb-6">
              How I translate raw curiosity into resolved physical reality.
            </h2>
            <p className="text-base text-neutomni-textSecondary font-light leading-relaxed">
              Design isn't just about surface styling. It is the rigorous discipline of understanding human friction, mechanical logic, and production feasibility—ensuring products survive from sketchpad to factory floor intact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-neutomni-border rounded-2xl p-8 relative group hover:border-neutomni-red/40 transition-all hover:shadow-md">
              <span className="font-mono text-2xl font-bold text-neutomni-red block mb-6">01.</span>
              <h4 className="text-xl font-bold text-neutomni-text mb-3">Empathy & Field Immersion</h4>
              <p className="text-xs text-neutomni-textSecondary leading-relaxed font-light">
                Riding parallel with gig delivery riders, blindfolded medicine dispensing drills, and observing unscripted user habits to uncover unseen pain points before proposing a single line.
              </p>
            </div>

            <div className="bg-white border border-neutomni-border rounded-2xl p-8 relative group hover:border-neutomni-red/40 transition-all hover:shadow-md">
              <span className="font-mono text-2xl font-bold text-neutomni-red block mb-6">02.</span>
              <h4 className="text-xl font-bold text-neutomni-text mb-3">Mechanism & Semantics</h4>
              <p className="text-xs text-neutomni-textSecondary leading-relaxed font-light">
                Dismantling existing products to analyze joints, spring detents, and valve chambers. Crafting tactile affordances and intuitive haptic clicks that communicate without words.
              </p>
            </div>

            <div className="bg-white border border-neutomni-border rounded-2xl p-8 relative group hover:border-neutomni-red/40 transition-all hover:shadow-md">
              <span className="font-mono text-2xl font-bold text-neutomni-red block mb-6">03.</span>
              <h4 className="text-xl font-bold text-neutomni-text mb-3">Hands-On Prototyping</h4>
              <p className="text-xs text-neutomni-textSecondary leading-relaxed font-light">
                Moving between foam blocks, rapid 3D printing, breadboard electronics (ESP32, sensors), and workshop fabrication. Validating size, weight, airflow, and ergonomics in the hand.
              </p>
            </div>

            <div className="bg-white border border-neutomni-border rounded-2xl p-8 relative group hover:border-neutomni-red/40 transition-all hover:shadow-md">
              <span className="font-mono text-2xl font-bold text-neutomni-red block mb-6">04.</span>
              <h4 className="text-xl font-bold text-neutomni-text mb-3">Production & DFM Readiness</h4>
              <p className="text-xs text-neutomni-textSecondary leading-relaxed font-light">
                Designing for Manufacturing and Assembly (DFMA), value engineering, parting line resolution, and intentional CMF strategies built to scale cleanly without compromising the design intent.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION: CLIENT & STUDIO EXPERIENCE --- */}
      <BrandLogos />

      {/* --- SECTION: PERSONAL STORY / JACK OF ALL TRADES TEASER --- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-neutomni-border">
        <div className="bg-white border border-neutomni-border rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-neutomni-red uppercase tracking-widest block mb-4 font-semibold">
                // BEHIND THE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutomni-text tracking-tight mb-6 leading-tight">
                "Smiling at strangers & <br />
                <span className="font-serif italic font-normal text-neutomni-red">waves at dogs :))</span>"
              </h2>
              <p className="text-base sm:text-lg text-neutomni-textSecondary font-light leading-relaxed mb-6">
                I’ve often been called “jack of all trades” and I wear that with a smile. To me, it simply means I’ve never stopped exploring—from dancing Bharatanatyam to planning and hosting institutional summits, from managing people to capturing moments through my lens, I find joy in learning something new, whether it is shaping bamboo, buffing wood, or striking a weld on the workshop floor.
              </p>
              <p className="text-sm text-neutomni-textMuted font-light leading-relaxed mb-8">
                And I guess, I’m built that way: curious, hands-on, and happiest when in motion.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-neutomni-red hover:bg-neutomni-redHover text-white px-7 py-3.5 rounded-full transition-all shadow-sm"
              >
                <span>Read Full Story & View Gallery</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-neutomni-border bg-neutomni-surfaceMuted shadow-sm">
                  <ProjectImage 
                    id="akanksha-photo-dance"
                    altText="Akanksha Kochrekar - Bharatanatyam Dancer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-neutomni-border bg-neutomni-surfaceMuted shadow-sm mt-6">
                  <ProjectImage 
                    id="akanksha-photo-workshop"
                    altText="Akanksha in the workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
