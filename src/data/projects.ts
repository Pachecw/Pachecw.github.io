import type { Project } from '../types'


export const projects: Project[] = [
  {
    id: 'estoque-usuarios',
    title: 'Plataforma Web de Gerenciamento de Estoque e Usuários',
    period: 'Projeto acadêmico - Trio',
    stack: ['Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Sistema de controle de acesso e movimentação de inventário, com contas de usuário em diferentes níveis de permissão.',
    highlights: [
      'Criação de contas com controle de acesso granular por nível de usuário',
      'CRUD completo para catalogação de armazém e movimentação de inventário',
      'Modelagem de tabelas e queries relacionais em MySQL',
    ],
    
    repoUrl: 'https://github.com/almeidaaaaaaaa/UTFPR-COMPT-1',
  },
  {
    id: 'coleta-feedbacks',
    title: 'Sistema de Coleta de Feedbacks e Acompanhamento de Projetos',
    period: 'Projeto acadêmico - Grupo',
    stack: ['Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Fluxo de triagem de sugestões com transição de estados e acompanhamento dos projetos derivados delas.',
    highlights: [
      'Lógica de triagem com estados: Em análise, Aprovado, Reprovado',
      'Módulo para vincular projetos às recomendações aprovadas',
      'Estrutura de dados relacional para o histórico completo da plataforma',
    ],
    
    repoUrl: 'https://github.com/almeidaaaaaaaa/UTFPR-Competencia-3',
  },
  {
    id: 'projeto-node',
    title: 'Streaming de Vídeos (estilo YouTube) — Back-end',
    period: 'Projeto acadêmico - Dupla',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'express-session', 'dotenv'],
    description:
      'API REST para uma plataforma de streaming de vídeos, com autenticação por sessão, cadastro de usuários, vídeos e playlists.',
    highlights: [
      'autenticação por sessão',
      'CRUD de vídeos/playlists',
      'persistência em MongoDB via variáveis de ambiente'
    ],
    repoUrl: 'https://github.com/VictorArxujo/back_end_project',
  },
]
