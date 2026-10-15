import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, GraduationCap, Briefcase, Heart, Wrench, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import BrandLogos from '../components/BrandLogos';
import { 
  BIO_DATA, 
  EDUCATION_DATA, 
  AWARDS_AND_ACHIEVEMENTS, 
  WORK_EXPERIENCE_DATA, 
  CO_CURRICULARS_DATA, 
  PASSION_ACTIVITIES, 
  CORE_SKILLS 
} from '../data/aboutData';

export default function AboutPage() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="bg-[#faf8f5] text-neutomni-text">
      
      {/* Header Profile Section */}
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-20 border-b border-neutomni-border">
        <Link 
          to="/" 
          className="group inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-neutomni-textMuted hover:text-neutomni-text mb-12 transition-colors uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-neutomni-border rounded-full text-xs font-mono text-neutomni-textSecondary mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-neutomni-red" />
              <span>NID Bhopal • Industrial Design Graduate (2021–25)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutomni-text mb-8 leading-[1.05]">
              Curious, hands-on, <br />
              <span className="font-serif italic font-normal text-neutomni-red">& happiest in motion.</span>
            </h1>

            <div className="space-y-6 text-base sm:text-lg text-neutomni-textSecondary font-light leading-relaxed">
              <p>
                {BIO_DATA.aboutParagraphs[0]}
              </p>
              <p>
                {BIO_DATA.aboutParagraphs[1]}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutomni-border flex flex-wrap items-center gap-6 font-mono text-xs text-neutomni-textMuted">
              <div><span className="text-neutomni-red block text-[10px] font-bold">// LOCATION:</span> {BIO_DATA.location}</div>
              <div><span className="text-neutomni-red block text-[10px] font-bold">// DEGREE:</span> {BIO_DATA.degree}</div>
              <div><span className="text-neutomni-red block text-[10px] font-bold">// FOCUS:</span> CMF, Consumer Hardware, DFMA</div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-neutomni-border bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative group">
              <ProjectImage 
                id="akanksha-portrait"
                altText="Akanksha Kochrekar - Industrial Designer"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[10px] text-neutomni-red uppercase tracking-widest font-bold block mb-1">
                  Akanksha Kochrekar
                </span>
                <p className="text-white text-sm font-medium">
                  {BIO_DATA.tagline}
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Section: Awards & Intellectual Property */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-b border-neutomni-border">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-neutomni-red font-semibold">
              <span>●</span>
              <span>RECOGNITION & PATENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutomni-text tracking-tight">
              Awards, Patents & Institutional Centers
            </h2>
          </div>
          <span className="font-mono text-xs text-neutomni-textMuted">
            Validated Innovation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AWARDS_AND_ACHIEVEMENTS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-neutomni-border hover:border-neutomni-red/40 rounded-2xl p-8 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-4">
                  <span className="px-3 py-1 bg-neutomni-redLight border border-neutomni-red/20 text-neutomni-red font-bold uppercase rounded-full">
                    {item.type}
                  </span>
                  <span className="text-neutomni-textMuted font-medium">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-neutomni-text mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-neutomni-red mb-3 font-semibold">
                  {item.organization}
                </p>
                <p className="text-sm text-neutomni-textSecondary font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Work Experience & Education */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-b border-neutomni-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Work Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-4 h-4 text-neutomni-red" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutomni-textMuted">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {WORK_EXPERIENCE_DATA.map((exp, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-neutomni-border rounded-2xl p-6 sm:p-8 hover:border-neutomni-red/40 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-neutomni-text">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-mono text-neutomni-red font-semibold">
                        {exp.company} <span className="text-neutral-300">//</span> <span className="text-neutomni-textSecondary font-normal">{exp.location}</span>
                      </p>
                    </div>
                    <div className="sm:text-right font-mono text-xs">
                      <span className="text-neutomni-text font-bold block">{exp.period}</span>
                      <span className="text-neutomni-textMuted">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutomni-textSecondary font-light leading-relaxed mt-4 pt-4 border-t border-neutomni-borderSubtle">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Co-Curriculars */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Education Box */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-neutomni-red" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutomni-textMuted">
                  Formal Education
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="bg-white border border-neutomni-border rounded-2xl p-6 hover:shadow-sm">
                    <span className="font-mono text-xs text-neutomni-red font-bold block mb-1">{edu.period}</span>
                    <h5 className="text-lg font-bold text-neutomni-text">{edu.degree}</h5>
                    <p className="text-sm text-neutomni-textSecondary font-medium mb-1">{edu.discipline}</p>
                    <p className="text-xs text-neutomni-textMuted font-light mb-3">{edu.institution}</p>
                    <span className="inline-block text-[10px] font-mono bg-neutomni-surfaceMuted border border-neutomni-border text-neutomni-textSecondary px-3 py-1 rounded-full font-medium">
                      {edu.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Co-Curricular Leadership */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-neutomni-red" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutomni-textMuted">
                  Leadership & Co-Curriculars
                </h3>
              </div>

              <div className="bg-white border border-neutomni-border rounded-2xl p-6 space-y-4 shadow-xs">
                {CO_CURRICULARS_DATA.map((item, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-3 border-t border-neutomni-borderSubtle" : ""}>
                    <div className="flex justify-between items-start gap-2">
                      <h6 className="text-sm font-semibold text-neutomni-text">{item.role}</h6>
                      <span className="text-[10px] font-mono text-neutomni-red font-semibold shrink-0">{item.period}</span>
                    </div>
                    <p className="text-xs text-neutomni-textSecondary font-light mt-0.5">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* Section: Core Skills & Competencies */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-b border-neutomni-border">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-neutomni-red font-semibold">
            <span>●</span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutomni-text tracking-tight">
            Core Skills & Methodologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SKILLS.map((group, idx) => (
            <div 
              key={idx}
              className="bg-white border border-neutomni-border rounded-2xl p-6 hover:shadow-md transition-all"
            >
              <span className="font-mono text-xs text-neutomni-red font-bold uppercase tracking-wider block mb-3">
                0{idx + 1} //
              </span>
              <h4 className="text-lg font-bold text-neutomni-text mb-4">
                {group.category}
              </h4>
              <ul className="space-y-2.5 text-xs text-neutomni-textSecondary font-light">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="text-neutomni-red font-mono font-bold">›</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Personal Story & Passions (Jack of all Trades) */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-neutomni-red uppercase tracking-widest block mb-3 font-semibold">
            // PERSONAL LIFE & PASSIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-neutomni-text tracking-tight mb-6">
            Jack of all trades — <br />
            <span className="font-serif italic font-normal text-neutomni-red">and I think maybe, that’s better than being master of one.</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-neutomni-textSecondary font-light leading-relaxed">
            <p>
              {BIO_DATA.aboutParagraphs[2]}
            </p>
            <p>
              {BIO_DATA.aboutParagraphs[3]}
            </p>
          </div>
        </div>

        {/* 4-Card Gallery with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PASSION_ACTIVITIES.map((activity, idx) => (
            <div 
              key={idx}
              className="bg-white border border-neutomni-border rounded-2xl overflow-hidden group hover:border-neutomni-red/40 transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] bg-neutomni-surfaceMuted overflow-hidden">
                <ProjectImage 
                  id={activity.imageId} 
                  altText={activity.title}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <h4 className="text-base font-bold text-neutomni-text mb-2">
                  {activity.title}
                </h4>
                <p className="text-xs text-neutomni-textSecondary font-light leading-relaxed">
                  {activity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Story Collage Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-neutomni-border bg-white shadow-md">
          <ProjectImage 
            id="akanksha-story-collage"
            altText="Akanksha Kochrekar - Namaste, I am Akanksha"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </section>

    </div>
  );
}
