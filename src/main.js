require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Wrapper } from './containers';

ReactDOM.render(
  <Provider>
    <Wrapper />
  </Provider>,
  document.getElementById('app')
)
