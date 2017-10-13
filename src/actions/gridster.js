export function generateGrid() {
  const offset = pageOffset !== undefined ? pageOffset : 0;
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
