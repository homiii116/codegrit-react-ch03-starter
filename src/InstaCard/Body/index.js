import React from 'react';
import BodyMain from './Main';
import MainImg from '../../images/instacard-main-image.jpg';

const Body = () => (
  <section className="card-body">
    <div className="card-image">
      <img alt="メイン画像" src={MainImg} />
    </div>
    <BodyMain />
  </section>
);

export default Body;