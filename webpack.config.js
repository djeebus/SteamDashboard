var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/js/index.js',
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}, 
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file?name=[path][name].[hash].[ext]',
			}
		]
	},
};