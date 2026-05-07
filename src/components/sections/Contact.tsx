'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { MotionFadeUp, MotionStagger } from '@/components/ui/Motion';
import { motion, useReducedMotion } from 'framer-motion';
import { contactLinks } from '@/data/contact';
import { MessageCircle } from 'lucide-react';

const childVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export function Contact() {
  const shouldReduce = useReducedMotion();

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

          <div className="flex flex-col items-center gap-3 mb-5">
            <motion.a
              href="mailto:devraffles@gmail.com?subject=Oportunidade%20Back-end"
              className="inline-flex items-center gap-2 bg-porto text-bg font-mono text-sm font-medium tracking-wider rounded-sm px-6 py-3 transition-opacity duration-200 hover:opacity-88 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
            >
              → devraffles@gmail.com
            </motion.a>

            <motion.a
              href="https://wa.me/5519981627300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-mono text-sm font-medium tracking-wider rounded-sm px-6 py-3 transition-opacity duration-200 hover:opacity-88 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </motion.a>
          </div>

          <MotionStagger className="flex flex-wrap justify-center gap-2.5">
            {contactLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={childVariant}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center gap-1.5 border border-border2 text-muted hover:text-porto hover:border-white/25 font-mono text-xs tracking-widest uppercase rounded-sm px-4 py-2.5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                {link.icon} {link.label}
              </motion.a>
            ))}
          </MotionStagger>
        </div>
      </MotionFadeUp>
    </section>
  );
}
