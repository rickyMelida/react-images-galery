import React from 'react';
import { Link } from 'react-router-dom';
import  images  from '../images.json';

const image = (name) => {
  return images.images.find((data) => data.name === name).url;
};

export const Navigation = () => {
  return (
    <>
      <div className="container mt-3 padre">
        <Link to="/aurora" className="links">
          <figure>
            <img src={image('aurora')} alt="" className="size-img" />
            <figcaption className="text-light">Aurora</figcaption>
          </figure>
        </Link>

        <Link to="/beach" className="links">
          <figure>
            <img src={image('beach')} alt="" className="size-img" />
            <figcaption className="text-light">Beach</figcaption>
          </figure>
        </Link>

        <Link to="/forest" className="links">
          <figure>
            <img src={image('forest')} alt="" className="size-img" />
            <figcaption className="text-light">Forest</figcaption>
          </figure>
        </Link>

        <Link to="/jungle" className="links">
          <figure>
            <img src={image('jungle')} alt="" className="size-img" />
            <figcaption className="text-light">Jungle</figcaption>
          </figure>
        </Link>

        <Link to="/lake" className="links">
          <figure>
            <img src={image('lake')} alt="" className="size-img" />
            <figcaption className="text-light">Lake</figcaption>
          </figure>
        </Link>

        <Link to="/milky" className="links">
          <figure>
            <img src={image('milky')} alt="" className="size-img" />
            <figcaption className="text-light">Milky</figcaption>
          </figure>
        </Link>
      </div>
    </>
  );
};
