import React from 'react';
import { Link } from 'react-router-dom';
import './places.scss';

const Packages = ({ blogs }) => {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">places you should visit</h1>
      <div className="box-container">
        {blogs.map((blog) => (
        <div className="box">
          <div className="image">
            <img src={blog.image} alt="" />
          </div>
          <div className="content">
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <Link to="/" className="btn">explore now</Link>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Packages;