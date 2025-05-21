'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Storage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="flex justify-center items-center px-4 mt-12">
      {/* Left Side Images */}
      <div className="flex flex-col gap-4 justify-center">
        <div data-aos="fade-right" data-aos-delay="100">
          <Image
            src="/assets/candle.jpg"
            width={250}
            height={250}
            alt="Left Image 1"
            className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <Image
            src="/assets/perfume12.jpg"
            width={250}
            height={250}
            alt="Left Image 2"
            className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      {/* Center Image */}
      <div className="mx-16" data-aos="zoom-in" data-aos-delay="300">
        <Image
          src="/assets/perfume8.jpg"
          width={600}
          height={600}
          alt="Center Image"
          className="rounded-full object-cover border-4 border-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      {/* Right Side Images */}
      <div className="flex flex-col gap-4 justify-center">
        <div data-aos="fade-left" data-aos-delay="200">
          <Image
            src="/assets/perfume12.jpg"
            width={250}
            height={200}
            alt="Right Image 1"
            className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <Image
            src="/assets/perfume14.png"
            width={250}
            height={250}
            alt="Right Image 2"
            className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Storage;
