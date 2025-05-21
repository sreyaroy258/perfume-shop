'use client';
import React from 'react';
import Link from 'next/link';
import SelectionCard from '../components/SelectionCard';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';



const products = [
  { id: '1', name: 'Ocean Breeze', image: '/assets/perfume1.jpg', price: '$50' },
  { id: '2', name: 'Rose Bloom', image: '/assets/perfume2.jpg', price: '$60' },
  { id: '3', name: 'Midnight Oud', image: '/assets/perfume3.jpg', price: '$85' },
  { id: '4', name: 'Citrus Whisper', image: '/assets/perfume4.jpg', price: '$45' },
  { id: '5', name: 'Vanilla Ember', image: '/assets/perfume5.jpg', price: '$70' },
  { id: '6', name: 'Forest Mist', image: '/assets/perfume6.jpg', price: '$55' },
  { id: '7', name: 'Saffron Dusk', image: '/assets/perfume7.jpg', price: '$95' },
  { id: '8', name: 'Tropical Kiss', image: '/assets/perfume8.jpg', price: '$52' },
  { id: '9', name: 'White Musk', image: '/assets/perfume9.jpg', price: '$48' },
  { id: '10', name: 'Amber Spice', image: '/assets/perfume10.jpg', price: '$78' },
  { id: '11', name: 'Lavender Fields', image: '/assets/perfume11.jpg', price: '$43' },
  { id: '12', name: 'Berry Noir', image: '/assets/perfume12.jpg', price: '$66' },
];


const ShopPage = () => {
  return (
    <div>
      <Header />
    <div className="flex flex-col justify-center items-center pb-20 px-2 py-2"> 
      <div className="w-full mb-8">
       <Image 
       src="/assets/slide6.jpg"
       alt="headerimage"
       width={1920}
        height={400}
      className="w-full h-[400px] object-cover"
     />
       </div>

      <h1 className="text-6xl font-bold mt-10 mb-10 text-center text-[#f8dd30]">
        Shop Our Perfumes
      </h1>

      {/* 🎯 Single Creative Carousel */}
      

      {/* 🛍️ Product Cards Section */}
      <div className="px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center w-full ">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="w-full max-w-xs">
            <SelectionCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ShopPage;
