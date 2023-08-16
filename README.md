# Cine-Tag - Página para indicação dos melhores filmes já produzidos.

A aplicação utiliza a contextApi para compartilhar seus filmes favoritos entre as diferentes páginas e visualizar seus respectivos trailers. O projeto objetiva utilizar o máximo das funcionalidades que o React dispõe para proporcionar a melhor experiência ao usuário.

## :hammer: Funcionalidades do projeto.

- `Favoritar filmes`: É possível favoritar qualquer filme desejado e visualiza-lo em sua página de "Favoritos".
- `Assistir trailer`: Todos os filmes disponíveis contam com seus respectivos trailers e podem ser acessados ao clicar na imagem do card em qualquer página da aplicação. 
- `Api pessoal`: Os dados de cada card como, assim como a URL para os vídeos é fornecida através de uma api pessoal que pode ser acessada através de https://github.com/pnnog/cine-tag-api

## :white_check_mark: Tecnologias utilizadas

- React
- React Router Dom
  - Nested Routes
  - Hooks
- Context Api
- Tailwind CSS
- Tailwind Variants
- Vite

## :open_file_folder: Acesso ao projeto

Você pode acessar o código fonte do projeto original ou baixá-lo

## :checkered_flag: Abrir e rodar o projeto

- Baixe os arquivos .zip do projeto no botão "CODE"
- Instale as dependências do client com `yarn`
- Rode o client com `yarn dev`

## :checkered_flag: Outras informações

### Como buildar o projeto para PROD?

```sh
yarn build
```

### Como fazer deploy do projeto?

```sh
npx vercel ./dist --prod

ou 

npx vercel -e NODE_ENV=production (com variáveis de ambiente)
```

> Lembre de logar ou criar sua conta em https://vercel.com ou através do CLI e ter um repositório git inicializado.

## :globe_with_meridians: URL do projeto em produção

https://cine-tag-tau.vercel.app 
