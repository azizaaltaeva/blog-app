import http from "../../services";
import { setSearchResults } from "../reducers/searchReducer";

export const fetchSearch = (value) => async (dispatch) => {
  try {
    if (!value) { 
      dispatch(setSearchResults([]));
      return;
    }
    const { data } = await http(`blogs?q=${value}`);
    dispatch(setSearchResults(data))
  } catch (e) {
    console.log(e.message);
  }
};
