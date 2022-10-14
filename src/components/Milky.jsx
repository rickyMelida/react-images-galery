import React from 'react';
import images from '../images.json';

export const Milky = () => {
  const image = images.images.find((data) => data.name === 'milky');

  return (
    <>
      <div className="container">
        <img src={image.url} alt="" className="imagen" />
      </div>
    </>
  );
};
