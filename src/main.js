'use strict';

require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      athing: 'itsstate',
    };
  }

  render() {
    return (
      <div className="gridster-wrapper">
        <img src="../assets/images/gridster-logo.png" className="gridster-logo"/>
        render the grid here later
      </div>
    );
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));
