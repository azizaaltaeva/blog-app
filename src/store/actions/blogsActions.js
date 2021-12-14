import http from "../../services/index";
import {
  setBlogError,
  setBlogLoading,
  setBlogsError,
  setBlogsLoading,
  setBlogsSuccess,
  setBlogSuccess,
} from "../reducers/blogsReducer";

export const fetchBlogs = () => async (dispatch) => {
  dispatch(setBlogsLoading());
  try {
    const { data } = await http('/blogs/');
    dispatch(setBlogsSuccess(data));
  } catch (e) {
    console.log("error", e.message);
    dispatch(setBlogsError(e.message));
  }
};

export const fetchOneBlog = (id) => async (dispatch) => {
  dispatch(setBlogLoading());
  try {
    const { data } = await http(`/blogs/${id}`);
    dispatch(setBlogSuccess(data));
  } catch (e) {
    console.log("error", e.message);
    dispatch(setBlogError(e.message))
  }
}

export const fetchPlaces = () => async (dispatch) => {
  dispatch(setBlogsLoading());
  try {
    const { data } = await http('/places/');
    dispatch(setBlogsSuccess(data));
  } catch (e) {
    console.log("error", e.message);
    dispatch(setBlogsError(e.message));
  }
};