import '@babel/polyfill';
import debug from 'debug';
import React from 'react';
import {render} from 'react-dom';

import App from './App';

function renderApp() {
  const containerElement = document.createElement('div');
  document.body.appendChild(containerElement);
  render(<App/>, containerElement);
}

if (module.hot) {
  module.hot.accept('./App', renderApp);
}
renderApp();

