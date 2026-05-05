'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'ghost';
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = 'primary',
  external = false,
  children,
  className = '',
}: ButtonProps) {
  const shouldReduce = useReducedMotion();

  const baseStyles =
    'inline-flex items-center gap-2 font-mono text-sm font-medium tracking-wider rounded-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green';

  const variants = {
    primary: 'bg-porto text-bg hover:opacity-88 px-5 py-3',
    ghost: 'border border-border2 text-muted hover:text-porto hover:border-white/25 px-5 py-3',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = shouldReduce
    ? {}
    : {
        whileTap: { scale: 0.97 },
        transition: { duration: 0.1 },
      };

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a href={href} className={styles} {...motionProps}>
      {children}
    </motion.a>
  );
}
