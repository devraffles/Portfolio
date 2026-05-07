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
              Especialista em transformar problemas complexos em <strong className="text-porto font-medium">sistemas eficientes e escaláveis</strong>. 
              Minha abordagem une rigor técnico com visão de produto: acredito que um bom código é aquele que resolve o problema certo 
              com a arquitetura ideal. Sou movido por desafios que exigem lógica apurada e o uso estratégico de tecnologias modernas.
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
                Graduando em <strong className="text-porto font-medium">ADS pela UniMetrocamp Wyden</strong>. 
                No <strong className="text-porto font-medium">Grupo VIP</strong>, atuo como Estagiário de Desenvolvimento, 
                construindo automações que otimizam processos críticos da empresa. Em paralelo, lidero o desenvolvimento do <strong className="text-porto font-medium">FIT.IA</strong>, 
                um ecossistema de saúde potencializado por Inteligência Artificial generativa.
              </p>
            </article>
          </MotionFadeUp>
        </div>
      </div>
    </section>
  );
}
