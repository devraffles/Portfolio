'use client';

import { Project } from '@/types';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpLeft } from 'lucide-react';

interface CaseStudyContentProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

const statusStyles = {
  development: 'bg-amber-dim border border-amber/20 text-amber',
  completed: 'bg-green-dim border border-green/20 text-green',
  maintenance: 'bg-blue-dim border border-blue/20 text-blue',
};

const statusText = {
  development: 'Em desenvolvimento',
  completed: 'Concluído',
  maintenance: 'Em manutenção',
};

export function CaseStudyContent({ project, prevProject, nextProject }: CaseStudyContentProps) {
  const shouldReduce = useReducedMotion();
  const dur = shouldReduce ? 0 : undefined;

  return (
    <div className="min-h-screen bg-bg text-porto">
      <div className="mx-auto max-w-2xl px-6 sm:px-12 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur ?? 0.3, ease: 'easeOut' }}
        >
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-porto transition-colors mb-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <ArrowLeft size={14} /> Voltar aos projetos
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur ?? 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-wider text-green">{project.number}</span>
            <span className={`rounded-sm px-2.5 py-1 text-xs font-medium tracking-widest uppercase ${statusStyles[project.status]}`}>
              {statusText[project.status]}
            </span>
          </div>

          <h1 className="font-syne text-4xl sm:text-5xl font-bold tracking-tight text-porto mb-2">
            {project.title}
          </h1>
          <p className="text-base text-muted tracking-wider">{project.subtitle}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur ?? 0.5, delay: dur === 0 ? 0 : 0.2, ease: 'easeOut' }}
          className="space-y-10"
        >
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
              01 — Problema
            </h2>
            <p className="text-sm leading-relaxed text-porto/70">{project.caseStudy.problem}</p>
          </section>

          <section aria-labelledby="solution-heading">
            <h2 id="solution-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
              02 — Solução Técnica
            </h2>
            <p className="text-sm leading-relaxed text-porto/70">{project.caseStudy.solution}</p>
          </section>

          <section aria-labelledby="arch-heading">
            <h2 id="arch-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
              03 — Arquitetura
            </h2>
            <div className="rounded-sm border border-border bg-surface p-5">
              <p className="text-xs font-mono leading-relaxed text-porto/60">{project.caseStudy.architecture}</p>
            </div>
          </section>

          <section aria-labelledby="challenge-heading">
            <h2 id="challenge-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
              04 — Desafio Técnico
            </h2>
            <div className="rounded-r-sm border-l-2 border-green bg-surface2 px-4 py-3">
              <p className="text-xs leading-relaxed text-porto/60">{project.challenge}</p>
            </div>
          </section>

          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
              05 — Resultados
            </h2>
            <ul className="space-y-2">
              {project.caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-porto/70">
                  <span className="text-green mt-0.5 text-xs">→</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {project.caseStudy.socialProof && (
            <section aria-labelledby="social-heading">
              <h2 id="social-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
                06 — Prova Social
              </h2>
              <p className="text-sm leading-relaxed text-porto/70">{project.caseStudy.socialProof}</p>
            </section>
          )}

          <section aria-labelledby="links-heading">
            <h2 id="links-heading" className="text-xs font-medium tracking-widest uppercase text-green mb-3">
              Links
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase px-3 py-2 rounded-sm border border-border2 text-muted hover:text-porto hover:border-white/25 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <ArrowUpLeft size={12} /> {link.label}
                </a>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-border bg-surface2 px-2.5 py-1 text-xs tracking-wider uppercase text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <nav className="mt-16 pt-8 border-t border-border flex justify-between items-center" aria-label="Navegação entre projetos">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-porto transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              <ArrowLeft size={14} /> {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-porto transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              {nextProject.title} <ArrowRight size={14} />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </div>
  );
}
