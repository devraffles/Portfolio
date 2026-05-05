'use client';

import { experienceData } from '@/data/experience';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MotionFadeUp, MotionScaleIn } from '@/components/ui/Motion';

export function Experience() {
  return (
    <section id="experiencia" className="py-20" aria-labelledby="experiencia-heading">
      <SectionLabel number="04" id="experiencia-heading">experiência</SectionLabel>

      <div className="space-y-7">
        {experienceData.map((exp, idx) => (
          <MotionFadeUp key={exp.id} delay={idx * 0.1}>
            <article className="flex gap-5">
              <div className="flex flex-col items-center gap-0" aria-hidden="true">
                <MotionScaleIn delay={idx * 0.1}>
                  <div
                    className={`h-2 w-2 rounded-full flex-shrink-0 mt-1.5 border-2 ${
                      exp.current
                        ? 'border-green bg-green-dim'
                        : 'border-border2 bg-surface'
                    }`}
                  />
                </MotionScaleIn>
                {idx < experienceData.length - 1 && (
                  <div className="flex-1 w-0.5 bg-border my-1" />
                )}
              </div>

              <div className="flex-1 pb-5">
                <h3 className="font-syne text-base font-semibold text-porto">{exp.role}</h3>
                <p className="text-xs text-muted tracking-wider mb-2.5">
                  {exp.company} · {exp.location} · {exp.startDate} – {exp.endDate}
                </p>
                <p className="text-xs leading-relaxed text-porto/60 mb-2.5">{exp.description}</p>
                {exp.impact && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-green bg-green-dim border border-green/20 rounded-sm px-2.5 py-1">
                    ✦ {exp.impact}
                  </div>
                )}
              </div>
            </article>
          </MotionFadeUp>
        ))}
      </div>
    </section>
  );
}
