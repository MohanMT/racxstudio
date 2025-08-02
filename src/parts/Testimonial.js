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
    <section className="container mx-auto px-5 py-20">
      <Fade direction="up">
        <h1 className="text-5xl text-primary text-center font-bold">Testimonials</h1>
      </Fade>
      <Fade direction="up" delay={500}>
        <p className="font-light text-lg text-text-light text-center mb-3 sm:mb-3 xl:mb-4">
          What they said about us.
        </p>
      </Fade>
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-background rounded-2xl shadow-xl border border-accent/20 p-8 mx-4 my-6 max-w-4xl mx-auto">
              <div className="flex items-center mb-5">
                <img src={item.imageUrl} alt="Testimoni" className="w-20 h-20 rounded-full" />
                <div className="flex-col pl-5">
                  <h2 className="text-primary text-2xl">{item.name}</h2>
                  <p className="font-light text-text-light">{item.company}</p>
                </div>
              </div>
              <p className="font-light text-2xl text-text-dark pl-5 pt-3 pb-1">
                {item.testimoni}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
