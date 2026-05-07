'use client';

import { useState, useEffect } from 'react';
import { projectsData } from '@/data/projects';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { fetchGithubRepos } from '@/lib/github';
import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    async function loadRepos() {
      const githubRepos = await fetchGithubRepos('devraffles');
      
      // Combine and filter duplicates (by slug)
      const combined = [...projectsData];
      githubRepos.forEach(repo => {
        if (!combined.find(p => p.slug === repo.slug)) {
          combined.push(repo);
        }
      });
      
      setProjects(combined.sort((a, b) => a.order - b.order));
      setIsLoading(false);
    }
    loadRepos();
  }, []);

  const nextSlide = () => {
    const increment = isDesktop ? 2 : 1;
    setCurrentIndex((prev) => (prev + increment) % projects.length);
  };

  const prevSlide = () => {
    const increment = isDesktop ? 2 : 1;
    setCurrentIndex((prev) => (prev - increment + projects.length) % projects.length);
  };

  const visibleProjects = () => {
    if (isDesktop && projects.length > 1) {
      const secondIndex = (currentIndex + 1) % projects.length;
      return [projects[currentIndex], projects[secondIndex]];
    }
    return [projects[currentIndex]];
  };

  return (
    <section id="projetos" aria-labelledby="projetos-heading" className="py-10">
      <SectionLabel number="03" id="projetos-heading">projetos</SectionLabel>

      {/* Mobile View: Vertical List */}
      <div className="lg:hidden space-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Desktop View: Carousel */}
      <div className="hidden lg:block relative group -mx-4 sm:-mx-12 lg:-mx-24 px-4 sm:px-12 lg:px-24">
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="grid grid-cols-2 gap-6"
              >
                {visibleProjects().map((project, idx) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={idx} 
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {projects.length > 2 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-surface border border-border text-porto/50 hover:text-porto hover:border-border2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 shadow-lg"
                aria-label="Projeto anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-surface border border-border text-porto/50 hover:text-porto hover:border-border2 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 shadow-lg"
                aria-label="Próximo projeto"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * 2)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / 2) === idx ? 'w-10 bg-green' : 'w-3 bg-border hover:bg-border2'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      {isLoading && (
        <p className="mt-8 text-center text-xs text-muted animate-pulse tracking-widest uppercase">
          Buscando repositórios adicionais...
        </p>
      )}
    </section>
  );
}
