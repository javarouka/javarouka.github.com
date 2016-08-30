import dotenv from 'dotenv'
import Express from 'express'
import webpack from 'webpack'
import webpackConfig from './webpack.config.dev.js';

dotenv.load();

const compiler = webpack(webpackConfig);
const host = process.env.DEV_HOST || 'localhost';
const port = process.env.DEV_PORT || 3002;

const serverOptions = {
	contentBase: 'http://' + host + ':' + port,
	hot: true,
	progress: true,
	watch: true,
	publicPath: webpackConfig.output.publicPath,
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
	stats: {
		colors: true
	}
};

const app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, err => {
	if (err) {
		console.error(err);
	} else {
		console.info('Webpack development server progress... %s', webpackConfig.output.publicPath);
	}
});