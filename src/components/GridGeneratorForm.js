import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';

import {
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';


class GridGeneratorForm extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.gridster !== nextProps.gridster;
  }

  handleGenerateGrid = (event) => {
    event.preventDefault();
    const { generateGrid } = this.props.gridsterActionCreators;
    generateGrid();
  }

  handleUpdateRowCount = (event) => {
    event.preventDefault();
    const { updateRowCount } = this.props.gridsterActionCreators;
    // TODO: ok this is a bit nasty but it enforces the validation on the inputs
    const value = event.target.value < 1 ? 1 : event.target.value > 10 ? 10 : event.target.value;
    updateRowCount(value);
  }

  handleUpdateColumnCount = (event) => {
    event.preventDefault();
    const { updateColumnCount } = this.props.gridsterActionCreators;
    // TODO: ok this is a bit nasty but it enforces the validation on the inputs
    const value = event.target.value < 1 ? 1 : event.target.value > 10 ? 10 : event.target.value;
    updateColumnCount(value);
  }

  render() {
    const { rowCount, colCount } = this.props.gridster;
    return (
      <div className="gridster-generator-form">
        <div className="row">
          <Form inline>
            <FormGroup>
              <label>Rows</label>
              <FormControl
                value={rowCount}
                max={10}
                onChange={this.handleUpdateRowCount}
                type="number" />
            </FormGroup>
            <span className="multiplier-symbol">{' x '}</span>
            <FormGroup>
              <label>Columns</label>
              <FormControl
                value={colCount}
                max={10}
                onChange={this.handleUpdateColumnCount}
                type="number" />
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

const mapStateToProps = (state) => ({
  gridster: state.gridster,
});

const mapDispatchToProps = (dispatch) => ({
  gridsterActionCreators: bindActionCreators(actions.gridster, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(GridGeneratorForm);

