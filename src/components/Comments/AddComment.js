import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../api/comment";
import './comment.scss';

const  AddComment = () => {
  const [form, setForm] = useState({
    name: '',
    comment: '',
  })

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(values);
  };

  const handleAddComment = async () => {
    await addComment(form);
    setForm({
      name: '',
      comment: ''
    })
  }


    return (
      <section className="comment">
        <form className="comment-form">
          <input
            type="text"
            name="name"
            placeholder="Username"
            onChange={handleChange}
            value={form.name}
          />
          <textarea
            type="text"
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
            value={form.comment}
          />
          <i onClick={handleAddComment} class="fas fa-paper-plane"></i>
        </form>
      </section>
    );
}

export default AddComment;