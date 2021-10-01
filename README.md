# Simple Typescript Express
This project is a simple version of [TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter), which uses TypeScript, Express, Pug, and Sass.

There is no Database (Mongoose) and Testing, which makes it light and simple.

## Getting started
Check out [Project map](#project-map) to have an entire repository view.

- To build and run the project
```
npm run build
npm start
```
- To develop the project (I recommend to "build and run" the app first to make sure it works) 
```
npm run dev
```

## Why did I do this project?
As a TypeScript beginner, I looked for an example project until I found this [TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter). It's a great one which has many functions. But I think that it's a bit overwhelming for a new guy (like me), so I decided to make a simpler one to help beginners become familiar with TypeScript - Express.

## Tool used
`Node v14.16.0`, `TypeScript v4.4.3`, and `Npm v7.24.1`, worth mentioning:
- express
- pug
- sass
- shelljs
- concurrently

In my opinion, `sass` is a *must-have*. If we don't use `sass`, we'll need `shelljs` to copy /css from **src** to **dist** like /img.

## Project structure
These are *must-know* files/directories.

| Name                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| **dist**                 | Built .js code after "npm run build". This is the code you ship |
| **src**                  | Raw .ts code that will be compiled to .js in dist               |
| **views**                | Views should be outside for both src and dist code using        |
| copyAssets.ts            | Shelljs script that copies src/public/img -> dist/public/img    |
| tsconfig.json            | TypeScript config for compiling                                 |

## Npm scripts

| Npm                      | Description                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `start`                  | Runs `node dist/app.js`                                                                   |
| `dev`                    | Runs all watch tasks (TypeScript, Sass, Node) for development, exclude `copy-assets`      |
| `watch-ts`               | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed       |
| `watch-sass`             | Same as `build-sass` but continuously watches `.scss` files and re-compiles when needed   |
| `watch-node`             | Runs `nodemon dist/app.js`                                                                |
| `build`                  | Full build. Runs ALL build tasks (`build-ts`, `build-sass`, `copy-assets`)                |
| `build-ts`               | Compiles all **src** `.ts` files to `.js` files in the **dist** directory                 |
| `build-sass`             | Compiles all `.scss` files to `.css` files                                                |
| `copy-assets`            | Calls Shelljs script that copies /img to the **dist** directory                           |

## Project map
```
├── dist                          <----- Built .js code after "npm run build". This is the code you ship
├── node_modules
├── src                           <----- Raw .ts code that will be compiled to .js in dist 
│   ├── configs
│   │   └── viewEngine.ts
│   ├── controllers
│   │   ├── api.controller.ts
│   │   └── home.controller.ts
|   ├── public
|   │   ├── img
|   │   │   ├── express.png
|   │   │   ├── pug.png
|   │   │   ├── sass.png
|   │   │   └── typescript.png
|   │   ├── js
|   │   |   └── main.ts
|   │   └── scss
|   │       └── main.scss
│   ├── routess
│   |   ├── apiRouter.ts
│   |   ├── homeRouter.ts
│   |   └── index.routes.ts
|   └── app.ts
├── views                         <----- Views should be outside for both src and dist code using
|   ├── includes
|   |   ├── footer.pug
|   |   └── header.pug
|   ├── layouts
|   |   └── main.pug
|   ├── about.pug
|   └── home.pug
├── .env
├── .gitignore
├── copyAssets.ts                 <----- Shelljs script that copies src/public/img -> dist/public/img
├── package-lock.json
├── package.json
└── tsconfig.js                   <----- TypeScript config for compiling
```
