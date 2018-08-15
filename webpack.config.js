module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module : {
		rules: [
			{
				test: '/\.jsx?$/',
				loader: 'babel-loader',
				exclude: __dirname + '/node_modules/'
			}
		]
	}
}