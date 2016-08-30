import dotenv from 'dotenv'
import path from 'path'
import webpack from 'webpack'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

dotenv.load();

const VERBOSE = process.argv.includes('--verbose');
const basePath = path.resolve(__dirname, '../src');
const outPath = path.resolve(__dirname, '../build');

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
		filename: 'bundle.js'
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
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},

			//{
			//	test: /\.scss/,
			//	loader: ExtractTextPlugin.extract('style', 'style!css!postcss-loader!resolve-url!sass')
			//},

			{
				test: /\.(html|txt|eot|ttf)/,
				loader: 'raw-loader'
			},

			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url?limit=10000&name=[name].[ext]'
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

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),

		//new CleanWebpackPlugin([
		//	outPath + '/index.html',
		//	outPath + '/bundle.js',
		//	outPath + '/bundle.js.map',
		//	outPath + '/style.bundle.css',
		//	outPath + '/style.bundle.css.map'
		//], {
		//	root:  path.resolve(__dirname, '../')
		//}),

		//new CopyWebpackPlugin([
		//	{ from: outPath, to: path.resolve(__dirname, '../') }
		//]),

		new ExtractTextPlugin('./style.bundle.css'),

		new HtmlWebpackPlugin({
			template: basePath + '/template/index.html'
		}),

		new webpack.EnvironmentPlugin([
			"NODE_ENV"
		]),

		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
}