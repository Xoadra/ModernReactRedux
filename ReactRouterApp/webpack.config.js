



const HtmlWebpackPlugin = require( 'html-webpack-plugin' )



module.exports = {
	module: {
		rules: [
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin( {
			filename: 'index.html',
			template: 'public/index.html'
		} )
	],
	devServer: {
		contentBase: 'build',
		historyApiFallback: true,
		open: false,
		port: 3000,
		stats: {
			children: false,
			entrypoints: false,
			modules: false
		}
	},
	stats: {
		children: false,
		entrypoints: false,
		modules: false
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build',
		publicPath: '/'
	}
}


