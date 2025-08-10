/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com";
import Button from "../elements/Button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qxi7gks",
        "template_scp9ed3",
        formData,
        "YVJGEby1sEXyvNyNY",
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send message.", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="container mt-12 mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <Fade direction="up" triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4 leading-tight">
            Let&apos;s Create Something Amazing
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-text-light max-w-2xl mx-auto">
            Ready to Transform Your Digital Presence?
          </p>
        </Fade>
      </div>

      {/* Intro text */}
      <Fade direction="up" delay={200} triggerOnce>
        <div className="bg-background rounded-2xl shadow-lg p-6 lg:p-10 mb-12 text-center">
          <p className="text-sm sm:text-base lg:text-lg text-text-dark leading-relaxed max-w-3xl mx-auto">
            Whether you need a custom mobile app, a stunning website, or
            targeted social media campaigns, we&apos;re here to bring your
            vision to life. Let&apos;s discuss your project and create digital
            solutions that drive real results for your business.
          </p>
        </div>
      </Fade>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <Fade direction="left" delay={300} triggerOnce>
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-background rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl text-primary font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-text-dark">
                      Email
                    </p>
                    <p className="text-sm text-text-light break-words">
                      wartechsolutionz@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-medium text-text-dark">
                      Address
                    </p>
                    <p className="text-sm text-text-light">
                      House:- 701, Gayatri Apartment, Near Kailsh Grain, Gaytri
                      Nagar,Padmanagar, Bhiwandi, Thane
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-primary text-background rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Button
                  href="https://www.linkedin.com/company/waretech"
                  type="link"
                  target="_blank"
                  className="bg-accent hover:bg-background hover:text-primary text-white px-6 py-3 rounded-lg transition text-center"
                  isExternal
                >
                  LinkedIn
                </Button>
                <Button
                  href="https://github.com/MohanMT"
                  type="link"
                  target="_blank"
                  className="bg-accent hover:bg-background hover:text-primary text-white px-6 py-3 rounded-lg transition text-center"
                  isExternal
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Fade>

        {/* Contact Form */}
        <Fade direction="right" delay={300} triggerOnce>
          <div className="bg-background rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl text-primary font-semibold mb-6">
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-text-light rounded-lg px-4 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-text-light rounded-lg px-4 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-text-light rounded-lg px-4 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-text-light rounded-lg px-4 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">
                  How can we help you?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-text-light rounded-lg px-4 py-2 focus:border-accent focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="website-development">
                    Website Development
                  </option>
                  <option value="social-media-ads">
                    Social Media Advertising
                  </option>
                  <option value="ar-development">AR/VR Development</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project ideas and goals..."
                  className="w-full border border-text-light rounded-lg px-4 py-2 focus:border-accent focus:outline-none resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-primary text-white py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  );
}
