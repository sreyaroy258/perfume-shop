'use client'
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative h-screen">
      {/* Main Banner Content */}
      <div className="flex justify-center items-center h-full">
        {/* Left Section with Text and Button */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-[100%] z-20"
          data-aos="fade-right"
        >
          <div className="relative bg-[#1f607e] px-44 py-32 rounded-e-full text-white opacity-80 ">
            <p className="text-2xl font-bold text-shadow-lg">
              Fall In Love With Our Signature
            </p>
            <h1 className="text-6xl font-extrabold mt-2 text-[#f8dd30] text-shadow-lg">
              Perfumes
            </h1>

            {/* KEEP your motion.div button as-is */}
            <Link href="/shop">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  scale: { type: 'spring', stiffness: 100, damping: 10 },
                }}
                style={{
                  width: '9rem', // 36 (w-36) is 9rem
                  height: '6rem', // 24 (h-24) is 6rem
                  borderRadius: '50%',
                  position: 'absolute',
                  bottom: '3rem', // bottom-12
                  right: '2rem', // right-8
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/assets/button.png"
                  alt="Button"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="absolute right-0 top-1/2 transform -translate-y-[70%] z-10"
          data-aos="fade-left"
        >
          <img
            src="/assets/perfume7.jpg"
            alt="Perfume"
            className="w-[1000px] h-[500px] rounded-s-full"
          />
        </div>
      </div>

      {/* Overlay Text */}
      <div
        className="px-40 absolute left-0 top-1/2 transform -translate-y-[-60%]"
        data-aos="fade-up"
      >
        <p className="text-white px-2 border-l-2">
          Discover the Perfect <br />
          fragrance for you with <br />
          wide selections of perfume
        </p>
      </div>

      {/* Counters */}
      <div
        className="px-40 absolute left-0 top-1/2 transform -translate-y-[-250%] flex gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-xs font-bold text-center text-white">
          <CountUp
            end={90}
            duration={2}
            className="text-[#f8dd30] text-3xl"
          />
          + <br />
          perfumes
        </h2>
        <h2 className="text-xs font-bold text-center text-white">
          <CountUp
            end={15}
            duration={2}
            className="text-[#f8dd30] text-3xl"
          />
          M <br />
          Customers
        </h2>
      </div>
    </div>
  );
};

export default Banner;
