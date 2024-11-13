# Apoio Solidário

Esse projeto é uma aplicação desenvolvida com `VueJs (NuxtJs)` projetada para conectar instituições sem fins lucrativos (ONGs) a potenciais doadores.

## Tecnologias

- [Nuxt 3](https://nuxt.com/) / [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apoio Solidário (API)](https://github.com/apoio-solidario/apoio-solidario-back-end)
- [Element Plus (UI)](https://element-plus.org/)

## Funcionalidades

- Início: Tela mostrando informações sobre o projeto;
- Campanhas: Tela listando todas as campanhas ativas no momento;
  - Tela com detalhes sobre campanha específica;
- Eventos: Tela listando todos os eventos ativos no momento;
  - Tela com detalhes sobre evento específico;
- ONGs: Tela mostrando todas as ONGs cadastradas;
  - Tela com detalhes sobre ONG específica;
- Dashboard (ONG): Tela destinada a ONGs para fazer a criação/remoção/alteração de camapanhas e eventos;
- Dashboard (Admin): Tela destinada controle de todas as infomações do projeto;

## Uso

Passo a passo para fazer o projeto funcionar localmente:

### Requisitos

- Instale o [NodeJs v18](https://nodejs.org/pt/download/package-manager) ou maior;
- Instale o [VSCode](https://code.visualstudio.com/) com a extensão do [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

### Preparação

Certifique-se de instalar dependências:

```bash
npm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:4312`:

```bash
npm run dev
```
