import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromSaved } from "../../store/actions/savedActions";
import "./profile.scss";

const Saved = () => {
  const { saved } = useSelector((state) => state.saved);
  const blog = useSelector((state) => state.blogsReducer.blog);
  const dispatch = useDispatch();

  const handleDeleteFromSaved = () => {
    dispatch(deleteFromSaved(blog))
  }

  return (
    <>
      <section className="saved">
        {saved.length <= 0 ? (
          <h2 className="heading">Your "saved" is empty</h2>
        ) : (
          <>
            <h2 className="heading">Saved posts</h2>
            <table className="table">
              {saved.map((item) => (
                <div className="card">
                    <Link to={`/blogs/${item.id}`}>
                      <img src={item.image} alt="" />
                      <h3>{item.title}</h3>
                    </Link>
                    <i
                      // onClick={() => dispatch(deleteFromSaved(blog))}
                      onClick={handleDeleteFromSaved}
                      class="fas fa-times"
                    ></i>
                  </div>
              ))}
            </table>
          </>
        )}
      </section>
    </>
  );
};

export default Saved;
