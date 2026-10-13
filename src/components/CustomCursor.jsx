import React, { useState, useEffect, useRef } from 'react';

/* --- ZERO-LATENCY HARDWARE PRECISION CURSOR --- */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      // Direct hardware coordinate tracking: zero lerp, zero trailing lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHoverable = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', checkHoverable, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHoverable);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #fafafa;
        }
        ::-webkit-scrollbar-thumb {
          background: #d4d4d4;
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #737373;
        }
        @media (pointer: fine) {
          body, a, button, input {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Zero-Lag Instant Precision Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full will-change-transform transition-[width,height,margin,background-color,border] duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-6 h-6 -ml-3 -mt-3 bg-neutral-900/10 border border-neutral-900'
            : 'w-2 h-2 -ml-1 -mt-1 bg-neutral-900 border-none'
        }`}
      />
    </>
  );
}

