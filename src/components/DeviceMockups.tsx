import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface DeviceMockupsProps {
  type: 'laptop' | 'phone' | 'both';
  stepIndex: number;
}

const DeviceMockups = ({ type, stepIndex }: DeviceMockupsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (laptopRef.current && (type === 'laptop' || type === 'both')) {
      gsap.fromTo(
        laptopRef.current,
        {
          rotateX: 45,
          rotateY: -25,
          opacity: 0,
          scale: 0.8,
        },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      );
    }

    if (phoneRef.current && (type === 'phone' || type === 'both')) {
      gsap.fromTo(
        phoneRef.current,
        {
          rotateX: 45,
          rotateY: 25,
          opacity: 0,
          scale: 0.8,
        },
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      );
    }
  }, [type]);

  return (
    <div ref={containerRef} className="relative w-full h-64 md:h-96 flex items-center justify-center" style={{ perspective: '1500px' }}>
      {(type === 'laptop' || type === 'both') && (
        <div
          ref={laptopRef}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Laptop Screen */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-2xl border-8 border-slate-700 shadow-2xl w-72 h-48 md:w-96 md:h-64">
            <div className="absolute inset-0 bg-gradient-primary rounded-xl m-2 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Monitor className="w-16 h-16 md:w-24 md:h-24 text-white/20" />
              </div>
              {/* Screen reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>
            {/* Webcam */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-600" />
          </div>
          
          {/* Laptop Base */}
          <div 
            className="relative bg-slate-700 h-3 rounded-b-xl shadow-lg w-80 md:w-[28rem]"
            style={{ transform: 'translateX(-8%) rotateX(75deg) translateZ(-10px)' }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-slate-600 rounded-t-sm" />
          </div>
        </div>
      )}

      {(type === 'phone' || type === 'both') && (
        <div
          ref={phoneRef}
          className={`relative ${type === 'both' ? 'ml-8 md:ml-12' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Phone Frame */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] border-8 border-slate-700 shadow-2xl w-36 h-72 md:w-44 md:h-80">
            <div className="absolute inset-0 bg-gradient-primary rounded-[1.8rem] m-1 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-white/20" />
              </div>
              {/* Screen reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>
            
            {/* Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 rounded-b-2xl" />
            
            {/* Side buttons */}
            <div className="absolute right-[-8px] top-24 w-1 h-12 bg-slate-600 rounded-l-sm" />
            <div className="absolute left-[-8px] top-20 w-1 h-6 bg-slate-600 rounded-r-sm" />
            <div className="absolute left-[-8px] top-32 w-1 h-8 bg-slate-600 rounded-r-sm" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceMockups;
