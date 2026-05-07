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
    'inline-flex items-center gap-2 font-mono text-sm font-medium tracking-wider rounded-sm relative group overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green';

  const variants = {
    primary:
      'bg-porto text-bg hover:opacity-88 hover:shadow-glow-md px-5 py-3 hover:bg-[#EFFFF5] transition-[background-color,opacity,shadow]',
    ghost: 
      'border border-border2 text-muted hover:text-porto hover:border-white/25 px-5 py-3 hover:shadow-glow-sm transition-[color,border-color,shadow]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.97 },
  };

  const shineVariants = {
    initial: { x: '-100%', opacity: 0 },
    hover: { x: '100%', opacity: 1 },
  };

  const motionProps = shouldReduce
    ? {}
    : {
        initial: 'initial',
        whileHover: 'hover',
        whileTap: 'tap',
      };

  return (
    <motion.a
      href={href}
      className={styles}
      variants={buttonVariants}
      {...motionProps}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {/* Shine effect */}
      {!shouldReduce && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          variants={shineVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
