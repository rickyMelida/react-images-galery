import React from 'react';
import images  from '../images.json';

export const Lake = () => {
  const image = images.images.find((data) => data.name === 'lake');

  return (
    <>
      <div className="container">
        <img src={image.url} alt="" className="imagen" />
      </div>
    </>
  );
};
