/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from '../elements/Button';

export default function Discuss() {
  return (
    <Fade direction="up" triggerOnce>
      <section className="container mx-auto px-5 py-20 flex justify-center">
        <div className="flex flex-col w-full max-w-6xl rounded-2xl bg-primary text-background p-8 md:p-12 lg:p-16 shadow-2xl discuss">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-8">
            <h1 className="flex-1 text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold">
              Ready to Build Something Amazing?
            </h1>
            <Fade direction="up" triggerOnce delay={500}>
              <Button href="/discuss-project" type="link" className="flex bg-accent text-white text-lg md:text-xl tracking-wider items-center justify-center px-8 py-4 border-2 border-accent shadow-xl rounded-full transform transition duration-300 hover:scale-105 hover:bg-background hover:text-primary whitespace-nowrap">
                Let&apos;s Discuss Your Project
              </Button>
            </Fade>
          </div>
          <Fade delay={300} triggerOnce>
            <p className="font-light text-lg md:text-xl leading-relaxed">
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
