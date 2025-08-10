/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;

  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (name && company && email && phone && projectIdea) {
      emailjs
        .send(
          'service_h4gtndg',
          'template_a9tvs7a',
          templateParams,
          'user_csqIxzN5mKsl1yw4ffJzV',
        )
        .then(() => {
          alert('Success! We’ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          alert(`Error: ${error.text}`);
        });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section className="flex mt-32 flex-col container mx-auto px-4">
      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-primary text-center font-bold mb-4">Let’s Discuss</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-text-dark text-center mb-12 max-w-2xl mx-auto">
          Please fill out the form below to discuss your project and we’ll get back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl mx-auto">
          {/* Two column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              onChange={actions.onChange}
            />

            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              onChange={actions.onChange}
            />
          </div>

          {/* Full width textarea */}
          <div className="mt-6">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain your project idea"
              onChange={actions.onChange}
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-8">
            <Button
              className="text-xl px-12 py-4 bg-primary text-white rounded-full border-2 border-primary hover:bg-accent hover:border-secondary transform transition duration-300 hover:scale-105 shadow-lg focus:outline-none"
              type="button"
              onClick={submitEmail}
            >
              Submit Project
            </Button>
          </div>
        </div>
      </Fade>
    </section>
  );
};
