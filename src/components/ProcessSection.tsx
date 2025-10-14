import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Blueprint',
    subtitle: "Let's Define the \"What\" and \"Why\"",
    description: "Before a single line of code is written, we immerse ourselves in your world. We listen to your challenges, goals, and audience.",
    details: "In-depth Consultations, Goal Mapping, User Story Creation, Technical Feasibility Analysis",
  },
  {
    icon: Palette,
    title: 'Architect & Design',
    subtitle: 'From Blueprint to Beautiful, Functional Design',
    description: "Your idea takes shape. Our designers and architects create wireframes, mockups, and system diagrams.",
    details: "UX/UI Design, System Architecture, Prototyping, Brand Integration",
  },
  {
    icon: Code,
    title: 'Agile Development',
    subtitle: 'Building Your Solution, One Iteration at a Time',
    description: "This is where the magic happens. Our developers build using agile methodologies with regular check-ins.",
    details: "Full-Stack Development, Mobile Development, Desktop Applications, Continuous Integration",
  },
  {
    icon: TestTube,
    title: 'Test & Refine',
    subtitle: 'Polishing to Perfection',
    description: "We believe in launching with confidence. Rigorous testing for performance, security, usability, and bugs.",
    details: "Quality Assurance (QA), User Acceptance Testing (UAT), Performance & Security Audits",
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    subtitle: "Your New Possibility is Live. Now, Let's Evolve.",
    description: "Launch day! We handle deployment and offer ongoing support to help your system grow and adapt.",
    details: "Deployment, Hosting Setup, Training & Documentation, Ongoing Support & Maintenance",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Pin title while steps scroll
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom center',
        pin: titleRef.current,
        pinSpacing: false,
      },
    });

    // Animate each step on scroll
    processSteps.forEach((_, index) => {
      gsap.from(`.process-step-${index}`, {
        scrollTrigger: {
          trigger: `.process-step-${index}`,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 100,
        scale: 0.9,
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The Process: Your Path to a{' '}
            <span className="text-gradient">New Possibility</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            We Don't Just Deliver Code, We Deliver Confidence.
          </motion.p>
        </div>

        <div className="space-y-32 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`process-step-${index} flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 shadow-elegant">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    Step {index + 1}: {step.title}
                  </h3>
                  <h4 className="text-xl md:text-2xl text-primary mb-4 font-semibold">
                    {step.subtitle}
                  </h4>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
                    <p className="text-sm font-semibold text-primary mb-2">What we do:</p>
                    <p className="text-foreground">{step.details}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative w-full h-64 md:h-96 bg-gradient-primary rounded-2xl shadow-elegant overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
