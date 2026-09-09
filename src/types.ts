export interface Project {
  id: string
  title: string
  period: string
  stack: string[]
  description: string
  highlights: string[]
  /** Marque como true em vagas ainda não preenchidas de verdade. */
  placeholder?: boolean
  /** URL do repositório no GitHub. Se ausente, o card não vira link. */
  repoUrl?: string
}

export interface SkillCategory {
  name: string
  items: string[]
  /** Texto curto opcional ao lado do nome da categoria, ex: um nível. */
  note?: string
}

export interface Activity {
  id: string
  title: string
  period: string
  highlights: string[]
}