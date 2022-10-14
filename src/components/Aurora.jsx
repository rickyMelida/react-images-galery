import React from 'react';
import images  from '../images.json';

export const Aurora = () => {
  const image = (name) => {
    return images.images.find((data) => data.name === name).url;
  };

  return (
    <>
      <div className="container">
        <img src={image('aurora')} alt="" className="imagen" />
      </div>
    </>
  );
};
