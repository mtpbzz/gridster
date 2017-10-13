import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GridRow } from './';
import actions from '../actions';


class Grid extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.gridster !== nextProps.gridster;
  }

  renderRows() {
    const { rowCount, colCount } = this.props.gridster;
    const rows = [...Array(rowCount).keys()];
    return rows.map((row, i) => {
      return <GridRow key={`row-${i}`} idx={i} colCount={colCount} />
    });
  }

  render() {
    const { rowCount, colCount } = this.props.gridster;
    return (
      <div className="gridster-grid">
       {this.renderRows()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
