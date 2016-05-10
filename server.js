const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const nodemon = require('nodemon');

const app = new (require('express'))();
const port = 8080;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, lazy: true, publicPath: config.output.publicPath }));

app.use((req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(
  port,
  (err) => err ? console.error(err) : console.info('Listening on port %s. Open https://localhost:%s', port, port)
);

nodemon({
  script: 'api.server.js',
  ext: 'js',
  watch: [
    'api.server.js',
    'backend/**/*.js'
  ],
  "ignore": [
    '.git',
    'node_modules/**/node_modules',
    '.DS_Store',
    'npm-debug.log',
    'dist',
  ]
});
