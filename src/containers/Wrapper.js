import React, { Component } from 'react';
import { GridGeneratorForm } from '../components';

class Wrapper extends Component {
  render() {
    return (
      <div className="gridster-wrapper">
        <img src="../assets/images/gridster-logo.png" className="gridster-logo"/>
        <GridGeneratorForm />
      </div>
    );
  }
}

export default Wrapper;
