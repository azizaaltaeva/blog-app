import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { deleteBlog } from '../api/blog';
import BlogDetail from '../components/Blogs/BlogDetail';
import MainLayout from '../layouts/MainLayout'
import { fetchOneBlog } from '../store/actions/blogsActions';

const BlogDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.blogsReducer.blog);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOneBlog(id));
  }, [id]);

  const handleDeleteBlog = async () => {
    try {
      await deleteBlog(id);
      navigate('/blogs');
    } catch (e) {
      console.log(e.message);
    }
  }

  if (isLoading) return <h1>...Loading</h1>;
  if (error) return <h1>{error}</h1>

  return (
    <MainLayout>
      <BlogDetail 
        blog={data} onDelete={handleDeleteBlog} />
    </MainLayout>
  )
}

export default BlogDetailPage;
