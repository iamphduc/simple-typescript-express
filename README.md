# Simple Typescript Express

As a TypeScript beginner, I found that [TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter) is a bit overwhelming for a new guy like me. So I decided to make a simple one to play around.

Technology: TypeScript, Express, Pug, and Sass.

## Running the app

- To run in production mode

```bash
$ npm run build
$ npm start
```

- To run in develepment mode

```
$ npm run dev
```

## Structure

```
├─ .editorconfig
├─ .gitignore
├─ .prettierrc
├─ copy-assets.ts                  <----- Shelljs script to copy images from src to dist
├─ package-lock.json
├─ package.json
├─ README.md
├─ tsconfig.json
├─ src
│  ├─ app.ts
│  ├─ configs
│  │  └─ view-engine.ts
│  ├─ controllers
│  │  ├─ api.controller.ts
│  │  └─ home.controller.ts
│  ├─ middlewares
│  │  └─ not-found.middleware.ts
│  ├─ public
│  │  ├─ img
│  │  │  ├─ express.png
│  │  │  ├─ pug.png
│  │  │  ├─ sass.png
│  │  │  └─ typescript.png
│  │  ├─ js
│  │  │  └─ main.ts
│  │  └─ scss
│  │     ├─ 404.scss
│  │     └─ main.scss
│  ├─ routes
│  │  ├─ api.routes.ts
│  │  ├─ home.routes.ts
│  │  └─ index.ts
│  └─ services
│     └─ api.service.ts
└─ views                            <----- Views is outside so that both src and dist can use
   ├─ 404.pug
   ├─ about.pug
   ├─ home.pug
   ├─ includes
   │  ├─ footer.pug
   │  └─ header.pug
   └─ layouts
      └─ main.pug
```
