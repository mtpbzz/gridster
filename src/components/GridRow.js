import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';


class GridRow extends Component {

  renderSquares() {
    const { colCount } = this.props;
    const cols = [...Array(colCount).keys()];

    return cols.map((col, i) => {
      return 'Square'
    });

  }

  render() {
    const { idx } = this.props;
    return (
      <div className="gridster-grid-row" key={`gridster-row-${idx}`}>
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
