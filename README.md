This seed repo serves as Markerfarm project running with Angular 2 and TypeScript fast. Using a [Webpack 2](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 ssh://git@bitbucket.phibred.com:7999/thes/markerfarmweb.git

# change directory to our repo
cd markerfarm

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [TypeScript](#typescript)
 * [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
npm run webdriver:update
# this will start a test server and launch Protractor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test JIT 
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run e2e:live
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.1.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome 

The included `.vscode` automatically connects to the webpack development server on port `3000`.

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

