import React from 'react';
const Comments = ({ comments }) => {

  return (
    <div class="comment-list">
      <h3> Comments:</h3>

      { comments.map((comment, key) => (
        <div>
          <h4>{ comment.username}</h4>
          <p> { comment.text }</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
