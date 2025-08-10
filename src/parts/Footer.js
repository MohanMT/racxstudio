/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-text-dark/10 border-t border-text-dark pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="flex flex-col w-1/3 flex ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-text-dark font-light">
              Creating Digital Experiences That Drive Results
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-primary pt-4 pb-2">Office</h1>
            <p className="text-lg text-text-dark font-light">
              wartechsolutionz@gmail.com
            </p>
            <p className="text-lg text-text-dark font-light">
              House:- 701, Gayatri Apartment, Near Kailsh Grain,Gaytri
              Nagar,Padmanagar, Bhiwandi, Thane
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-primary pt-4 pb-2">Social</h1>
            <Button
              href="https://www.instagram.com/yaaarmohan/"
              type="link"
              target="_blank"
              className="flex text-lg text-text-dark font-light hover:text-accent hover:underline"
              isExternal
            >
              Instagram
            </Button>
            <Button
              href="https://www.linkedin.com/in/mohan-mamidala"
              type="link"
              target="_blank"
              className="flex text-lg text-text-dark font-light hover:text-accent hover:underline"
              isExternal
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/MohanMT"
              type="link"
              target="_blank"
              className="flex text-lg text-text-dark font-light hover:text-accent hover:underline"
              isExternal
            >
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-text-dark font-light">
            Copyright 2024 - All rights reserved - WareTech
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-text-dark font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button
              type="link"
              target="_blank"
              className="text-lg text-accent font-light"
              isExternal
            >
              Mohan Mamidala
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
