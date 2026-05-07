'use client';

import { Project } from '@/types';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
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

const linkTypeIcons: Record<string, string> = {
  github: '↗',
  demo: '↗',
  linkedin: '↗',
  web: '↗',
  mobile: '↗',
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      className="mb-3 border border-border rounded-sm bg-surface p-7 transition-colors duration-200 hover:border-border2"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: shouldReduce ? 0 : 0.4, delay: shouldReduce ? 0 : index * 0.08, ease: 'easeOut' }}
      whileHover={shouldReduce ? {} : { y: -2, borderColor: 'rgba(255,255,255,0.12)' }}
    >
      <div className="mb-4 flex items-start justify-between">
        {project.number ? (
          <span className="text-xs font-medium tracking-wider text-green">{project.number}</span>
        ) : (
          <span className="text-xs font-medium tracking-wider text-green/50">Repo</span>
        )}
        <span className={`rounded-sm px-2.5 py-1 text-xs font-medium tracking-widest uppercase ${statusStyles[project.status]}`}>
          {statusText[project.status]}
        </span>
      </div>

      <h3 className="mb-1 font-syne text-xl font-bold text-porto">{project.title}</h3>
      {project.subtitle && (
        <p className="mb-3.5 text-sm text-muted tracking-wider">{project.subtitle}</p>
      )}

      <p className="mb-4 text-sm leading-relaxed text-porto/65">
        {project.description}
      </p>

      {project.challenge && (
        <div className="mb-4 rounded-r-sm border-l-2 border-green bg-surface2 px-4 py-3">
          <p className="mb-1 text-xs font-medium tracking-widest uppercase text-green">Desafio técnico</p>
          <p className="text-xs leading-relaxed text-porto/60">{project.challenge}</p>
        </div>
      )}

      <div className="mb-3.5 flex flex-wrap gap-2">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-sm border border-border2 text-muted hover:text-porto hover:border-white/25 transition-colors duration-200 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            {linkTypeIcons[link.type] || '↗'} {link.label}
          </a>
        ))}
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-sm border border-green/20 bg-green-dim text-green hover:bg-green/20 transition-colors duration-200 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        >
          → Case Study
        </Link>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-border bg-surface2 px-2.5 py-1 text-xs tracking-wider uppercase text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
