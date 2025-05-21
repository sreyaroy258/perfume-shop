"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"
const QualityList = () => {
  return (
    <div className="relative h-screen">
      {/* Background image with opacity */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img
          src="/assets/bg2.jpg"
          className="w-full h-full object-cover opacity-10"
          alt="Background"
        />
      </div>

      {/* Title */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl text-[#f8dd30] text-center font-bold mb-16">
          Our Distinctive Qualities
        </h1>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-white gap-12 px-4 py-8 md:py-16">
        {/* Left Side Text */}
        <div className="md:w-1/4 text-center md:text-right space-y-20">
          <div>
            <p className="text-xl font-semibold">Long-lasting Wear</p>
            <p className="text-sm mt-2">
              Our perfumes are designed to last throughout the day, so you can feel
              confident your scent will stay with you from morning to night.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">Handcrafted with Love</p>
            <p className="text-sm mt-2">
              Every bottle is made with passion and care, reflecting our deep attention to detail.
            </p>
          </div>
        </div>

        {/* Center Circle Image */}

               <motion.div
     initial={{ rotate: 0 }}  // Starts with no rotation
      whileInView={{ rotate: 360 }}  // Trigger the rotation to 360 when the element comes into view
      transition={{ rotate: { delay: 1, duration: 5 } }}  // Delay rotation for 5 seconds before starting the 5-second rotation
      viewport={{ once: true }}
    >
      <div className="w-[28rem] h-[28rem] rounded-full overflow-hidden border-4 border-white flex-shrink-0">
        <Image
          src="/assets/perfume9.jpg"
          alt="Quality"
          width={896}
          height={896}
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
        {/* Right Side Text */}
        <div className="md:w-1/4 text-center md:text-left space-y-20">
          <div>
            <p className="text-xl font-semibold">Bengali Essence</p>
            <p className="text-sm mt-2">
              Our fragrances capture the spirit of Bengal, celebrating its rich culture.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">Unique Designs</p>
            <p className="text-sm mt-2">
              Every product features exclusive, artistic packaging inspired by tradition.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QualityList;
