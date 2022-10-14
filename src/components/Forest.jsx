import React from 'react';
import  images  from '../images.json';

export const Forest = () => {
  const image = images.images.find((data) => data.name === 'forest');

  return (
    <>
      <div className="container">
        <img src={image.url} alt="" className="imagen" />
      </div>
    </>
  );
};
