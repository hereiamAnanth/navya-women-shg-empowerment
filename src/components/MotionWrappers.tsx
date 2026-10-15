import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Smooth cubic bezier easing matching frontend-design constitution
export const editorialEasing = [0.16, 1, 0.3, 1] as const;

interface FadeInViewProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  yOffset = 24,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: editorialEasing,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<'div'>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: editorialEasing,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: editorialEasing,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
