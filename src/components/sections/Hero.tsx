'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useCountUp } from '@/components/ui/Motion';
import Image from 'next/image';
import Perfil from '../../../public/Perfil.jpeg';

function MetricCounter({ value, label, isHighlight }: { value: number; label: string; isHighlight?: boolean }) {
  const count = useCountUp(value, 1200);
  const shouldReduce = useReducedMotion();

  return (
    <div>
      <div className={`font-syne text-2xl font-bold ${isHighlight ? 'text-green' : 'text-porto'}`}>
        {shouldReduce ? value : count}
        {label.includes('%') && '%'}
        {label.includes('+') && '+'}
      </div>
      <div className="text-xs tracking-widest uppercase text-muted">{label.replace(/[%+]/g, '').trim()}</div>
    </div>
  );
}

export function Hero() {
  const shouldReduce = useReducedMotion();
  const dur = shouldReduce ? 0 : undefined;

  return (
    <section className="border-b border-border pb-16 pt-28" aria-label="Apresentação">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur ?? 0.4, ease: 'easeOut' }}
            className="mb-4"
          >
            <Badge variant="primary">
              <span aria-hidden="true">✦</span> Back-end Developer · Node.js & TypeScript
            </Badge>
          </motion.div>

          <motion.h1
            className="mb-2 font-syne text-5xl font-bold tracking-tighter text-porto sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur ?? 0.5, delay: dur === 0 ? 0 : 0.1, ease: 'easeOut' }}
          >
            Rafael <span className="text-muted">Giorgi.</span>
          </motion.h1>

          <motion.p
            className="mb-7 font-syne text-lg text-muted font-normal tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur ?? 0.5, delay: dur === 0 ? 0 : 0.3, ease: 'easeOut' }}
          >
            Engenheiro que constrói com intenção.
          </motion.p>

          <motion.p
            className="mb-10 max-w-xl text-sm leading-relaxed text-porto/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur ?? 0.5, delay: dur === 0 ? 0 : 0.4, ease: 'easeOut' }}
          >
            Com resultado de <strong className="text-green">50% de redução no tempo de execução de tarefas</strong> em
            produção real. Desenvolvedor <strong className="text-porto">Back-end especializado em Node.js e TypeScript</strong>,
            com foco em APIs REST robustas, <strong className="text-porto">Clean Code e POO</strong>.
            Atualmente em Campinas, SP.
          </motion.p>

          <motion.div
            className="mb-14 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur ?? 0.4, delay: dur === 0 ? 0 : 0.5, ease: 'easeOut' }}
          >
            <Button href="mailto:devraffles@gmail.com?subject=Oportunidade%20Back-end" variant="primary">
              → Entre em contato
            </Button>
            <Button href="https://github.com/devraffles" variant="ghost" external>
              ↗ GitHub
            </Button>
            <Button href="https://linkedin.com/in/rafaelsgiorgi" variant="ghost" external>
              ↗ LinkedIn
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block relative w-80 h-80 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: dur ?? 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 border border-green/20 rounded-sm translate-x-4 translate-y-4 -z-10" />
          <Image
            src={Perfil}
            alt="Rafael Giorgi"
            fill
            className="object-cover rounded-lg border border-border "
            priority
          />
        </motion.div>
      </div>

      <motion.div
        className="border-t border-border pt-10 flex flex-wrap gap-8 justify-center align-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: dur ?? 0.5, delay: dur === 0 ? 0 : 0.6, ease: 'easeOut' }}
      >
        <MetricCounter value={3} label="+ Projetos entregues" />
        <MetricCounter value={2} label="Estágios em TI" />
        <div>
          <div className="font-syne text-2xl font-bold text-porto">CLT/PJ</div>
          <div className="text-xs tracking-widest uppercase text-muted">Aberto para</div>
        </div>
      </motion.div>
    </section>
  );
}
