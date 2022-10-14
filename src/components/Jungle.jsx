import React from 'react';
import  images  from '../images.json';

export const Jungle = () => {
  const image = images.images.find((data) => data.name === 'jungle');

  return (
    <>
      <div className="container">
        <img src={image.url} alt="" className="imagen" />
      </div>
    </>
  );
};
