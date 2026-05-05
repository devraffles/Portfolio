import { Certification } from '@/types';

export interface CertificationExtended extends Certification {
  description?: string;
  url?: string;
  hours?: string;
}

export const certificationsData: CertificationExtended[] = [
  {
    id: 'cert-udemy-1',
    name: 'Projeto Completo: Node.js, React, TypeScript',
    organization: 'Udemy',
    year: 2024,
    description: 'Full-stack project with Node.js backend, React frontend, and TypeScript',
    url: '/certifications/Certificado_Back-end_Node.pdf',
    hours: '25.5 horas',
  },
  {
    id: 'cert-alura-1',
    name: 'Imersão Dev Back-End',
    organization: 'Alura + Google Gemini',
    year: 2024,
    description: 'Backend development immersion with AI-powered curriculum',
    hours: '4 horas',
  },
  {
    id: 'cert-alura-2',
    name: 'Imersão Inteligência Artificial (2ª Ed.)',
    organization: 'Alura + Google Gemini',
    year: 2024,
    description: 'AI immersion course exploring modern machine learning applications',
    url: '/certifications/Certificado_Imersao_Inteligencia_Artificial_com_a_Google.pdf',
    hours: '6 horas',
  },
  {
    id: 'cert-alura-3',
    name: 'Imersão Cloud DevOps',
    organization: 'Alura',
    year: 2024,
    description: 'Cloud infrastructure and DevOps practices (Docker, CI/CD, IaC)',
    hours: '8 horas',
  },
  {
    id: 'cert-hashtag',
    name: 'Jornada Python',
    organization: 'Hashtag Treinamentos',
    year: 2023,
    description: 'Python programming journey covering fundamentals and practical applications',
    url: '/certifications/Certificado-Hashtag-Python.pdf',
    hours: '8 horas',
  },
  {
    id: 'cert-pizzaria',
    name: 'Projeto Pizzaria - Desenvolvimento de Sistema',
    organization: 'UniMetrocamp Wyden',
    year: 2023,
    description: 'Complete restaurant ordering system development (mobile, admin, web)',
    url: '/certifications/Certificado-Pizzaria.pdf',
    hours: '40 horas',
  },
];