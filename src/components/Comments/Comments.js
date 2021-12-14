import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteComment } from '../../api/comment';
import { fetchComments } from '../../store/actions/commentsActions';

const Comments = () => {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments())
  }, [comments])

  const handleDelete = async (id) => {
    await deleteComment(id);
  }

  return (
    <>
    {comments && comments.length > 0
      ? comments.map((comment) => (
      <section className="comment-section">
        <div key={comment.id} className="name-section">
          {/* username date */}
          {comment.name} 
          <i onClick={() => handleDelete(comment.id)} class="far fa-times-circle"></i>
        </div>
        <div className="comment">{comment.comment}</div>
      </section>
      ))
    : null }
    </>
  )
}

export default Comments
