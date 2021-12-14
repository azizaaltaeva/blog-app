import http from '../services';

export const createBlog = async (blog) => {
  return http.post(`/blogs/`, blog)
}

export const deleteBlog = async (id) => {
  return http.delete(`/blogs/${id}`)
}

export const editBlog = async (blog) => {
  return http.patch(`/blogs/${blog.id}`, blog)
}