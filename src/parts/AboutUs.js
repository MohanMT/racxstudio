/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function AboutUs() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-5">
      <Fade direction="up" triggerOnce>
        <h1 className="text-5xl text-primary text-center font-bold mb-8">
          About Us: Innovating Digital Experiences
        </h1>
      </Fade>

      <div className="max-w-4xl mx-auto">
        <Fade direction="up" delay={200} triggerOnce>
          <div className="bg-background rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl text-primary font-semibold mb-6">Our Story</h2>
            <p className="text-lg text-text-dark leading-relaxed mb-6">
              We are a dynamic tech company specializing in custom mobile applications,
              {' '}
              responsive websites, and innovative social media advertising solutions.
              {' '}
              Founded with a passion for cutting-edge technology and creative problem-solving,
              {' '}
              we help businesses transform their digital presence and connect with their
              {' '}
              audience in meaningful ways.
            </p>
            <p className="text-lg text-text-dark leading-relaxed mb-6">
              Our team consists of skilled developers, creative designers, and digital
              {' '}
              marketing experts who stay at the forefront of technology trends. From AR
              {' '}
              experiences and custom app development to targeted Facebook, Instagram, and
              {' '}
              Snapchat advertising campaigns, we deliver solutions that drive engagement
              {' '}
              and measurable results.
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              We believe in the power of innovation to transform businesses. Every project
              {' '}
              we undertake is an opportunity to push boundaries, explore new possibilities,
              {' '}
              and create digital experiences that leave lasting impressions.
            </p>
          </div>
        </Fade>

        <div className="grid md:grid-cols-2 gap-8">
          <Fade direction="left" delay={400} triggerOnce>
            <div className="bg-primary text-background rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the go-to technology partner for businesses seeking innovative
                {' '}
                digital solutions that drive growth and create exceptional user experiences.
              </p>
            </div>
          </Fade>

          <Fade direction="right" delay={600} triggerOnce>
            <div className="bg-accent text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver cutting-edge mobile apps, websites, and digital marketing
                {' '}
                campaigns that help businesses connect with their audience, increase
                {' '}
                engagement, and achieve measurable success in the digital landscape.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      </div>
    </section>
  );
}
