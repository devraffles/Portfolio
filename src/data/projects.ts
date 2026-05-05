import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'fit-ia',
    slug: 'fit-ia',
    number: '001',
    title: 'FIT.IA',
    subtitle: 'Coach de treinos com inteligência artificial generativa',
    description:
      'Plataforma de fitness que gera treinos personalizados via LLMs. O back-end em Fastify + TypeScript expõe uma API robusta com autenticação e integração a modelos de linguagem. Front-end em Next.js + Tailwind CSS. Gerenciado com Jira em metodologia ágil, com testes automatizados com Jest e containerização Docker para garantir rastreabilidade e escalabilidade.',
    challenge:
      'Gerenciar escopo e complexidade de um produto completo com IA generativa dentro de um prazo acadêmico — tomando decisões de arquitetura que não comprometam a evolução do sistema.',
    status: 'development',
    tags: ['Node.js', 'Fastify', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Docker', 'Jest', 'LLM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/unimetrocamp-startupclass/LTD-2026-1-011-FIT.IA', type: 'github' },
    ],
    order: 1,
    caseStudy: {
      problem:
        'Aplicativos de fitness genéricos não adaptam treinos ao contexto individual do usuário. Pessoas com limitações físicas ou objetivos específicos recebem planos padronizados que ignoram suas necessidades.',
      solution:
        'API Fastify com integração a LLMs que gera treinos contextuais. O histórico de sessão mantém coerência na conversa. Docker Compose para ambiente de desenvolvimento com banco de dados local.',
      architecture:
        'Usuário → Next.js Front-end → Fastify API → LLM Provider → Resposta de treino. Testes Jest com cobertura. Containerização Docker para DevEx.',
      results: [
        'API REST tipada com Fastify + TypeScript',
        'Testes automatizados com Jest',
        'Containerização Docker para desenvolvimento local',
        'Gerenciamento de contexto de conversa com LLMs',
      ],
    },
  },
  {
    id: 'localiza-ja',
    slug: 'localiza-ja',
    number: '002',
    title: 'Localiza-Já',
    subtitle: 'Sistema de rastreamento logístico com IoT em tempo real',
    description:
      'Liderei o back-end de um sistema logístico com APIs RESTful em Flask/Python integradas a dispositivos IoT físicos. O maior desafio foi garantir comunicação em tempo real entre os dispositivos e o banco de dados PostgreSQL com consistência e baixa latência. Entregue com dashboard interativo em TypeScript com visualização de dados em mapas e testes automatizados.',
    challenge:
      'Integração de dispositivos IoT físicos com sincronização em tempo real — o que exigiu decisões precisas de arquitetura para manter consistência dos dados sem degradar performance.',
    status: 'completed',
    tags: ['Python', 'Flask', 'PostgreSQL', 'TypeScript', 'IoT', 'REST API', 'Testes automatizados'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Localiza-Ja/Localiza-Ja', type: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7401434674234834945/', type: 'linkedin' },
    ],
    order: 2,
    caseStudy: {
      problem:
        'Sistemas logísticos tradicionais dependem de atualizações manuais de posição. Sem rastreamento em tempo real, a operação perde eficiência e a visibilidade sobre a frota é limitada.',
      solution:
        'Flask como backend de IoT pela simplicidade de integração com bibliotecas Python de hardware. PostgreSQL para consistência de dados. Dashboard TypeScript para visualização em mapas.',
      architecture:
        'Dispositivo ESP32 → MQTT/HTTP → Flask API → PostgreSQL → Dashboard TypeScript. Comunicação em tempo real com baixa latência.',
      results: [
        'Comunicação em tempo real com dispositivos IoT',
        'Dashboard interativo com visualização em mapas',
        'APIs RESTful com consistência de dados',
        'Testes automatizados garantindo confiabilidade',
      ],
      socialProof:
        'Projeto com visibilidade no LinkedIn — posts da equipe demonstram impacto real e adoção do sistema.',
    },
  },
  {
    id: 'don-napoli',
    slug: 'don-napoli',
    number: '003',
    title: 'Don Napoli',
    subtitle: 'Ecossistema completo de pedidos para restaurante',
    description:
      "Arquitetei um ecossistema de 3 camadas: app mobile (React Native), painel admin (Next.js) e site web — todos conectados por uma API centralizada com JWT, Prisma ORM e Clean Code. Banco de dados PostgreSQL com princípios de arquitetura pensados para operação real.",
    challenge:
      'Arquitetar autenticação e estado compartilhado entre três plataformas distintas (mobile, admin, web) mantendo consistência e segurança em cada camada.',
    status: 'maintenance',
    tags: ['Node.js', 'React Native', 'Next.js', 'Prisma', 'JWT', 'PostgreSQL'],
    links: [
      { label: 'Back-end', url: 'https://github.com/devraffles/Don-Napoli-Pizzaria-Back-End', type: 'github' },
      { label: 'Front-end', url: 'https://github.com/devraffles/Don-Napoli-Pizzaria-Front-End', type: 'web' },
      { label: 'Mobile', url: 'https://github.com/devraffles/Don-Napoli-Pizzaria-Mobile', type: 'mobile' },
    ],
    order: 3,
    caseStudy: {
      problem:
        'Restaurantes dependem de processos manuais para gestão de pedidos. Sem integração entre canais (mesa, delivery, balcão), a operação fica fragmentada e propensa a erros.',
      solution:
        'API centralizada com JWT para autenticação compartilhada. Prisma ORM para type-safe queries e migrations automáticas. Três front-ends consumindo a mesma API.',
      architecture:
        '3 Repos: Mobile (React Native) + Admin (Next.js) + Web → API Central (Node.js + Prisma + JWT) → PostgreSQL. Seed de dados para ambiente de desenvolvimento.',
      results: [
        '3 plataformas conectadas por API centralizada',
        'Autenticação JWT compartilhada entre camadas',
        'Prisma ORM com migrations automáticas',
        'Arquitetura preparada para operação real',
      ],
    },
  },
];
