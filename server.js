import express from 'express';
import path from 'path';
import {createServer} from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config';

webpackConfig.devServer = {
  contentBase: path.join(__dirname, '../../public'),
  historyApiFallback: true,
  hot: true
};

let app = express();
app.set('port', process.env.PORT || 3000);
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(morgan('combined'));

let compiler = webpack(webpackConfig);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);

app.use(express.static(path.join(__dirname, '../../public')));
app.get(/^\/.*/, (req, res) => {
  res.set({'Content-Type': 'text/html; charset=utf-8'});
  res.send(
    '<!DOCTYPE html>' +
      ReactDOMServer.renderToString(
        <html lang="en">
          <head />
          <body />
          <script src={'/bundles/app.js'} />
        </html>
      )
  );
});

createServer(app).listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'));
});
