const
	_ = require('lodash'),
	Express = require('express'),
	fs = require('fs'),
	host = process.env.HOST || 'localhost',
	path = require('path'),
	port = Number(process.env.PORT),
	webpack = require('webpack'),
	webpackConfig = require('../webpack.config');
	settings = require('./routes/settings');

// Alphabetical sorting of vars with dependencies
const
	app = new Express(),
	compiler = webpack(webpackConfig)

app.use(require('connect-history-api-fallback')({
	rewrites: [{
		from: /^\/API\/.*$/,
		to: function(context) { return context.parsedUrl.pathname; }
	}]
}));

app.use(require('webpack-dev-middleware')(compiler, {
	contentBase: `http://${host}:${port}`,
	headers: {'Access-Control-Allow-Origin': '*'},
	hot: false,
	inline: true,
	lazy: false,
	noInfo: false,
	publicPath: webpackConfig.output.publicPath,
	quiet: false,
	stats: {colors: true}
}));

app.use('/API', settings)

app.listen(port, function(err) {
	if(err)
		throw err;

	console.info('==> Dev server listening: http://'+ host +':' + port);
});
