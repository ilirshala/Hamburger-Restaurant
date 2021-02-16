export const initialState = {
  item: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SEARCH_FOOD":
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
}

export default reducer;
