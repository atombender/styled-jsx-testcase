import React from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

import Thing from './Thing';
import Thing2 from './Thing2';
import Thing3 from './Thing3';

class App extends React.Component {
  render() {
    return (
      <div>
        <Thing />
        <Thing2 />
        <Thing3 />
      </div>
    );
  }
}

export default hot(module)(App);
