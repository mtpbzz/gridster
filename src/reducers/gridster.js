const initialState = {
  rowCount: 10,
  colCount: 10,
};

export default function gridster(state = initialState, action) {
  if (action.type === 'UPDATE_ROW_COUNT') {
    return { ...state, rowCount: action.rowCount };
  }
  if (action.type === 'UPDATE_COLUMN_COUNT') {
    return { ...state, colCount: action.colCount };
  } else {
    return state;
  }
}