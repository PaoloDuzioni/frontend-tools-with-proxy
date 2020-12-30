# Front-end tools for local servers with proxy

Front-end tools (powered by webpack 5) to make your development easier when working on a local server as XAMPP or MAMP.

This starter **will not** create any index file but only `.js` and `.css` files in a `dist` folder (or as you decide to name it). In this way you can embed those compiled files wherever you want, even to a `.php` file.

## What comes with those tools?

- Dev server with live reload (browser updates on file save)
- Babel for ES6 modules and last generation JavaScript features
- SCSS with vendor prefixing
- Build for production, with minified CSS and a single minified JavaScript file.

## Install

To start run `npm install` on the root of this folder to install all needed dependencies.

## Development

Open the `webpack.config.js` file and customize the compiled folder / file names and your proxy link as you need, for example: `http://localhost/your-site`.

Once finished with the customizations, start the development server with: `npm run dev`.

This will even create a `dist` folder containing your compiled files, and will keep watching for changes on `.js`, `.css`, `.html` and `.php` files (you can even extend this list on the configurations).

## Production

To build and optimized version of your `.js` and `.css` files for production run: `npm run prod`

## Config files

- Webpack Config: `webpack.config.js`
- Babel: `babel.config.json`
- PostCSS: `postcss.config.js`

## Dependencies

### Webpack

- `webpack` - Module and assets bundler
- `webpack-cli` - Command line interface for webpack

### Plugins

- `mini-css-extract-plugin` - extraction of css from scss files
- `browser-sync-webpack-plugin` - Dev server with live reload
- `clean-webpack-plugin` - Remove/clean build folders from old data

### Loaders

#### SCSS and autoprefixing

- `css-loader` - for loading CSS files as modules
- `sass-loader` - for compile SCSS files and loading SCSS files with `import` in JS.
- `sass` - the sass core library
- `postcss-loader`, `postcss-preset-env` - automatically handles vendor prefixing and CSS reset

#### Babel

- `babel-loader` - loader for webpack
- `@babel/core` - the actual core library
- `@babel/preset-env` - for compiling modern Javascript down to ES5
- `@babel/cli` - used to compile files from the command line
