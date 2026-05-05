'use client';

import { projectsData } from '@/data/projects';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-heading">
      <SectionLabel number="03" id="projetos-heading">projetos</SectionLabel>

      <div className="space-y-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
