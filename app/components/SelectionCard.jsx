'use client'
import React from 'react';

const SelectionCard = ({ image, name, price }) => {
  return (
    <div
      className="p-6 w-60 text-white rounded-[3rem] shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{
        background: 'linear-gradient(to bottom, var(--brand-primary), var(--brand-blue4))',
      }}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mx-auto"
      />
      <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
      <p className="text-3xl font-semibold text-center mt-1 text-[#f8dd30]">
        {price}
      </p>
    </div>
  );
};

export default SelectionCard;
