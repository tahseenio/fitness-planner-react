import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  image: string;
  id: number;
}

export const Item = ({ title, image, id }: Props) => {
  return (
    <Link to={`/${id}`} onClick={() => console.log(id)}>
      <div className='item'>
        <p>{title}</p>
        <img src={image} alt='' />
      </div>
    </Link>
  );
};
