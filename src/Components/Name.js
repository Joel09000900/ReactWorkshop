import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';

const Name = () => {
  return (
    <h1 className='pt-4'>{product.name}</h1>
  )
};

export default Name;