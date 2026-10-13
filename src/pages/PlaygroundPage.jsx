import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ProjectImage from '../components/ProjectImage';
import { PLAYGROUND_RENDERS } from '../data/playgroundData';

/* --- PAGE 4: PLAYGROUND WITH SHIMMER LOADERS --- */
export default function PlaygroundPage() {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <Link to="/" className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-neutral-400 hover:text-neutral-900 mb-12 transition-colors uppercase">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to home
      </Link>
      
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-widest">
          <Sparkles className="w-3 h-3 text-neutral-900" /> Visual Lab & Playground
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
          Renders, Form Studies <br />& Explorations
        </h1>
        <p className="text-xl text-neutral-500 leading-relaxed font-light">
          A visual archive of unconstrained CAD experiments, clay models, rapid CMF studies, Blender visual labs, and Grasshopper iterations.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {PLAYGROUND_RENDERS.map((item, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xs hover:border-neutral-400 transition-all duration-300 group"
          >
            <ProjectImage 
              id={item.id} 
              altText={item.alt} 
              fitMode="object-cover"
              withLoader={true}
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

