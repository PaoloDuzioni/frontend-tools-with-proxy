var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Project Setup, edit as you need
const jsPath = './src/js';
const cssPath = './src/scss';
const outputPath = './dist';
const localDomain = 'http://localhost:8888/your-site';

// Configs
module.exports = {
    entry: [jsPath + '/app.js', cssPath + '/app.scss'],
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: 'js/app.js',
    },
    plugins: [
        // Extract CSS from SCSS
        new MiniCssExtractPlugin({
            filename: 'css/app.css',
        }),
        // BrowserSync
        new BrowserSyncPlugin({
            proxy: localDomain,
            files: [
                outputPath + '/*.css',
                outputPath + '/*.js',
                './**/*.html',
                './**/*.php',
            ],
            notify: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s?[c]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?-url',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
