import React from 'react';
import PropsTypes from 'prop-types';

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

Comment.defaultProps = {
  username: 'testuser',
  comment: 'コメントする',  
}

Comment.propTypes = {
  username: PropsTypes.string.isRequired,
  comment: PropsTypes.string.isRequired,
}

export default Comment;
