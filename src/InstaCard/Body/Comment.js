import React from 'react';

const Comment = ({ username, comment }) => (
  <li className="poster-comment">
    <a href className="commenter-name">
      {username}
    </a>
    <span className="commenter-comment">
      {comment}
    </span>
  </li>
);

export default Comment;
