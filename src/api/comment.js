import http from "../services"

export const addComment = async (newComment) => {
  return http.post(`/comments/`, newComment)
}

export const deleteComment = async (id) => {
  return http.delete(`/comments/${id}`)
}