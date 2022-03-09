import React from 'react';
import './Cards.css'

function Cards({ src }) {
  return <div className="container">

    {/* <object data={src} type="" /> */}
    <img src={src} alt="" />

  </div >;
}

export default Cards;
