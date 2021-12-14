import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { editBlog } from '../../../api/blog';
import { fetchBlogs } from '../../../store/actions/blogsActions';

const Edit = () => {
  const { data } = useSelector((state) => state.blogsReducer.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();

  const onSubmit = async (data) => {
    try {
      await editBlog({...data, id})
      dispatch(fetchBlogs())
      navigate(`/blogs/${id}`);
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="crud">
    <form className="crud__form" >
    <h2>Edit blog</h2>
      <label>Title</label>
        <input type="text" {...register('title')} defaultValue={data.title} />
      <label>Blog</label>
        <input type="text" {...register('blog')} defaultValue={data.blog} />
      <label for="file-upload" class="hide">Image</label>
        <input type="text" {...register('image')} defaultValue={data.image} accept="image/png, image/jpeg" id="file-upload"  />
      <button onClick={handleSubmit(onSubmit)} className="crud__btn">Save</button>
    </form>
  </div>
  )
}

export default Edit

