import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './blog.scss';

const Blogs = ({ blogs }) => {
  // console.log(blogs)
  const user = useSelector((state) => state.user);

  

  return (
    <section className="blogs">
      <h1 className="heading">our daily posts</h1>
      <div className="blogs__title">
        <select className='select' name="relevancy"> 
          <option value="value1" class="fas fa-sort-alpha-down"> A - Z</option>
          <option value="value2" class="fas fa-sort-alpha-up"> Z - A</option>
        </select>
        <Link to="/create">
          <i class="far fa-plus-square"></i>
        </Link>
      </div>
      <div className="blogs__container">
      {blogs.map((blog) => (
        <div className="card">
          <img src={blog.image} alt="" />
            <div className="icons">
              <a href='#'><i class="fas fa-calendar"></i> 21st May, 2021 </a>
              <a href='#'><i class="fas fa-user"></i> by {user.email} </a>
            </div>
            <h3>{blog.title}</h3>
            <div className="actions">
              <Link to={`/blogs/${blog.id}`} className="btn">read more</Link>
            </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Blogs
