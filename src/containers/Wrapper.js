import React, { Component } from 'react';
import { Grid, GridGeneratorForm } from '../components';

class Wrapper extends Component {
  render() {
    return (
      <div className="gridster-wrapper">
        <img src="../assets/images/gridster-logo.png" className="gridster-logo"/>
        <GridGeneratorForm />
        <Grid />
      </div>
    );
  }
}

export default Wrapper;
