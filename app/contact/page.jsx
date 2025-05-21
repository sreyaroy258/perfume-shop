"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
const Page = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Header />

      {/* Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/assets/bg0.png"
          alt="Contact header image"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl text-[#f8dd30] font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 py-10 flex flex-col md:flex-row gap-8 items-start">

        {/* Left column: Contact Info */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-3xl font-semibold mb-6">Our Office</h3>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Address */}
            <div className="flex items-start gap-3 bg-gray-200 p-4 rounded-md shadow">
              <div className="w-8 h-8 flex items-center justify-center rounded bg-[#19435b] text-white">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div>
                <h4 className="text-base font-medium text-[#19435b]">Address</h4>
                <p className="text-sm text-gray-600 leading-snug">
                  1234 Street Name,<br />
                  City, Country
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 bg-gray-200 p-4 rounded-md shadow">
              <div className="w-8 h-8 flex items-center justify-center rounded bg-[#19435b] text-white">
                <FaPhoneAlt className="text-sm" />
              </div>
              <div>
                <h4 className="text-base font-medium text-[#19435b]">Phone</h4>
                <p className="text-sm text-gray-600 leading-snug">+1 234 567 890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 bg-gray-200 p-4 rounded-md shadow">
              <div className="w-8 h-8 flex items-center justify-center rounded bg-[#19435b] text-white">
                <FaEnvelope className="text-sm" />
              </div>
              <div>
                <h4 className="text-base font-medium text-[#19435b]">Email</h4>
                <p className="text-sm text-gray-600 leading-snug">contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded overflow-hidden shadow-md mt-4 h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4386.551469430149!2d87.31267632136841!3d22.405098065545733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1747456662527!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right column: Contact Form */}
        <div className="md:w-1/2 w-full">
          {submitted && (
            <div className="mb-4 text-green-600 font-semibold">
              ✅ Your message has been sent!
            </div>
          )}

          <div className="mb-4">
            <h4 className="text-4xl font-bold mb-2">Get In Touch</h4>
            <p className="text-sm text-gray-500">
              Feel free to reach out to us for any inquiries or feedback. We’re here to help!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-gray-100 shadow-md rounded-lg">
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring"
                rows={4}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#f8dd30] text-[#19435b] px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
