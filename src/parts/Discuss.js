/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';

export default function Discuss() {
  return (
    <Fade direction="left" triggerOnce>
      <section className="w-full px-5 pb-10 flex justify-center">
        <div className="flex flex-col w-full max-w-5xl rounded-2xl bg-primary text-background p-6 md:p-8 lg:p-10 shadow-2xl discuss animate-pulse-custom">
          <div className="flex flex-col items-center text-center gap-6 mb-6">
            <h1 className=" text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold animate-bounce-custom">
              Ready to Build Something Amazing?
            </h1>
            <Fade direction="up" triggerOnce delay={1000}>
              <Button
                href="/discuss-project"
                type="link"
                className="flex  bg-accent text-white text-base md:text-lg tracking-wider items-center justify-center px-6 py-3 border-2 border-accent shadow-xl rounded-full transform transition duration-300 hover:scale-105 hover:bg-background hover:text-primary whitespace-nowrap"
              >
                Let&apos;s Discuss Your Project
              </Button>
            </Fade>
          </div>
          <Fade delay={300} triggerOnce>
            <p className="font-light  text-base md:text-lg leading-relaxed text-center">
              Let&apos;s discuss your project ideas and create innovative digital solutions
              {' '}
              that engage your audience and grow your business!
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
}
