import React, { Component, PropTypes } from 'react';

import {
  Form,
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
          <Form inline>
            <FormGroup>
              <label>Rows</label>
              <FormControl value={4} max={10} type="number" />
            </FormGroup>
            {' x '}
            <FormGroup>
              <label>Columns</label>
              <FormControl value={4} max={10} type="number" />
            </FormGroup>
            <FormGroup>
              <Button bsStyle="primary" onClick={this.handleGenerate}>Generate</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}


export default GridGeneratorForm;
