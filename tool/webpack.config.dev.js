import dotenv from 'dotenv'
import path from 'path'
import webpack from 'webpack'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin';

dotenv.load();

const basePath = path.resolve(__dirname, '../src');
const host = process.env.DEV_HOST || 'localhost';
const port = process.env.DEV_PORT || 1980;

export default {

	devtool: 'heap-module-eval-source-map',
	context: basePath,

	entry: [
		'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
		'webpack/hot/only-dev-server',
		path.join(basePath, 'app.js')
	],

	output: {
		path: basePath + '/build',
		filename: '[name].bundle.js',
		publicPath: '/build'
	},

	module: {
		loaders: [

			{
				test: /\.(js|jsx)?$/,
				include: [
					basePath
				],
				exclude: [ /node_modules/ ],
				loader: 'babel?cacheDirectory'
			},

			{
				test: /\.css/,
				loader: 'style!css'
			},

			{
				test: /\.scss/,
				loader: 'style!css!postcss-loader!resolve-url!sass'
			},

			{
				test: /\.(html|txt|eot|ttf)/,
				loader: 'raw-loader'
			},

			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url?limit=10000'
			}
		]
	},

	postcss() {
		return [precss, autoprefixer];
	},

	resolve: {

		root: [
			basePath
		],

		extensions: [ '', '.js' ]
	},

	node: {
		fs: "empty"
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: basePath + '/views/index.html'
		}),

		new webpack.EnvironmentPlugin([
			"NODE_ENV"
		]),

		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}