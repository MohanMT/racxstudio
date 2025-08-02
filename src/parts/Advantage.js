/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Fade from 'react-awesome-reveal';

export default function Advantage({ data }) {
  return (
    <div className="bg-text-light/10 py-20">
      <div className="container mx-auto px-5">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-primary text-center font-bold">Why Choose Us</h1>

          <p className="font-light text-lg text-text-light text-center mb-12 sm:mb-5 xl:mb-0">
            We combine technical expertise with creative innovation to deliver
            {' '}
            digital solutions that exceed expectations and drive real results.
          </p>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          <div className="space-y-6">
            {
              data[0].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div className="bg-background flex items-center p-6 rounded-2xl shadow-xl border border-accent/20 transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-20 h-20 mr-6 flex-shrink-0" />
                    <div>
                      <h2 className="text-primary text-xl font-semibold mb-2">{item.title}</h2>
                      <p className="font-light text-text-light">{item.description}</p>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className="space-y-6">
            {
              data[1].map((item, index) => (
                <Fade bottom triggerOnce delay={500 * index} key={index}>
                  <div className="bg-background flex items-center p-6 rounded-2xl shadow-xl border border-accent/20 transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-20 h-20 mr-6 flex-shrink-0" />
                    <div>
                      <h2 className="text-primary text-xl font-semibold mb-2">{item.title}</h2>
                      <p className="font-light text-text-light">{item.description}</p>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
