/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from 'emailjs-com';

import Button from '../elements/Button';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_qxi7gks',
      'template_scp9ed3',
      formData,
      'YVJGEby1sEXyvNyNY',
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send message.', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="container mx-auto px-5 py-20">
      <Fade direction="up" triggerOnce>
        <h1 className="text-5xl text-primary text-center font-bold mb-4">
          Let&apos;s Create Something Amazing
        </h1>
        <p className="text-xl text-text-light text-center mb-12">
          Ready to Transform Your Digital Presence?
        </p>
      </Fade>

      <div className="max-w-6xl mx-auto">
        <Fade direction="up" delay={200} triggerOnce>
          <div className="bg-background rounded-2xl shadow-xl p-8 mb-12">
            <p className="text-lg text-text-dark text-center leading-relaxed">
              Whether you need a custom mobile app, a stunning website, or targeted
              {' '}
              social media campaigns, we&apos;re here to bring your vision to life.
              {' '}
              Let&apos;s discuss your project and create digital solutions that drive
              {' '}
              real results for your business.
            </p>
          </div>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Fade direction="left" delay={400} triggerOnce>
            <div className="space-y-8">
              <div className="bg-background rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl text-primary font-semibold mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-dark font-medium">Email</p>
                      <p className="text-text-light">wartechsolutionz@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-text-dark font-medium">Address</p>
                      <p className="text-text-light">Near Kailsh Grain, Gaytri Nagar, Padmanagar, Bhiwandi, Thane</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-background rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button 
                    href="https://www.linkedin.com/company/waretech" 
                    type="link" 
                    target="_blank" 
                    className="bg-accent hover:bg-background hover:text-primary text-white px-4 py-2 rounded-lg transition duration-200"
                    isExternal
                  >
                    LinkedIn
                  </Button>
                  <Button 
                    href="https://github.com/MohanMT" 
                    type="link" 
                    target="_blank" 
                    className="bg-accent hover:bg-background hover:text-primary text-white px-4 py-2 rounded-lg transition duration-200"
                    isExternal
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Fade>

          {/* Contact Form */}
          <Fade direction="right" delay={600} triggerOnce>
            <div className="bg-background rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl text-primary font-semibold mb-6">
                Get in Touch
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-text-dark font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-text-light rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-text-dark font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-text-light rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-text-dark font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-text-light rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-text-dark font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-text-light rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-text-dark font-medium mb-2">
                    How can we help you?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-text-light rounded-lg focus:outline-none focus:border-accent"
                  >
                    <option value="">Select a service</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="website-development">Website Development</option>
                    <option value="social-media-ads">Social Media Advertising</option>
                    <option value="ar-development">AR/VR Development</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-dark font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-text-light rounded-lg focus:outline-none focus:border-accent resize-vertical"
                    placeholder="Tell us about your project ideas and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-primary transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
