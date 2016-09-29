import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import rewrite from 'express-urlrewrite'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config.dev.js'

dotenv.load();

const compiler = webpack(webpackConfig);
const port = process.env.DEV_PORT || 3002;

const app = new Express();

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
	stats: {
		colors: true
	}
}));

app.use(webpackHotMiddleware(compiler));
app.use(Express.static(path.resolve(__dirname, '../')));

app.listen(port, err => {
	if (err) {
		console.error(err);
	} else {
		console.info('Webpack development server started %s', webpackConfig.output.publicPath);
	}
});