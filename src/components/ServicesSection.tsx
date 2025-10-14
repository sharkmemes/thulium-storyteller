import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services: The Tools for Your{' '}
            <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Custom Solutions for Every Digital Frontier
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="transition-smooth"
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
