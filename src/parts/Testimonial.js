/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line react/no-array-index-key
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonial({ data }) {
  return (
    <section className="w-full px-5 pt-10">
      <Fade direction="up">
        <h1 className="text-3xl md:text-4xl text-primary text-center font-bold animate-float">
          Testimonials
        </h1>
      </Fade>

      <Fade direction="up" delay={500}>
        <p className="font-light text-base md:text-lg text-text-light text-center mb-4">
          What they said about us.
        </p>
      </Fade>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-background rounded-2xl shadow-xl border border-accent/20 p-6 max-w-3xl mx-auto my-4 animate-glow hover:animate-pulse-custom">
              <div className="flex items-center mb-5">
                <img
                  src={item.imageUrl}
                  alt="Testimoni"
                  className="w-16 h-16 rounded-full object-cover animate-grow"
                />
                <div className="flex-col pl-4">
                  <h2 className="text-primary text-lg md:text-xl">{item.name}</h2>
                  <p className="font-light text-sm md:text-base text-text-light">
                    {item.company}
                  </p>
                </div>
              </div>
              <p className="font-light text-base md:text-lg text-text-dark pl-2 pt-2">
                {item.testimoni}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
