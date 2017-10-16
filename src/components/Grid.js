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
    const { rows } = this.props.gridster;
    const rowsList = [...Array(rows).keys()];
    return rowsList.map((row, i) => {
      return <GridRow key={`row-${i}`} idx={i} />
    });
  }

  render() {
    const { rows, cols } = this.props.gridster;
    return (
      <div className="gridster-grid" style={{ height: `${(rows * 48) + 1}px`, width: `${(cols * 48)}px` }} >
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
