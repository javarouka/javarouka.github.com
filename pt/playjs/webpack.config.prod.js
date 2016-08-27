import dotenv from 'dotenv'
import path from 'path'
import webpack from 'webpack'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

dotenv.load();

const VERBOSE = process.argv.includes('--verbose');
const basePath = path.resolve(__dirname, './src');

export default {

	devtool: 'source-map',
	context: basePath,
	entry: path.join(basePath, 'main.js'),

	stats: {
		colors: true,
		reasons: true,
		hash: VERBOSE,
		version: VERBOSE,
		timings: true,
		chunks: VERBOSE,
		chunkModules: VERBOSE,
		cached: VERBOSE,
		cachedAssets: VERBOSE
	},

	// 번들링 후 파일을 생성하는 옵션
	output: {
		path: './build',
		filename: '[name].bundle.js'
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
				test: /\.(txt|hbs)/,
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

		new webpack.EnvironmentPlugin([
			"NODE_ENV"
		]),

		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
}