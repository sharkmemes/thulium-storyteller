import { motion } from 'framer-motion';

interface DecorativeLineProps {
  orientation?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
  className?: string;
  delay?: number;
}

const DecorativeLine = ({
  orientation = 'horizontal',
  width = '100%',
  height = '2px',
  className = '',
  delay = 0,
}: DecorativeLineProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <motion.div
      className={`bg-gradient-to-r from-transparent via-primary to-transparent ${className}`}
      style={{
        width: isHorizontal ? width : height,
        height: isHorizontal ? height : width,
      }}
      initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0, opacity: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: 'easeInOut' }}
    />
  );
};

export default DecorativeLine;
