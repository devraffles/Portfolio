import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CaseStudyContent } from './CaseStudyContent';
import { fetchGithubRepos } from '@/lib/github';
import { Project } from '@/types';

interface PageProps {
  params: { slug: string };
}

async function getAllProjects(): Promise<Project[]> {
  const githubRepos = await fetchGithubRepos('devraffles');
  const combined = [...projectsData];
  githubRepos.forEach(repo => {
    if (!combined.find(p => p.slug === repo.slug)) {
      combined.push(repo);
    }
  });
  return combined.sort((a, b) => a.order - b.order);
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} Rafael Giorgi | Case Study`,
    description: project.caseStudy?.problem || project.description,
    openGraph: {
      title: `${project.title}  Rafael Giorgi`,
      description: project.subtitle || project.description,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return <CaseStudyContent project={project} prevProject={prevProject} nextProject={nextProject} />;
}
