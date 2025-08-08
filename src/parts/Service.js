/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Service({ data }) {
  return (
    <div className="bg-text-light/10 py-20">
      <div className="container mx-auto px-5">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-primary text-center font-bold">
            Our Services
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-text-light text-center mb-12">
            From custom mobile applications to targeted social media campaigns,
            we deliver cutting-edge digital solutions that empower businesses to
            connect with their audience, enhance engagement, and achieve
            measurable growth.
          </p>
        </Fade>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fade
              direction={item.animation}
              delay={500 * index}
              triggerOnce
            >
              <div>
                <div className="bg-background group rounded-2xl shadow-2xl border border-accent/20 transform transition duration-500 hover:scale-105">
                  <img
                    src={item.imageUrl}
                    alt="Service"
                    className="w-full rounded-t-2xl"
                  />
                  <h2 className="text-primary text-center text-xl py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                  <span className="text-primary text-center text-sm px-7 py-7 rounded-b-2xl">{item.text}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
