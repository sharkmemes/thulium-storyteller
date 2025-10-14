import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InteractiveArrow from './InteractiveArrow';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Background gradient animation on scroll
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0.8,
      scale: 1.1,
    });

    // Text reveal animations
    gsap.from(headlineRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top center',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(subheadRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top center',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              ref={headlineRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
            >
              Your Vision, Our Code.
              <br />
              <span className="text-gradient">Let's Build What's Next.</span>
            </h1>
          </motion.div>

          <motion.p
            ref={subheadRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            You have a challenge, an opportunity, a problem waiting to be solved. We have the process and the expertise to transform it into a powerful, functional reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg shadow-glow transition-smooth hover:scale-105"
            >
              Start Your Project Journey
            </Button>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-center mt-8">
              <InteractiveArrow
                label="What challenges do you face?"
                content="Inefficient processes, disconnected systems, outdated technology, or scaling issues—we identify the root cause and build solutions that eliminate these pain points."
              />
              <InteractiveArrow
                label="How we solve it"
                content="Through custom software development, AI integration, cloud architecture, and user-centric design—we transform complexity into simplicity."
              />
              <InteractiveArrow
                label="Why choose us?"
                content="We don't just write code. We partner with you to understand your vision, iterate rapidly, and deliver solutions that grow with your business."
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-smooth cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};

export default Hero;
