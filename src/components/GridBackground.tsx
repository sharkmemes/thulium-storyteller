import { motion } from 'framer-motion';

interface GridBackgroundProps {
  variant?: 'default' | 'dots' | 'lines';
  opacity?: number;
  className?: string;
}

const GridBackground = ({ variant = 'default', opacity = 0.1, className = '' }: GridBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === 'default' && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / ${opacity}) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / ${opacity}) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      )}
      
      {variant === 'dots' && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / ${opacity}) 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
          }}
        />
      )}

      {variant === 'lines' && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-primary"
              style={{
                top: `${i * 5}%`,
                left: 0,
                right: 0,
                opacity: opacity,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: i * 0.05 }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default GridBackground;
