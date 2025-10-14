import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, TrendingDown, Zap, Users } from 'lucide-react';
import GridBackground from './GridBackground';
import DecorativeLine from './DecorativeLine';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const impacts = [
  { icon: TrendingUp, label: 'Efficiency', value: '↑ 45%', color: 'text-primary' },
  { icon: TrendingDown, label: 'Cost Reduction', value: '↓ 30%', color: 'text-accent' },
  { icon: Zap, label: 'Performance', value: '↑ 85%', color: 'text-primary-light' },
  { icon: Users, label: 'User Satisfaction', value: '↑ 92%', color: 'text-primary-glow' },
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Horizontal scroll animation
    const panels = gsap.utils.toArray('.impact-panel');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => '+=' + containerRef.current!.offsetWidth,
      },
    });

    // Animate metrics
    impacts.forEach((_, index) => {
      gsap.from(`.metric-${index}`, {
        scrollTrigger: {
          trigger: `.metric-${index}`,
          start: 'left center',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out',
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-secondary overflow-hidden relative">
      <GridBackground variant="lines" opacity={0.05} />
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center">
            <DecorativeLine className="mx-auto mb-8" width="180px" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real Results. Real Success Stories.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div ref={containerRef} className="relative h-[600px]">
        <div className="flex h-full w-[400%]">
          {/* Panel 1: Introduction */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-12">
            <div className="max-w-4xl text-center text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Transforming Challenges into Success
              </h3>
              <p className="text-xl md:text-2xl text-gray-300">
                Every project we deliver creates measurable impact for our clients
              </p>
            </div>
          </div>

          {/* Panel 2: Metrics */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-12">
            <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                    <motion.div
                      className={`metric-${index} bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-primary transition-smooth`}
                      whileHover={{ scale: 1.05 }}
                    >
                    <Icon className={`w-12 h-12 mb-4 ${impact.color}`} />
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {impact.value}
                    </div>
                    <div className="text-xl text-gray-300">{impact.label}</div>
                  </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Panel 3: Case Study Preview */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-12">
            <div className="max-w-4xl text-center text-white">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Custom Solutions, Proven Results
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                From startups to enterprises, we've helped businesses of all sizes achieve their goals
              </p>
              <div className="bg-gradient-primary rounded-2xl p-12 shadow-glow">
                <Zap className="w-16 h-16 mx-auto mb-4 text-white" />
                <p className="text-2xl font-semibold">Ready to see what we can achieve together?</p>
              </div>
            </div>
          </div>

          {/* Panel 4: Transition */}
          <div className="impact-panel w-screen h-full flex items-center justify-center px-12">
            <div className="max-w-4xl text-center text-white">
              <h3 className="text-4xl md:text-6xl font-bold mb-6">
                Your Success Story Starts Here
              </h3>
              <p className="text-xl md:text-2xl text-gray-300">
                Let's build something extraordinary together
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-400">
        <p className="text-sm">← Scroll horizontally to explore →</p>
      </div>
    </section>
  );
};

export default ImpactSection;
