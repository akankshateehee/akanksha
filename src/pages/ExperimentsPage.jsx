import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Terminal, 
  Cpu, 
  Camera, 
  Layers, 
  Box, 
  FileText, 
  Copy, 
  Check, 
  Sliders, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';
import PlaygroundHeaderNav from '../components/PlaygroundHeaderNav';

export default function ExperimentsPage() {
  const [copiedInstall, setCopiedInstall] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('Edit > Preferences > Add-ons > Install from Disk... > ID_RenderFlo.zip');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32">
      <PlaygroundHeaderNav />

      {/* Hero Manifesto Header */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
          <Terminal className="w-3 h-3 text-orange-500" />
          <span>Workflows // Automation // Systematic Shortcuts</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.08]">
          Engineering out friction. <br />
          <span className="text-neutral-400">Mostly just for fun.</span>
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
          <p>
            I have an allergic reaction to manual, repetitive friction. I would genuinely rather spend three hours engineering a clever, repeatable workflow using whatever resources are right in front of me than spend twenty minutes doing brain-numbing repetitive tasks by hand.
          </p>
          <p>
            It is not always about writing code or complex scripts; it is about <strong className="font-medium text-neutral-900">systematic leverage</strong>. Finding the faster way, eliminating redundant clicks, standardizing studio rigs, and building pipelines that get out of the way so the actual industrial design craft can flourish.
          </p>
        </div>
      </div>

      {/* 3 Philosophy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
              01 // REPEATABLE LEVERAGE
            </span>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              Never repeat what a system can automate
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              If an action requires more than three identical clicks per render or CAD iteration, it belongs in a pipeline, a template, or a hotkey macro.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            Zero Redundancy Rule
          </div>
        </div>

        <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
              02 // RESOURCEFUL ENGINEERING
            </span>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              Not code for code's sake
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              Clever shortcuts don't need complex software engineering. Use whatever tool is right in front of you—Python, Grasshopper math, SolidWorks macros, or physical workshop jigs.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            Pragmatic Craftsmanship
          </div>
        </div>

        <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
              03 // PURE ENJOYMENT
            </span>
            <h3 className="text-xl font-medium text-neutral-900 mb-3">
              Solving workflow puzzles for fun
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              Designing the tool is as creatively engaging as designing the product. These experiments are personal weapons built to make high-fidelity physical realization effortless.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-200/80 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
            Personal Studio Labs
          </div>
        </div>
      </div>

      {/* FEATURED WORKFLOW ASSET: ID RENDERFLO */}
      <section className="bg-neutral-950 text-white rounded-3xl border border-neutral-800 p-8 md:p-14 mb-24 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-orange-500 text-black px-3 py-1 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase">
                Featured Pipeline Add-On
              </span>
              <span className="text-neutral-400 font-mono text-xs">
                Blender 3.6 LTS – 5.2.2+ Compatible
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MIT Licensed · Free for Personal & Studio Use</span>
            </div>
          </div>

          {/* Main Title & Pitch */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              ID RenderFlo — Blender Studio & Matrix Render Pipeline
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              A dedicated product visualization pipeline built directly into Blender's 3D Viewport. Brings a fast, KeyShot-style workflow to Cycles: multi-camera studios, interactive specular highlight targeting, CMF colorway management, and an unattended GPU matrix queue that crosses every camera with every material variation without freezing your machine.
            </p>
          </div>

          {/* Download Action Bar */}
          <div className="p-6 md:p-8 bg-neutral-900/90 rounded-2xl border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-14">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>ID_RenderFlo.zip</span>
                <span className="text-xs text-neutral-400 font-normal">(v1.0.0 Production Bundle)</span>
              </div>
              <p className="text-neutral-400 text-xs font-mono">
                Includes: <code className="text-neutral-200">ID_RenderFlo/__init__.py</code>, <code className="text-neutral-200">HOW_TO_USE.txt</code>, and <code className="text-neutral-200">LICENSE.txt</code>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/assets/ID_RenderFlo.zip" 
                download="ID_RenderFlo.zip"
                className="inline-flex items-center gap-2.5 bg-white text-neutral-900 hover:bg-neutral-100 active:scale-95 px-6 py-3.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
              >
                <Download className="w-4 h-4 text-neutral-900 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Pipeline (.zip)</span>
                <span className="text-[10px] text-neutral-500 font-normal">21.8 KB</span>
              </a>

              <button
                onClick={handleCopyInstall}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 font-mono text-xs transition-colors cursor-pointer"
                title="Copy installation path"
              >
                {copiedInstall ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Path</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Install Path</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Architecture Features Grid */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <Cpu className="w-4 h-4 text-orange-400" />
              <span>Core Architectural Modules</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Box className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">01. Native CAD Bridge & Auto-Prep</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Direct <code className="text-neutral-300">.STEP</code>, <code className="text-neutral-300">.IGES</code>, and <code className="text-neutral-300">.STL</code> ingestion via OpenCASCADE. Automatically snaps base to floor (<code className="text-neutral-300">Z=0</code>), remaps Y-Up SolidWorks models to Z-Up, and scales millimeters to meters for realistic Cycles photon falloff.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">02. Dynamic Studio Framing & Aspect Presets</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  One-click switching between 16:9 Widescreen, 1:1 Square, 4:5 Portrait, and 9:16 Vertical. Automatically compensates camera sensor fit so your product never gets clipped when jumping between formats.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">03. Eyedropper Highlight Tool</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  No more wrestling with 3D rotation gizmos. Click the eyedropper, hover over any curved chamfer or parting line on your model, and left-click—the studio area light locks its specular reflection precisely where you pointed.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">04. CMF Colorway Matrix</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Save, clone, and switch complex Color, Material, Finish palettes (Matte Black, Satin Stainless, Translucent CMF) across the entire assembly without duplicating objects or cluttering your outliner.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">05. Headless GPU Matrix Queue (N × M)</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Renders every checked camera studio multiplied by every checked CMF colorway in one batch. Uses a non-blocking modal timer loop so Blender stays 100% responsive without freezing or crashing.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-800 text-orange-400 flex items-center justify-center mb-4">
                  <Sliders className="w-4 h-4" />
                </div>
                <h4 className="text-base font-medium text-white mb-2">06. Shadow Catcher & Curved Cyclorama</h4>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  Spawns an infinite cyclorama sweep or an invisible floor shadow catcher for clean transparent alpha PNGs, ready for client pitch decks, Behance hero spreads, or packaging boards.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Step Setup Guide */}
          <div className="p-6 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
              // Setup in 60 Seconds
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-1.5">
                <span className="text-orange-400 font-bold block">STEP 01</span>
                <p className="text-neutral-300 font-sans text-sm">Download <code className="text-xs font-mono text-neutral-200">ID_RenderFlo.zip</code> using the direct button above.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-orange-400 font-bold block">STEP 02</span>
                <p className="text-neutral-300 font-sans text-sm">In Blender: <code className="text-xs font-mono text-neutral-200">Edit &gt; Preferences &gt; Add-ons &gt; Install from Disk...</code> and check the box.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-orange-400 font-bold block">STEP 03</span>
                <p className="text-neutral-300 font-sans text-sm">Open 3D Viewport, press <kbd className="px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">N</kbd>, click the <strong className="text-white">ID RenderFlo</strong> tab, and import your CAD.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <div className="p-8 md:p-10 bg-neutral-100 rounded-2xl border border-neutral-200 text-center max-w-2xl mx-auto">
        <p className="text-neutral-800 text-base md:text-lg font-light italic mb-3">
          "The best tools are the ones you build because you were too impatient to do it the boring way."
        </p>
        <span className="font-mono text-xs text-neutral-400 block uppercase tracking-wider">
          — Sahitya Kashyap // Industrial Design Studio
        </span>
      </div>
    </div>
  );
}

