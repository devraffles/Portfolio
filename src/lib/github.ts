import { Project } from '@/types';

export async function fetchGithubRepos(username: string): Promise<Project[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    const repos = await response.json();

    const blacklist = ['devraffles', 'portfolio', 'customerboardanalizis', 'don-napoli'];

    return repos
      .filter((repo: any) => {
        const isFork = repo.fork;
        const nameLower = repo.name.toLowerCase();
        const isBlacklisted = blacklist.some(term => nameLower.includes(term));
        return !isFork && !isBlacklisted;
      })
      .map((repo: any, index: number) => {
        const title = repo.name
          .split('-')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        const project: Project = {
          id: repo.name,
          slug: repo.name,
          title: title,
          description: repo.description || 'No description provided.',
          status: 'completed', // Default for public repos
          tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean),
          links: [
            { label: 'GitHub', url: repo.html_url, type: 'github' }
          ],
          order: index + 100, // Put them after manual projects
          isGithubRepo: true,
          caseStudy: {
            problem: repo.description || 'Este projeto foi desenvolvido como parte do meu portfólio no GitHub.',
            solution: `O repositório ${repo.name} contém a implementação completa utilizando ${repo.language || 'tecnologias modernas'}.`,
            architecture: `Linguagem principal: ${repo.language || 'N/A'}. Visite o repositório para mais detalhes sobre a estrutura de arquivos e dependências.`,
            results: [
              `Repositório público disponível no GitHub`,
              `Escrito em ${repo.language || 'diversas tecnologias'}`,
              `Última atualização em ${new Date(repo.updated_at).toLocaleDateString('pt-BR')}`
            ]
          }
        };

        if (repo.homepage) {
          project.links.push({ label: 'Live Demo', url: repo.homepage, type: 'web' });
        }

        return project;
      });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
