import { ADD_TO_SAVED, DELETE_FROM_SAVED } from "../consts";


const INITIAL_STATE = {
  saved: [],
}

if (localStorage.getItem('saved')) {
  INITIAL_STATE.saved = JSON.parse(localStorage.getItem('saved'))
} else {
  INITIAL_STATE.saved = [];
}

const savedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_SAVED:
      return {
        saved: [...action.payload]
      }

    case DELETE_FROM_SAVED:
      return {
        saved: [...action.payload]
      }

    default:
      return state;
  }
}

export default savedReducer;