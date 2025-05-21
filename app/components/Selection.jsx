"use client"
import React from 'react';
import SelectionCard from '../components/SelectionCard';

const products = [
  {
    image: '/assets/per1.png',
    name: 'Rosewood Bliss',
    price: '29.99',
  },
  {
    image: '/assets/per2.png',
    name: 'Ocean Mist',
    price: '34.99',
  },
  {
    image: '/assets/per3.png',
    name: 'Amber Nights',
    price: '39.99',
  },
 
   {
    image: '/assets/per4.png',
    name: 'Citrus Zest',
    price: '49.99',
  },
  {
    image: '/assets/per5.png',
    name: 'Woodland Walk',
    price: '59.99',
  },
  {
    image: '/assets/per6.png',
    name: 'Mediterinian Nights',
    price: '169.99',
  },


];

const Selection = () => {
  return (
    <div className="px-10">
      <div className="mb-12">
        <h1 className="text-center text-7xl font-extrabold text-[#eeda58]">
          Shop Our Wide Selections of<br /> Scents
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6">
        {products.map((product, index) => (
          <SelectionCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Selection;
