/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function BrandWebsiteDetail() {
  const projectData = {
    title: 'Brand Website & Social Ads',
    description: 'Complete digital brand presence with responsive website design and targeted social media advertising campaigns across Facebook, Instagram, and Snapchat.',
    websiteFeatures: [
      'Responsive web design',
      'SEO optimization',
      'Content management system',
      'Contact forms and analytics',
      'Fast loading performance',
      'Mobile-first approach',
    ],
    socialAdFeatures: [
      'Facebook ad campaigns',
      'Instagram story ads',
      'Snapchat sponsored content',
      'Audience targeting and analytics',
      'A/B testing for optimization',
      'ROI tracking and reporting',
    ],
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Facebook Ads API',
      'Google Analytics',
      'Photoshop',
    ],
    imageUrl: '/assets/images/website.jpg',
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-5">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
              {projectData.title}
            </h1>
            <div className="max-w-6xl mx-auto">
              <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
                  <span className="text-3xl md:text-4xl mb-2 sm:mb-0 sm:mr-4">🌐</span>
                  <h2 className="text-xl md:text-2xl text-primary font-semibold text-center sm:text-left">
                    Project Overview
                  </h2>
                </div>
                <p className="text-base md:text-lg text-text-dark leading-relaxed">
                  {projectData.description}
                </p>
              </div>
            </div>
          </div>
        </Fade>

        <div className="max-w-6xl mx-auto space-y-12">
          <Fade direction="up" delay={200} triggerOnce>
            <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8 border border-accent/20">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                      Website Features:
                    </h4>
                    <ul className="space-y-4">
                      {projectData.websiteFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-accent mr-4 mt-1 text-lg">✓</span>
                          <span className="text-text-dark text-base md:text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                      Social Media Advertising:
                    </h4>
                    <ul className="space-y-4">
                      {projectData.socialAdFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-accent mr-4 mt-1 text-lg">📈</span>
                          <span className="text-text-dark text-base md:text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                    Live Website:
                  </h4>
                  <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/20 shadow-lg">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={projectData.imageUrl}
                        alt="Brand Website Demo"
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="text-center mt-6">
                      <p className="text-text-dark font-semibold text-lg md:text-xl mb-2">
                        Complete Brand Solution
                      </p>
                      <p className="text-text-light text-sm md:text-base">
                        Website + Social media advertising campaigns
                      </p>
                      <div className="mt-4 inline-flex items-center text-accent text-sm font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        Live & Converting
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {projectData.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm md:text-base font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Fade direction="up" delay={400} triggerOnce>
          <div className="text-center mt-16">
            <div className="bg-primary text-background rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Build Your Brand Online?</h3>
              <p className="text-lg leading-relaxed mb-6">
                Get a complete digital presence with a stunning website and high-converting
                social media ad campaigns that drive real business results.
              </p>
              <button
                type="button"
                className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-background hover:text-primary transition duration-300 border-2 border-accent"
              >
                Start Your Brand Project
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
