'use client';

import { certificationsData } from '@/data/certifications';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MotionStagger } from '@/components/ui/Motion';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export function Certifications() {
  return (
    <section className="py-10" aria-labelledby="cert-heading">
      <SectionLabel number="05" id="cert-heading">certificações</SectionLabel>

      <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3">
        {certificationsData.map((cert) => (
          <motion.article
            key={cert.id}
            variants={childVariant}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-sm border border-border bg-surface p-4 flex flex-col gap-2 hover:border-border2 transition-colors group"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-medium text-porto leading-snug pr-2">{cert.name}</p>
                <p className="text-xs text-muted">{cert.organization}</p>
              </div>
            </div>
            <p className="text-xs text-green tracking-wider">{cert.year}</p>
            {cert.description && (
              <p className="text-xs text-porto/50 leading-relaxed">{cert.description}</p>
            )}
            {cert.hours && (
              <p className="text-xs text-muted/70">📚 {cert.hours}</p>
            )}
          </motion.article>
        ))}
      </MotionStagger>
    </section>
  );
}
