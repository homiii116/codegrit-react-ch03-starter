import React from 'react';
import MainIcons from './MainIcons';
import Comments from './Comments';

const BodyMain = () => (
  <section className="card-main">
    <MainIcons />
    <div className="card-like-counts">100 likes</div>
    <Comments />
    <div className="post-date">1日前</div>
    <section className="comment-box">
      <div className="comment-area">コメントする</div>
    </section>
  </section>
);

export default BodyMain;