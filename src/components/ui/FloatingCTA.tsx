'use client';

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingCTA() {
  const [showFloating, setShowFloating] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector('section[aria-labelledby="contato-heading"]');
      
      if (!contactSection) return;

      const contactRect = contactSection.getBoundingClientRect();

      // Mostrar FloatingCTA quando scrollar mais de 300px e contato não estiver visível
      const scrolledEnough = window.scrollY > 300;
      const contactOutOfView = contactRect.top > window.innerHeight;

      setShowFloating(scrolledEnough && contactOutOfView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shineVariants = {
    initial: { x: '-100%', opacity: 0 },
    hover: { x: '100%', opacity: 1 },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {showFloating && (
        <motion.div
          key="floating-cta"
          initial={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8, y: 20 }}
          animate={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            duration: shouldReduce ? 0 : 0.4,
          }}
          className="fixed bottom-8 right-8 z-40 md:bottom-12 md:right-12"
        >
          <motion.a
            href="https://wa.me/5519981627300"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            whileHover={shouldReduce ? undefined : 'hover'}
            whileTap={shouldReduce ? undefined : 'tap'}
            className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-mono text-sm font-medium shadow-lg overflow-hidden transition-[shadow,background-color] hover:shadow-glow-lg"
            style={{
              backgroundSize: shouldReduce ? '100% 100%' : '200% 200%',
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10" />

            {/* Content */}
            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="group-hover:animate-pulse transition-all" />
              <span className="font-syne font-semibold">Falar no WhatsApp</span>
            </div>

            {/* Shine effect on hover */}
            {!shouldReduce && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                variants={shineVariants}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            )}
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
