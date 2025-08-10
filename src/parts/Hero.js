/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  return (
    <section className="hero flex items-center">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 flex flex-col justify-center">
        <h1 className="text-5xl sm:text-6xl text-primary font-bold leading-tight mb-5">
          Custom Apps & Digital Solutions <br />
          That Drive Results
        </h1>

        <p className="font-light text-xl text-text-light leading-relaxed mb-16">
          We specialize in building custom mobile apps, responsive websites, and
          {' '}
          high-converting social media advertising campaigns. From innovative AR
          {' '}
          experiences to powerful web applications, we transform your ideas into
          {' '}
          digital solutions that engage users and drive business growth.
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-1/2 h-18 items-center px-14 py-5 text-white text-xl bg-accent shadow-2xl hover:bg-primary transition duration-200"
          >
            Start Your Project
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex w-full justify-center items-center order-first lg:order-last lg:w-1/2 py-8 lg:py-0">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Fade>
      </div>
    </section>
  );
}
