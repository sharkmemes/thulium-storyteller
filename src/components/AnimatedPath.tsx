import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedPathProps {
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
  reveals?: Array<{ position: number; content: string; title: string }>;
  className?: string;
}

const AnimatedPath = ({ startPoint, endPoint, reveals = [], className = '' }: AnimatedPathProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }, []);

  const pathD = `M ${startPoint.x} ${startPoint.y} Q ${(startPoint.x + endPoint.x) / 2} ${(startPoint.y + endPoint.y) / 2 - 100} ${endPoint.x} ${endPoint.y}`;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ minHeight: '400px' }}
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {reveals.map((reveal, index) => {
        const posX = startPoint.x + (endPoint.x - startPoint.x) * reveal.position;
        const posY = startPoint.y + (endPoint.y - startPoint.y) * reveal.position;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: `${posX}%`, top: `${posY}%` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-glow -translate-x-1/2 -translate-y-1/2 max-w-xs">
              <h4 className="text-sm font-bold text-primary mb-1">{reveal.title}</h4>
              <p className="text-xs text-muted-foreground">{reveal.content}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedPath;
