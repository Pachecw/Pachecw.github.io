import type { Project } from '../types'

// Edite este arquivo para atualizar os projetos do site.
// Não é preciso mexer em nenhum componente para trocar o conteúdo.
export const projects: Project[] = [
  {
    id: 'estoque-usuarios',
    title: 'Plataforma Web de Gerenciamento de Estoque e Usuários',
    period: 'Projeto pessoal',
    stack: ['Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Sistema de controle de acesso e movimentação de inventário, com contas de usuário em diferentes níveis de permissão.',
    highlights: [
      'Criação de contas com controle de acesso granular por nível de usuário',
      'CRUD completo para catalogação de armazém e movimentação de inventário',
      'Modelagem de tabelas e queries relacionais em MySQL',
    ],
  },
  {
    id: 'coleta-feedbacks',
    title: 'Sistema de Coleta de Feedbacks e Acompanhamento de Projetos',
    period: 'Projeto pessoal',
    stack: ['Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description:
      'Fluxo de triagem de sugestões com transição de estados e acompanhamento dos projetos derivados delas.',
    highlights: [
      'Lógica de triagem com estados: Em análise, Aprovado, Reprovado',
      'Módulo para vincular projetos às recomendações aprovadas',
      'Estrutura de dados relacional para o histórico completo da plataforma',
    ],
  },
  {
    id: 'terceiro-projeto',
    title: 'Adicione seu terceiro projeto aqui',
    period: '—',
    stack: ['?'],
    description:
      'Vaga reservada para o seu terceiro projeto — pode ser um desafio técnico, um trabalho da faculdade ou algo novo.',
    highlights: ['Substitua este objeto em src/data/projects.ts pelo projeto real'],
    placeholder: true,
  },
]
