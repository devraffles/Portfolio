'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { MotionFadeUp } from '@/components/ui/Motion';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Github, Linkedin, Send } from 'lucide-react';

const contactButtonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};

const shineVariants = {
  initial: { x: '-100%', opacity: 0 },
  hover: { x: '100%', opacity: 1 },
};

export function Contact() {
  const shouldReduce = useReducedMotion();

  const motionProps = shouldReduce
    ? {}
    : {
        initial: 'initial',
        whileHover: 'hover',
        whileTap: 'tap',
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      };

  return (
    <section id="contato" className="py-16" aria-labelledby="contato-heading">
      <SectionLabel number="06" id="contato-heading">contato</SectionLabel>

      <MotionFadeUp>
        <div className="rounded-sm border border-border bg-surface p-10 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-green mb-3.5">
            ✦ disponível para oportunidades
          </p>

          <h2 className="mb-3 font-syne text-2xl font-bold text-porto leading-snug">
            Vamos construir<br />
            algo que funciona.
          </h2>

          <p className="mb-7 text-xs leading-relaxed text-muted">
            Se você procura um desenvolvedor que entende arquitetura,<br />
            escreve código limpo e quer crescer junto com a empresa fale comigo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/5519981627300"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center gap-3 bg-green-600 text-white font-mono text-sm font-medium tracking-wider rounded-sm px-6 py-4 overflow-hidden transition-[background-color,shadow] hover:shadow-glow-md hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:col-span-2 lg:col-span-1"
              variants={contactButtonVariants}
              {...motionProps}
            >
              <div className="absolute inset-0 rounded-sm bg-green-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 -z-10" />
              {!shouldReduce && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  variants={shineVariants}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              )}
              <MessageCircle size={18} />
              <span className="relative z-10">WhatsApp</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/rafaelsgiorgi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center gap-3 bg-[#0077B5] text-white font-mono text-sm font-medium tracking-wider rounded-sm px-6 py-4 overflow-hidden transition-[background-color,shadow] hover:shadow-glow-linkedin hover:bg-[#008cc9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A0DC]"
              variants={contactButtonVariants}
              {...motionProps}
            >
              <div className="absolute inset-0 rounded-sm bg-[#00A0DC] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300 -z-10" />
              {!shouldReduce && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  variants={shineVariants}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              )}
              <Linkedin size={18} />
              <span className="relative z-10">LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/devraffles"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center gap-3 bg-[#24292e] text-white font-mono text-sm font-medium tracking-wider rounded-sm px-6 py-4 overflow-hidden transition-[background-color,shadow] hover:shadow-glow-github hover:bg-[#33393f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              variants={contactButtonVariants}
              {...motionProps}
            >
              <div className="absolute inset-0 rounded-sm bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10" />
              {!shouldReduce && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  variants={shineVariants}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              )}
              <Github size={18} />
              <span className="relative z-10">GitHub</span>
            </motion.a>
          </div>

          <div className="mt-8">
            <motion.a
              href="mailto:devraffles@gmail.com?subject=Oportunidade%20Back-end"
              className="inline-flex items-center gap-2 text-muted hover:text-porto transition-colors duration-200 font-mono text-sm tracking-widest"
              whileHover={{ x: 4 }}
            >
              <Send size={14} /> devraffles@gmail.com
            </motion.a>
          </div>
        </div>
      </MotionFadeUp>
    </section>
  );
}