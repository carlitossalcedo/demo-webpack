var path = require('path');

module.exports = {
	context: path.resolve('js'),
	entry: [ "./utils", "./app" ],
	
	output: {
		path: path.resolve('build/js/'),
		publicPath: path.resolve('/public/source/js/'),
		filename: "bundle.js"
	},
	
	devtool: "source-map",

	devServer: {
		contentBase: 'public'
	},

	watch: false,

	module: {
		loaders: [
			{
				test: /\.(es6|js)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}