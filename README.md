# Portfólio — Gustavo Oliveira Pacheco Rocha

Escopo inicial do site de portfólio: React + TypeScript, sem backend e sem
banco de dados (conteúdo estático, editado direto no código). Pensado para
publicar no GitHub Pages usando a URL `pachecw.github.io`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Estrutura

```
src/
  data/projects.ts   -> conteúdo dos cards de projeto
  data/subjects.ts   -> lista de matérias em "Formação"
  components/        -> um componente por seção da página
  index.css          -> toda a identidade visual (cores, tipografia, layout)
```

Pra atualizar o conteúdo do site, normalmente basta editar os arquivos em
`src/data/`, sem precisar mexer nos componentes.

Pontos para revisar antes de publicar:
- Em `src/data/projects.ts`, troque o projeto placeholder (`terceiro-projeto`)
  pelo seu terceiro projeto real.
- Em `src/data/projects.ts`, troque os valores de `repoUrl`
  (`SEU-REPOSITORIO-AQUI`) pelas URLs reais dos repositórios no GitHub. Um
  projeto só vira card clicável quando tem `repoUrl` preenchido — sem esse
  campo, o card fica normal (não clicável).
- Em `src/components/Contact.tsx`, troque a URL do LinkedIn
  (`SEU-USUARIO-AQUI`) pela sua de verdade.

## Publicando no GitHub Pages

1. Crie um repositório chamado exatamente `pachecw.github.io` (repositórios
   com esse padrão de nome são publicados automaticamente na raiz do
   domínio, sem precisar de path extra).
2. Suba este projeto para a branch `main` desse repositório.
3. No GitHub, vá em **Settings > Pages** e em "Build and deployment" escolha
   **Source: GitHub Actions**.
4. O workflow em `.github/workflows/deploy.yml` já está configurado: a cada
   push na `main`, ele builda o projeto (`npm run build`) e publica a pasta
   `dist` automaticamente.
5. Depois do primeiro deploy, o site fica disponível em
   `https://pachecw.github.io`.

## Próximos passos possíveis

- Trocar os dados estáticos por um arquivo JSON separado, se quiser praticar
  fetch de dados no front.
- Adicionar testes automatizados (Playwright/Cypress) como próximo passo de
  aprendizado, aproveitando sua experiência com QA.
- Se algum dia quiser um projeto com backend de verdade (Spring Boot,
  PostgreSQL etc.), vale ser um projeto à parte, linkado aqui como um dos
  cards de "Projetos" — GitHub Pages não roda servidor.
