import { shortestRoute } from '../utils';

const { start, end, grid } = generateGrid(10, 10);

const initialState = {
  rowCount: 10,
  colCount: 10,
  rows: 10,
  cols: 10,
  grid,
  start,
  end,
  path: {},
};

export function checkRoute(state) {
  const { grid, start, end } = state;
  const path = shortestRoute(grid, start, end);
  return { ...state, path };
}

export function generateCoords(rows, cols, min) {
  return {
    row: Math.floor(Math.random() * rows),
    col: Math.floor(Math.random() * (cols - min) + min),
  };
}

export function generateGrid(rows, cols) {
  // divide by two to make sure start is always on the left
  const start = generateCoords(rows, (cols / 2), 0);
  // Pass min value to ensure end is always on the right
  const end = generateCoords(rows, cols, (cols / 2));

  // return grid, plus start & end values to save having to find them later on
  return {
    grid: [...Array(rows).keys()].map(row => [...Array(cols).keys()].map(col => {
      return {
        start: row === start.row && col === start.col,
        end: row === end.row && col === end.col,
        active: false,
        visited: false,
      }
    })),
    start,
    end
  }
}

export default function gridster(state = initialState, action) {
  if (action.type === 'UPDATE_ROW_COUNT') {
    return checkRoute({ ...state, rowCount: action.rowCount });
  }
  if (action.type === 'UPDATE_COLUMN_COUNT') {
    return checkRoute({ ...state, colCount: action.colCount });
  }
  if (action.type === 'GENERATE_GRID') {
    const { rowCount, colCount } = state;
    const { start, end, grid } = generateGrid(rowCount, colCount);
    return checkRoute({ ...state, start, end, grid, rows: rowCount, cols: colCount });
  }
  if (action.type === 'TOGGLE_SQUARE') {
    const { grid } = state;
    const square = grid[action.row][action.col];
    square.active = !square.active;
    return checkRoute({ ...state, grid });
  } else {
    return checkRoute(state);
  }
}
