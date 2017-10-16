export function generateGrid() {
  return {
    type: 'GENERATE_GRID'
  };
}

export function updateRowCount(rows) {
  return {
    type: 'UPDATE_ROW_COUNT',
    rowCount: parseInt(rows)
  };
}

export function updateColumnCount(cols) {
  return {
    type: 'UPDATE_COLUMN_COUNT',
    colCount: parseInt(cols)
  };
}

export function toggleSquare(row, col) {
  return {
    type: 'TOGGLE_SQUARE',
    row,
    col,
  };
}
