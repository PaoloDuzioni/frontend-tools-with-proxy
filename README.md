# Front-end tools for local servers with proxy

Front-end tools (powered by webpack 5) to make your development easier when working on a local server as XAMPP or MAMP.

This starter dont create any index.html file but only JS and CSS files in a dist folder. In this way you can choose to embed those compiled files wherever you want, even to a index.php file.

## What comes with those tools?

- Dev server with live reload
- Babel
- SCSS with vendor prefixing
- Build for production

## Install

To start run `npm install` on the root of this folder to install all needed dependencies.

## Development

Start the development server with: `npm run dev`.

This will even create a `dist` folder containing your compiled files, and will keep watching for changes on `JS`, `CSS`, `HTML` and `PHP` files.

## Production

To build and optimized version of your `JS` and `CSS` files for production run: `npm run prod`

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
