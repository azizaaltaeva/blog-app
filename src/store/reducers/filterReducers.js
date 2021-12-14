import { SORT_BY_ALPHABET } from "../consts";


const initialState = {};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_ALPHABET:
      let sortedArr = action.payload.direction === "asc" ?
        sortAsc(state.filteredProducts, 'name') :
        sortDesc(state.filteredProducts, 'name');

      return {
        ...state,
        filteredProducts: sortedArr
      };

    default:
      return state;
  }
}