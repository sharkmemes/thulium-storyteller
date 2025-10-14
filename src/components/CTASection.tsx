import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Let's Build the{' '}
            <span className="text-gradient">Next Possibility</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-gray-200 mb-12 leading-relaxed">
            Every breakthrough starts with a conversation.
            <br />
            Let's turn your next challenge into a success story.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-white px-10 py-7 text-xl shadow-glow transition-smooth group"
              >
                <Mail className="mr-2 h-6 w-6" />
                Start Your Project
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-10 py-7 text-xl transition-smooth"
              >
                <Calendar className="mr-2 h-6 w-6" />
                Schedule a Call
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-gray-300"
          >
            <p className="text-lg mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex justify-center gap-12 items-center opacity-60">
              <div className="h-12 w-32 bg-white/20 rounded backdrop-blur-sm" />
              <div className="h-12 w-32 bg-white/20 rounded backdrop-blur-sm" />
              <div className="h-12 w-32 bg-white/20 rounded backdrop-blur-sm" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
