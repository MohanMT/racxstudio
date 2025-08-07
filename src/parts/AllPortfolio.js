/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import Button from 'elements/Button';

export default function AllPortfolio({ data }) {
  return (
    <Fade bottom>
      <section className="container mx-auto px-5 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary font-bold mb-6">All Projects</h1>
          <p className="text-lg text-text-dark">
            Explore our complete portfolio of innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {
            data.map((item, index) => (
              <Fade triggerOnce direction="up" delay={200 * index} key={index}>
                <Button type="link" href={['virtual-try-on', 'snapchat-lens', 'ecommerce-app', 'brand-website'].includes(item.id) ? `/${item.id}` : `/project/${item.id}`}>
                  <div className="group rounded-2xl shadow-2xl w-full max-w-sm transform transition duration-500 hover:scale-105 portofolio-card">
                    <div className="relative">
                      <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0 w-full h-48 object-cover" />
                      <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                        <button className="focus:outline-none">
                          <svg className="w-20 h-20 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="py-4">
                      <h2 className="text-primary text-center text-xl font-semibold">{item.title}</h2>
                      <p className="font-light text-text-dark text-center">{item.type}</p>
                      {['virtual-try-on', 'snapchat-lens', 'ecommerce-app', 'brand-website'].includes(item.id) && (
                        <p className="text-accent text-center text-sm mt-2 font-medium">
                          View Project Details →
                        </p>
                      )}
                    </div>
                  </div>
                </Button>
              </Fade>
            ))
          }
        </div>
      </section>
    </Fade>
  );
}
