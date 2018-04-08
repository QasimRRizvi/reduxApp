var path = require('path');

var webpack = require('webpack');
var webpackCli = require("webpack-cli")

module.exports = {
	context: path.join(__dirname, 'public'),
	entry: './src/app.js',
	output: {
		filename: 'bundel.js',
		path: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},
	mode: 'development'
}