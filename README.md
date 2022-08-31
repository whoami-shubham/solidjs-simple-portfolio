# solidjs-simple-portfolio

Everything you need to build a Solid project, powered by [`solid-start`](https://github.com/ryansolid/solid-start/tree/master/packages/solid-start); and Tailwind

## Install dependencies

```bash

yarn install

```

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Editing Content

There is a file at `src/metaData.json` it has the text contents that is rendered on page.

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `node build`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
