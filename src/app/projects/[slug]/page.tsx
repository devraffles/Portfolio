import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CaseStudyContent } from './CaseStudyContent';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} Rafael Giorgi | Case Study`,
    description: project.caseStudy.problem,
    openGraph: {
      title: `${project.title}  Rafael Giorgi`,
      description: project.subtitle,
      type: 'article',
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const projectIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return <CaseStudyContent project={project} prevProject={prevProject} nextProject={nextProject} />;
}
