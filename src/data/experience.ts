import { Experience } from '@/types';

export const experienceData: Experience[] = [
  {
    id: 'vip-ti',
    role: 'Estagiário de TI',
    company: 'Grupo VIP',
    location: 'Campinas, SP',
    startDate: 'Ago/2025',
    endDate: 'Mai/2026',
    description:
      "Implementei o sistema m'AGILE em colaboração com a Mast Soluções & Tecnologia, automatizando rotinas operacionais e eliminando retrabalho nas equipes internas. Prestei suporte técnico proativo para reduzir o atrito na adoção do sistema, acelerando a integração entre setores e padronizando fluxos de processos internos.",
    current: true,
  },
  {
    id: 'mast-support',
    role: 'Estagiário de Suporte Técnico',
    company: 'Mast Soluções & Tecnologia',
    location: 'Campinas, SP',
    startDate: 'Mai/2025',
    endDate: 'Jul/2025',
    description:
      "Desenvolvi a integração entre Monday.com e m'AGILE, substituindo o Bitrix24 e automatizando fluxos que eliminaram falhas manuais recorrentes. Solucionei incidentes de suporte N1 e colaborei com o setor comercial na automação de acompanhamento de leads.",
    impact: '50% redução no tempo médio de execução de tarefas operacionais (60 → 30 min)',
  },
];
