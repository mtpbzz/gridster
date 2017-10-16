import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GridSquare } from './';
import actions from '../actions';


class GridRow extends Component {

  renderSquares() {
    const { gridster: { grid, rows, cols }, idx } = this.props;
    const colsArray = [...Array(cols).keys()];
    return colsArray.map((col, i) => {
      const squareProps = grid ? grid[idx][i] : {};
      return <GridSquare { ...squareProps } row={idx} col={i}  key={`square-${idx}-${i}`}/>
    });
  }

  render() {
    const { idx, height } = this.props;
    return (
      <div className="gridster-grid-row" key={`gridster-row-${idx}`} style={{ height: `${height}px` }}>
        {this.renderSquares()}
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

export default connect(mapStateToProps, mapDispatchToProps)(GridRow);
