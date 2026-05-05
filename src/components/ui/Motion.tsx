'use client';

import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const slideRight: Variants = {
  hidden: { width: '0%' },
  visible: { width: '100%' },
};

export function MotionFadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionFadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: shouldReduce ? 0 : 0.4, delay: shouldReduce ? 0 : delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: shouldReduce ? 0 : 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionScaleIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: shouldReduce ? 0 : 0.3, delay: shouldReduce ? 0 : delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionBar({
  width,
  delay = 0,
  className = '',
}: {
  width: number;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={{ width: '0%' }}
      whileInView={{ width: `${width}%` }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduce ? 0 : 0.8, delay: shouldReduce ? 0 : delay, ease: 'easeOut' }}
      className={className}
    />
  );
}

export function MotionLine({
  className = '',
}: {
  className?: string;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: shouldReduce ? 0 : 0.6, ease: 'easeOut' }}
      className={className}
    />
  );
}

export function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) {
      setCount(target);
      return;
    }
    let start = 0;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, shouldReduce]);

  return count;
}
