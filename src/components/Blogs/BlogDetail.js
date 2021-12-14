import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComment from '../Comments/AddComment';
import Comments from '../Comments/Comments';
import { addToSaved } from '../../store/actions/savedActions';
import './blog.scss';
import { useDispatch } from 'react-redux';


const BlogDetail = ({ blog, onDelete }) => {
  const dispatch = useDispatch();

  const handleAddToSaved = () => {
    dispatch(addToSaved(blog))
  }

  return (
    <div className="blog__container">
      <img src={blog?.image} alt="" />
      <h1>{blog?.title}</h1>
      <p>
        {blog?.blog}
      </p>
      <div className="info">
        <p>12th june, 2021</p>
        <i>by</i>
      </div>
      <div className="actions">
        <Link to={`/edit/${blog.id}`}>
          <i class="fas fa-eraser"></i>
        </Link>
        <i onClick={onDelete} class="far fa-trash-alt"></i>
        <i 
          onClick={handleAddToSaved}
          class="far fa-star"
        ></i>
        <i class="far fa-comment"></i>
        {/* <i class="far fa-heart"></i> */}
      </div>
      <div>
        <AddComment />
        <Comments />
      </div>
    </div>
  )
}

export default BlogDetail;
