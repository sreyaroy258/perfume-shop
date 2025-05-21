"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Added Autoplay
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const StarRating = ({ count = 5 }) => (
  <div className="flex justify-center mt-2">
    {Array.from({ length: count }).map((_, index) => (
      <FaStar key={index} className="text-yellow-400" />
    ))}
  </div>
);

const Testimonial = () => {
  return (
    <div className="h-auto lg:h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-[1800px] h-auto lg:h-[600px] bg-[#0f1c25] text-white flex flex-col items-center justify-start gap-8 p-6 md:p-16 shadow-lg rounded-[2rem]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#f8dd30] text-center">Customer Reviews</h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // ✅ Added autoplay config
          modules={[Pagination, Autoplay]} // ✅ Added Autoplay module
          className="w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Testimonial 1 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={5} />
                  <p className="text-lg font-semibold mt-3">Amazing scent and long-lasting!</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client1.png"
                    alt="Client 1"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Mike Harlow</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={4} />
                  <p className="text-lg font-semibold mt-3">Very elegant, I love it.</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client2.png"
                    alt="Client 2"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Ravi K.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Testimonial 1 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={5} />
                  <p className="text-lg font-semibold mt-3">Amazing scent and long-lasting!</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client1.png"
                    alt="Client 1"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Mike Harlow</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={4} />
                  <p className="text-lg font-semibold mt-3">Very elegant, I love it.</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client2.png"
                    alt="Client 2"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Ravi K.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>


          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Testimonial 3 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={5} />
                  <p className="text-lg font-semibold mt-3">My favorite perfume so far.</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client3.png"
                    alt="Client 3"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Lily P.</p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={3} />
                  <p className="text-lg font-semibold mt-3">Good fragrance but fades fast.</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client4.png"
                    alt="Client 4"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Sarah S</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Testimonial 1 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={5} />
                  <p className="text-lg font-semibold mt-3">Amazing scent and long-lasting!</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client1.png"
                    alt="Client 1"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Mike Harlow</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 h-64 rounded-[2rem] bg-gradient-to-br from-[#045d86] to-[#1f607e] flex flex-col items-center justify-center px-4 text-center shadow-lg transition-transform hover:scale-105 duration-300">
                  <StarRating count={4} />
                  <p className="text-lg font-semibold mt-3">Very elegant, I love it.</p>
                </div>
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#1f607e]"></div>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src="/assets/client2.png"
                    alt="Client 2"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-2 font-medium">Ravi K.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
