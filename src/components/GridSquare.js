import React, { Component } from 'react';
import cx from 'classnames';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';

class GridSquare extends Component {

  handleClick = (event) => {
    const {
      row,
      col,
      gridsterActionCreators: { toggleSquare },
    } = this.props;
    event.preventDefault();
    toggleSquare(row, col);
  }

  checkPathForSquare() {
    const { gridster: { path }, row, col } = this.props;
    if (!path) return false;
    const paths = path.filter(p => {
      return p.col === col && p.row === row;
    })
    return paths.length > 0;
  }

  classes() {
    const { start, end, active } = this.props;
    return cx('gridster-grid-square', {
      start,
      end,
      active,
      path: this.checkPathForSquare() && !start && !end
    });
  }

  render() {
    return <a className={this.classes()} onClick={this.handleClick} />
  }
}

const mapStateToProps = (state) => ({
  gridster: state.gridster,
});

const mapDispatchToProps = (dispatch) => ({
  gridsterActionCreators: bindActionCreators(actions.gridster, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridSquare);
