/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Team from 'assets/images/hero/team.png';

export default function HeroTeam() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <div className="order-2 lg:order-1">
          <Fade direction="up" triggerOnce>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-theme-blue font-bold leading-tight mb-6">
              Our Team
            </h1>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Our team is full of passionate people and ready to make your dream software come true.
            </p>
          </Fade>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <Fade direction="right" triggerOnce delay={200}>
            <img 
              src={Team} 
              alt="Our Team" 
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg"
            />
          </Fade>
        </div>

      </div>
    </section>
  );
}
