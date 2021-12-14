import { ADD_TO_SAVED, DELETE_FROM_SAVED } from "../consts";

export const addToSaved = (blog) => async (dispatch) => {
  // if saved already exist in localStorage, use it, otherwise set to empty array
  const saved = localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [];

  // check if duplicates
  const duplicates = saved.filter((savedItem) => savedItem._id === blog.id);

  // if no duplicates, proceed
  if (duplicates.length === 0) {
    // prep blog data
    const blogToAdd = {
      ...blog,
      count: 1,
    };
    // add blog data to saved
    saved.push(blogToAdd);

    // add saved to localStorage
    localStorage.setItem("saved", JSON.stringify(saved));

    // add saved to redux
    dispatch({
      type: ADD_TO_SAVED,
      payload: saved,
    });
  }
};

export const deleteFromSaved = (blog) => async (dispatch) => {
  const saved = localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [];

  const updatedSaved = saved.filter(savedItem => savedItem._id !== blog._id)

  localStorage.setItem('saved', JSON.stringify(updatedSaved))

  dispatch({
    type: DELETE_FROM_SAVED,
    payload: updatedSaved,
  })
};
