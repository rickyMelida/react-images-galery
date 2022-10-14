import React from 'react';
import images  from '../images.json';


export const Beach = () => {
  const image = images.images.find((data) => data.name === 'beach');

  return (
    <>
      <div className="container">
        <img src={image.url} alt="" className="imagen" />
      </div>
    </>
  );
};
