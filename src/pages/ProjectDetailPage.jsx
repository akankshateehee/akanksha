import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Wrench, Cpu, CheckCircle2, Layers } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import { ALL_PROJECTS } from '../data/projectsData';
import { BIO_DATA } from '../data/aboutData';

/* --- PRESENTATION-ALIGNED PROJECT CASE STUDY (LIGHT NEUTOMNI THEME) --- */
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const projectIndex = ALL_PROJECTS.findIndex(p => p.slug === slug);
  const project = ALL_PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 py-32 text-center text-neutomni-text">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-sm font-mono text-neutomni-red underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? ALL_PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[projectIndex + 1] : null;

  return (
    <article className="bg-[#faf8f5] text-neutomni-text pb-32">
      
      {/* Header Container */}
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-16">
        <div className="max-w-4xl">
          <button 
            onClick={() => navigate('/')} 
            className="group inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-neutomni-textMuted hover:text-neutomni-text mb-12 transition-colors uppercase cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to all projects
          </button>
          
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="px-3.5 py-1 bg-white border border-neutomni-border text-neutomni-red text-[11px] font-bold uppercase tracking-widest rounded-full font-mono shadow-2xs">
              {project.category}
            </span>
            <span className="px-3.5 py-1 bg-white border border-neutomni-border text-neutomni-textSecondary text-[11px] font-bold uppercase tracking-widest rounded-full font-mono shadow-2xs">
              {project.date} // {project.timeline}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutomni-text mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-2xl text-neutomni-textSecondary leading-relaxed max-w-3xl font-light">
            {project.tagline}
          </p>

          {project.metaHeader && (
            <div className="mt-8 pt-6 border-t border-neutomni-border grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-neutomni-textMuted">
              <div><span className="text-neutomni-red block text-[10px] font-bold">// TIMELINE:</span> {project.metaHeader.timeline}</div>
              <div><span className="text-neutomni-red block text-[10px] font-bold">// CLIENT / CONTEXT:</span> {project.metaHeader.client}</div>
              <div><span className="text-neutomni-red block text-[10px] font-bold">// FOCUS:</span> {project.metaHeader.focus}</div>
            </div>
          )}
        </div>
        
        {project.heroMetrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 pt-8 border-t border-neutomni-border font-mono">
            {project.heroMetrics.map((m, idx) => (
              <div key={idx} className="bg-white border border-neutomni-border rounded-2xl p-5 shadow-xs">
                <span className="text-[10px] font-bold text-neutomni-red uppercase tracking-widest block mb-1">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-bold text-neutomni-text">{m.val}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Wide Hero Banner */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-28">
        <div className={`w-full ${project.heroAspectClass || 'aspect-[16/9]'} bg-neutomni-surfaceMuted rounded-3xl overflow-hidden border border-neutomni-border shadow-[0_12px_40px_rgba(0,0,0,0.06)]`}>
          <ProjectImage 
            id={project.heroId || project.thumbId} 
            altText={`${project.title} Hero Banner`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dynamic Slide Blocks Engine */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-28">
        {project.deckBlocks && project.deckBlocks.map((block, idx) => {
          
          /* LAYOUT 1: Text Top, Image Bottom */
          if (block.type === 'text_top_image_bottom') {
            return (
              <section key={idx} className="border-t border-neutomni-border pt-16">
                <div className="max-w-3xl mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutomni-red block mb-2 font-bold">
                    {block.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutomni-text mb-4">
                    {block.title}
                  </h3>
                  <p className="text-neutomni-textSecondary text-base sm:text-lg leading-relaxed font-light">
                    {block.desc}
                  </p>
                </div>
                <div className={`w-full ${block.aspectClass || 'aspect-[16/9]'} bg-white rounded-3xl overflow-hidden border border-neutomni-border shadow-md`}>
                  <ProjectImage 
                    id={block.imageId} 
                    altText={block.caption} 
                    fitMode={block.fitMode || "object-cover"} 
                    className="w-full h-full" 
                  />
                </div>
                {block.caption && (
                  <span className="font-mono text-xs text-neutomni-textMuted tracking-wider block mt-3 font-medium">
                    fig.{String(idx + 1).padStart(2, '0')} — {block.caption}
                  </span>
                )}
              </section>
            );
          }

          /* LAYOUT 2: Text Left, Image Right */
          if (block.type === 'text_left_image_right') {
            return (
              <section key={idx} className="border-t border-neutomni-border pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutomni-red block mb-2 font-bold">
                      {block.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutomni-text mb-4">
                      {block.title}
                    </h3>
                    <p className="text-neutomni-textSecondary text-base sm:text-lg leading-relaxed font-light">
                      {block.desc}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className={`w-full ${block.aspectClass || 'aspect-[16/10]'} bg-white rounded-2xl overflow-hidden border border-neutomni-border shadow-md`}>
                      <ProjectImage 
                        id={block.imageId} 
                        altText={block.caption} 
                        fitMode={block.fitMode || "object-cover"} 
                        className="w-full h-full" 
                      />
                    </div>
                    {block.caption && (
                      <span className="font-mono text-xs text-neutomni-textMuted tracking-wider block mt-3 font-medium">
                        fig.{String(idx + 1).padStart(2, '0')} — {block.caption}
                      </span>
                    )}
                  </div>
                </div>
              </section>
            );
          }

          /* LAYOUT 3: Text Right, Image Left */
          if (block.type === 'text_right_image_left') {
            return (
              <section key={idx} className="border-t border-neutomni-border pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className={`w-full ${block.aspectClass || 'aspect-[16/10]'} bg-white rounded-2xl overflow-hidden border border-neutomni-border shadow-md`}>
                      <ProjectImage 
                        id={block.imageId} 
                        altText={block.caption} 
                        fitMode={block.fitMode || "object-cover"} 
                        className="w-full h-full" 
                      />
                    </div>
                    {block.caption && (
                      <span className="font-mono text-xs text-neutomni-textMuted tracking-wider block mt-3 font-medium">
                        fig.{String(idx + 1).padStart(2, '0')} — {block.caption}
                      </span>
                    )}
                  </div>
                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutomni-red block mb-2 font-bold">
                      {block.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutomni-text mb-4">
                      {block.title}
                    </h3>
                    <p className="text-neutomni-textSecondary text-base sm:text-lg leading-relaxed font-light">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </section>
            );
          }

          /* Fallback Layout */
          return (
            <section key={idx} className="border-t border-neutomni-border pt-16">
              <div className="w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden border border-neutomni-border shadow-md">
                <ProjectImage 
                  id={block.imageId} 
                  altText={block.caption || project.title} 
                  fitMode="object-cover" 
                  className="w-full h-full" 
                />
              </div>
            </section>
          );
        })}

        {/* Technical DFM Specifications Drawer */}
        {project.specs && (
          <div className="p-8 md:p-12 bg-white text-neutomni-text rounded-3xl border border-neutomni-border font-mono text-xs shadow-lg">
            <div className="text-neutomni-red font-bold mb-8 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-neutomni-red" />
              <span className="tracking-widest uppercase">// TECHNICAL SPECIFICATIONS & CMF REALIZATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <span className="text-neutomni-textMuted block mb-1 font-bold">MATERIAL SPECIFICATION:</span>
                <span className="text-neutomni-text font-semibold leading-relaxed block">{project.specs.material}</span>
              </div>
              <div>
                <span className="text-neutomni-textMuted block mb-1 font-bold">SURFACE & CMF STRATEGY:</span>
                <span className="text-neutomni-text font-semibold leading-relaxed block">{project.specs.finish || project.specs.tactile}</span>
              </div>
              <div>
                <span className="text-neutomni-textMuted block mb-1 font-bold">MECHANICS & HARDWARE:</span>
                <span className="text-neutomni-text font-semibold leading-relaxed block">{project.specs.electronics || project.specs.mechanism || project.specs.tooling}</span>
              </div>
              <div>
                <span className="text-neutomni-textMuted block mb-1 font-bold">SOFTWARE & VALIDATION:</span>
                <span className="text-neutomni-text font-semibold leading-relaxed block">{project.specs.software || project.specs.tools || project.specs.testing}</span>
              </div>
            </div>
          </div>
        )}

        {/* Project Pagination & Bottom Navigation */}
        <div className="pt-12 border-t border-neutomni-border flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs">
          <div>
            {prevProject ? (
              <Link to={`/project/${prevProject.slug}`} className="text-neutomni-textSecondary hover:text-neutomni-red transition-colors flex items-center gap-1.5 font-medium">
                <span>← Prev:</span> <span className="text-neutomni-text font-bold">{prevProject.title}</span>
              </Link>
            ) : (
              <Link to="/" className="text-neutomni-textSecondary hover:text-neutomni-red transition-colors font-medium">
                ← Return to Overview
              </Link>
            )}
          </div>

          <a 
            href={BIO_DATA.behance} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 bg-white border border-neutomni-border hover:border-neutomni-red text-neutomni-text px-5 py-2.5 rounded-full transition-all shadow-xs"
          >
            <span>View Akanksha's Behance Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutomni-red" />
          </a>

          <div>
            {nextProject ? (
              <Link to={`/project/${nextProject.slug}`} className="text-neutomni-textSecondary hover:text-neutomni-red transition-colors flex items-center gap-1.5 font-medium">
                <span>Next:</span> <span className="text-neutomni-text font-bold">{nextProject.title}</span> <span>→</span>
              </Link>
            ) : (
              <Link to="/about" className="text-neutomni-textSecondary hover:text-neutomni-red transition-colors font-medium">
                Read About Akanksha →
              </Link>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
