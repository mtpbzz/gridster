import React, { Component, PropTypes } from 'react';

import {
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';


class GridGeneratorForm extends Component {

  handleGenerate = (event) => {
    console.log('generate the grid now plz');
  }

  render() {
    return (
      <div className="gridster-generator-form">
        <div className="row">
          <FormGroup>
            <div className="col-md-2">
              <label>Rows</label>
              <FormControl value={4} max={10} type="number" />
            </div>
            <div className="col-md-1">{ ' X ' }</div>
            <div className="col-md-2">
              <label>Columns</label>
              <FormControl value={4} max={10} type="number" />
            </div>
            <div className="col-md-4">
              <Button bsStyle="primary" onClick={this.handleGenerate}>Generate</Button>
            </div>
          </FormGroup>
        </div>
      </div>
    );
  }
}


export default GridGeneratorForm;
