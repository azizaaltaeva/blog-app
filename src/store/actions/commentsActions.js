import http from "../../services";
import { GET_COMMENTS } from "../consts";

export const fetchComments = () => async (dispatch) => {
  try {
    const { data } = await http('/comments/');
    dispatch({
      type: GET_COMMENTS,
      payload: data,
    })
  } catch (e) {
    console.log(e.message)
  }
}

// export const addComment = (newComment) => async (dispatch) => {
//   try {
//     await http.post(`/comments/`, newComment).then((res) => {
//       if (res.status === 201) {
//         dispatch(fetchComments())
//       }
//     })
//   } catch (e) {
//     console.log(e.message)
//   }
// }