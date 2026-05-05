'use client';

import { stackData } from '@/data/stack';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MotionFadeUp, MotionStagger, MotionBar } from '@/components/ui/Motion';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

function StackGroup({
  title,
  items,
  barColor,
}: {
  title: string;
  items: typeof stackData;
  barColor: string;
}) {
  return (
    <MotionFadeUp>
      <h3 className="mb-4 text-xs font-medium tracking-widest uppercase text-muted">{title}</h3>
      <MotionStagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            variants={childVariant}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-sm border border-border bg-surface p-3 flex flex-col gap-1.5"
          >
            <div className="text-xs font-medium text-porto">{item.name}</div>
            <div className="h-0.5 rounded-full bg-border2 overflow-hidden">
              <MotionBar
                width={item.proficiency}
                delay={idx * 0.04}
                className={`h-full rounded-full ${barColor}`}
              />
            </div>
          </motion.div>
        ))}
      </MotionStagger>
    </MotionFadeUp>
  );
}

export function Stack() {
  const principalStack = stackData.filter((item) => item.tier === 'principal');
  const toolStack = stackData.filter((item) => item.tier === 'ferramenta');
  const secondaryStack = stackData.filter((item) => item.tier === 'secundário');
  const exploringStack = stackData.filter((item) => item.tier === 'explorando');

  return (
    <section id="stack" className="py-14" aria-labelledby="stack-heading">
      <SectionLabel number="02" id="stack-heading">stack</SectionLabel>

      <div className="space-y-10">
        <StackGroup title="Principal" items={principalStack} barColor="bg-green" />
        <StackGroup title="Ferramentas" items={toolStack} barColor="bg-green" />
        <StackGroup title="Secundário" items={secondaryStack} barColor="bg-amber" />
        <StackGroup title="Explorando" items={exploringStack} barColor="bg-muted" />
      </div>
    </section>
  );
}
