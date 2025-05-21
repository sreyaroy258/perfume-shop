'use client';

import { use } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import productData from '../../data/productData';

export default function ProductDetail(props) {
  const params = use(props.params); // ✅ Unwrap the params Promise
  const { productId } = params;
  const product = productData?.[productId];

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="p-10 max-w-6xl mx-auto">
        <Link href="/shop">
          <p className="text-sm text-blue-400 hover:underline mb-6">← Back to Shop</p>
        </Link>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left side (Image + Price + Add to Cart) */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full max-w-xs h-96 mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
            </div>
            <div className="w-full text-center mt-4">
              <p className="text-2xl font-semibold text-[#f8dd30] mb-4">
                {product.price}
              </p>
            
                <button
                  aria-label={`Add ${product.name} to cart`}
                  className="bg-[#045d86] text-white px-6 py-2 rounded-full hover:bg-[#033c5b] transition"
                >
                  Add to Cart
                </button>
        
            </div>
          </div>

          {/* Right side (Details + Additional Info) */}
          <div className="w-full md:w-1/2 text-white space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-[#f8dd30] mb-4">{product.name}</h1>
              <p className="text-lg leading-7">{product.description}</p>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <h2 className="text-2xl font-semibold mb-2">Product Info</h2>
              <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                <li>Long-lasting fragrance</li>
                <li>Unisex scent profile</li>
                <li>Ideal for day and night wear</li>
                <li>Packaged in eco-friendly materials</li>
              </ul>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <h2 className="text-2xl font-semibold mb-2">Refund Policy</h2>
              <p className="text-gray-300 text-sm leading-6">
                We offer a 7-day return and refund policy if the product is unused and in its original packaging.
                Please contact our support team for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
