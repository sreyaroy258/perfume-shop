"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#19435b] px-4 py-20">
        <h1 className="text-6xl text-center text-[#f8dd30]">About Us</h1>
        <p className="text-center text-white max-w-2xl mx-auto mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Amet quidem ea quas sit voluptatibus delectus aut impedit reiciendis labore voluptates!
          Debitis vero inventore alias.
        </p>

        <div className="mt-10">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={-150}
            coverflowEffect={{
              rotate: 30,
              stretch: -10,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <SwiperSlide key={num}>
                <div className="w-64 h-40 mx-auto overflow-hidden rounded-xl shadow-md">
                  <img
                    src={`/assets/perfume${num}.jpg`}
                    alt={`Perfume ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <h1 className="text-2xl py-6 px-20 text-[#f8dd30]">
          Perfume is the art that makes memory speak. At Perf, every <br />
          fragrance tells a story — of elegance, emotion, and individuality
        </h1>

        <div className="flex justify-between items-center text-base px-20">
          <p>
            Our mission is to redefine the experience of <br />fragrance by blending tradition with innovation.
            <br />
            Each scent in our collection is carefully <br /> developed to match moods, moments, and
            personalities <br /> — giving you a signature that lingers.
          </p>
          <p>
            From floral whispers to musky depths, our <br /> perfumes are designed to elevate your everyday.
            <br />
            Whether you're seeking confidence, calm, or allure <br /> — Perf is your aromatic companion.
          </p>
        </div>
      </div>

      <div className="px-20 py-10 grid grid-cols-2 gap-10">
        <div className="relative w-96 h-96 overflow-hidden rounded-xl">
          <Image
            src="/assets/women.jpg"
            width={384} // 96 * 4 (Tailwind px to pixels)
            height={384}
            alt="woman"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="bg-[#f8dd30] text-[#19435b] px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-400 transition">
              Smell unforgettable. Live beautifully.
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-5xl py-4 text-[#f8dd30]">Crafting Memories, One Perfume at a Time</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quo cum inventore. Repellat asperiores magnam
            perspiciatis ipsam quo, repellendus deleniti nesciunt vel impedit consectetur, ullam illum saepe neque optio.
          </p>
          <p className="mt-8 border-l-2 px-2 border-[#f8dd30] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quo cum inventore. Repellat asperiores magnam
            perspiciatis ipsam quo, repellendus deleniti nesciunt vel impedit consectetur, ullam illum saepe neque optio.
          </p>
        </div>
      </div>

      <div>
        <div className="px-20 py-10 flex items-center justify-between">
          <h4 className="text-5xl">Meet Our Team</h4>
          <Button className="px-4 py-2 text-base cursor-pointer">
            View All Members
          </Button>
        </div>

       <div className="px-20 py-5 flex justify-between items-start gap-6">
  <div className="w-72">
    <div className="relative w-full h-72 overflow-hidden rounded-xl">
      <Image
        src="/assets/man1.jpg"
        width={288}
        height={288}
        alt="man1"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <h3 className="mt-3 text-xl font-semibold text-white">John Doe</h3>
    <p className="text-gray-300">Chief Perfumer</p>
  </div>

  <div className="w-72">
    <div className="relative w-full h-72 overflow-hidden rounded-xl">
      <Image
        src="/assets/woman1.jpg"
        width={288}
        height={288}
        alt="woman1"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <h3 className="mt-3 text-xl font-semibold text-white">Jane Smith</h3>
    <p className="text-gray-300">Marketing Head</p>
  </div>

  <div className="w-72">
    <div className="relative w-full h-72 overflow-hidden rounded-xl">
      <Image
        src="/assets/woman2.jpg"
        width={288}
        height={288}
        alt="woman2"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <h3 className="mt-3 text-xl font-semibold text-white">Emily Johnson</h3>
    <p className="text-gray-300">Creative Director</p>
  </div>
</div>

      </div>
      <Footer />
    </div>
  );
};

export default Page;
