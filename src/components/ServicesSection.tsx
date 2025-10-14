import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import GridBackground from './GridBackground';
import DecorativeLine from './DecorativeLine';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Websites & Web Systems',
    description: 'From stunning, conversion-focused brand websites to complex, data-driven web applications that streamline your entire operation.',
    gradient: 'from-primary to-primary-light',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Intuitive, high-performance iOS and Android apps that connect you with your audience on the devices they use most.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Monitor,
    title: 'Desktop System Development',
    description: 'Robust, secure, and powerful desktop software for specialized tasks that demand high performance and deep system integration.',
    gradient: 'from-primary-dark to-accent',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-background relative">
      <GridBackground variant="dots" opacity={0.06} />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-20">
            <DecorativeLine className="mx-auto mb-8" width="150px" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services: The Tools for Your{' '}
              <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Custom Solutions for Every Digital Frontier
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full border-2 hover:border-primary hover:shadow-glow transition-smooth">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 shadow-elegant`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
