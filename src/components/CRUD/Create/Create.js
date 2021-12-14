import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createBlog } from '../../../api/blog';
import { fetchBlogs } from '../../../store/actions/blogsActions';
import '../crud.scss';
import { useNavigate } from 'react-router';

const schema = yup.object({
  title: yup.string().required(),
  blog: yup.string().required(),
  image: yup.string().required(),
});


const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { register, reset, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await createBlog({ ...data})
      reset();
      dispatch(fetchBlogs());
      navigate('/blogs')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="crud">
      <form className="crud__form" >
      <h2>Create new blog</h2>
        <label>Title</label>
        <input type="text" {...register('title')} />
        <p className="error-msg">{errors?.title?.message}</p>
        <label>Blog</label>
        <input type="text" {...register('blog')} />
        <p className="error-msg">{errors?.blog?.message}</p>
        <label for="file-upload" class="hide">Image</label>
          <input type="text" {...register('image')} accept="image/png, image/jpeg" id="file-upload"  />
        <p className="error-msg">{errors?.image?.message}</p>
        <button onClick={handleSubmit(onSubmit)} className="crud__btn">Save</button>
      </form>
    </div>
  )
}

export default Create
