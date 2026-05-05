'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { MotionFadeUp, MotionStagger } from '@/components/ui/Motion';
import { motion } from 'framer-motion';
import { traits } from '@/data/about';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export function About() {
  return (
    <section className="py-14" aria-labelledby="about-heading">
      <SectionLabel number="01" id="about-heading">sobre</SectionLabel>

      <div className="space-y-3">
        <MotionFadeUp>
          <article className="rounded-sm border border-border bg-surface p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-2.5">quem sou</p>
            <p className="text-sm leading-relaxed text-porto/75">
              Sou o tipo de desenvolvedor que <strong className="text-porto font-medium">pensa antes de digitar</strong>.
              Antes de escrever uma linha, entendo o problema — porque código que resolve
              problema errado com perfeição ainda é código inútil.
              Sou movido por inovação, obcecado com organização e persistente o suficiente
              para não largar algo até estar certo.
            </p>
          </article>
        </MotionFadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <MotionFadeUp delay={0.1}>
            <article className="rounded-sm border border-border bg-surface p-5">
              <p className="text-xs font-medium tracking-widest uppercase text-muted mb-2.5">modo de operar</p>
              <MotionStagger className="flex flex-wrap gap-2">
                {traits.map((trait) => (
                  <motion.span
                    key={trait}
                    variants={childVariant}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-xs tracking-wider border border-border2 rounded-sm px-2.5 py-1 text-muted"
                  >
                    {trait}
                  </motion.span>
                ))}
              </MotionStagger>
            </article>
          </MotionFadeUp>

          <MotionFadeUp delay={0.15}>
            <article className="rounded-sm border border-border bg-surface p-5">
              <p className="text-xs font-medium tracking-widest uppercase text-muted mb-2.5">atualmente</p>
              <p className="text-sm leading-relaxed text-porto/75">
                Cursando <strong className="text-porto font-medium">ADS na UniMetrocamp Wyden</strong>. Estagiário no{' '}
                <strong className="text-porto font-medium">Grupo VIP</strong>,
                implementando automações corporativas. Desenvolvendo o{' '}
                <strong className="text-porto font-medium">FIT.IA</strong>
                — plataforma de treinos com IA generativa.
                Inglês <strong className="text-porto font-medium">B1/B2</strong> com leitura e escrita técnica proficiente.
              </p>
            </article>
          </MotionFadeUp>
        </div>
      </div>
    </section>
  );
}
