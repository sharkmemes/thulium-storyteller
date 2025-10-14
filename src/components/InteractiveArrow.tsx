import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface InteractiveArrowProps {
  label: string;
  content: string;
  direction?: 'down' | 'right' | 'left';
  className?: string;
}

const InteractiveArrow = ({ label, content, direction = 'down', className = '' }: InteractiveArrowProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const getRotation = () => {
    switch (direction) {
      case 'right': return 270;
      case 'left': return 90;
      default: return 0;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsRevealed(!isRevealed)}
        className="flex flex-col items-center gap-2 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-semibold text-primary group-hover:text-primary-light transition-colors">
          {label}
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ rotate: getRotation() }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isRevealed ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="overflow-hidden mt-4"
      >
        <div className="bg-card border border-primary/20 rounded-xl p-6 shadow-elegant">
          <p className="text-foreground leading-relaxed">{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveArrow;
