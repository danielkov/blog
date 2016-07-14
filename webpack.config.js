var debug = process.env.NODE_ENV !== 'production';

var webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './src/scripts.js',
	output: {
		path: __dirname + '/client',
		filename: 'js/scripts.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.html$/,
			loader: 'html'
		},
		{
			test: /\.sass$/,
			loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
		}]
	},
	plugins: debug ? [
		new HtmlWebpackPlugin({
			title: 'KDE Design Blog',
		}),
		new ExtractTextPlugin('css/style.bundle.css'),
	] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			sourcemap: true
		})
	]
}
