
//const nodeExternals = require('webpack-node-externals');
module.exports = {
	entry: __dirname+'/src/App.jsx',
	mode: 'production',
	target: 'node',
//	externals: [nodeExternals({importType: 'umd'})],
	output: {
		path: __dirname+'/public/js',
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env'],
							['@babel/preset-react']
						]
					}
				}
			}
		]
	}
}
