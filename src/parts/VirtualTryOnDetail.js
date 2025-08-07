/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { Fade } from "react-awesome-reveal";

export default function VirtualTryOnDetail() {
  const subModules = [
    {
      icon: "👚",
      title: "Virtual Try-On for Clothes",
      description:
        "Users can try on clothing items virtually through real-time webcam input or photo upload.",
      videoUrl: "/assets/images/clothes.mp4",
      // imageUrl: "/assets/images/vton.png",
      features: [
        "Intelligent body detection and segmentation",
        "Garment fitting using pose estimation",
        "Support for tops, dresses, kurtis, jackets, etc.",
        "Real-time outfit switching",
        "Background customization (studio, outdoor, etc.)",
      ],
      techStack: [
        "OpenCV",
        "Mediapipe",
        "PyTorch",
        "TorchVision",
        "React.js",
        "Streamlit",
      ],
    },
    {
      icon: "🕶️",
      title: "Virtual Try-On for Sunglasses",
      description:
        "A lightweight AR module for overlaying sunglasses accurately on the user's face.",
      videoUrl: "/assets/images/prada.mp4",
      features: [
        "Real-time facial landmark tracking",
        "2D/3D sunglasses overlay with dynamic scaling",
        "Try-on with multiple styles and frames",
        "Snap Lens and web version available",
      ],
      techStack: [
        "Dlib",
        "Mediapipe",
        "Lens Studio",
        "Three.js",
        "WebGL",
        "React",
      ],
    },
    {
      icon: "💄",
      title: "Virtual Try-On for Makeup & Beauty",
      description:
        "Applies cosmetic filters in real-time for realistic makeup simulation.",
      videoUrl: "/assets/images/makeup.mp4",
      features: [
        "Lipstick, foundation, eyeliner, and blush overlays",
        "Real-time face detection and color blending",
        "Before/after comparison slider",
        "Shade selection menu",
      ],
      techStack: [
        "TensorFlow",
        "Deep Learning",
        "Snap Lens Studio",
        "TensorFlow Lite",
        "Face Detection API",
      ],
    },
    {
      icon: "🌄",
      title: "Virtual Background Replacement",
      description:
        "Seamlessly replace or blur your background in real-time using webcam input or uploaded photos.",
      videoUrl: "/assets/images/background-replace.mp4",
      features: [
        "Intelligent human segmentation and matting",
        "Real-time background switching (studio, outdoor, custom images)",
        "Automatic lighting and edge blending for realism",
        "Supports still backgrounds, blur effect, and motion scenes",
        "Easy integration with try-on modules",
      ],
      techStack: [
        "OpenCV",
        "MediaPipe",
        "U^2-Net",
        "Python",
        "React.js",
        "Streamlit",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-5">
        {/* Section: Project Title & Description */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-6">
              Virtual Try-On (Augmented Reality)
            </h1>

            <div className="max-w-6xl mx-auto">
              <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
                  <span className="text-3xl md:text-4xl mb-2 sm:mb-0 sm:mr-4">
                    🧠
                  </span>
                  <h2 className="text-xl md:text-2xl text-primary font-semibold text-center sm:text-left">
                    Project Description
                  </h2>
                </div>

                <p className="text-base md:text-lg text-text-dark leading-relaxed">
                  We developed a Virtual Try-On Platform using Augmented Reality
                  (AR) technology to allow users to digitally try on fashion and
                  beauty products in real time. This project focuses on
                  enhancing the customer experience in online shopping by
                  simulating how clothes, sunglasses, and makeup would appear on
                  the user — using their live webcam or uploaded image.
                </p>

                <p className="text-base md:text-lg text-text-dark leading-relaxed mt-4">
                  It&apos;s a seamless combination of AI, AR, and computer
                  vision, ideal for e-commerce, beauty, and fashion tech brands
                  looking to stand out.
                </p>
              </div>
            </div>
          </div>
        </Fade>

        {/* Section: Sub-Modules Header */}
        <Fade direction="up" delay={200} triggerOnce>
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <span className="text-2xl md:text-3xl mb-2 sm:mb-0 sm:mr-4">
                ✨
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center sm:text-left">
                Sub-Modules Inside the Project
              </h2>
            </div>
          </div>
        </Fade>

        {/* Section: Sub-Modules Cards */}
        <div className="space-y-12">
          {subModules.map((module, index) => (
            <Fade
              key={module.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={300 + index * 200}
              triggerOnce
            >
              <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8 border border-accent/20">
                {/* Module Title */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <span className="text-3xl md:text-4xl mb-3 sm:mb-0 sm:mr-4">
                    {module.icon}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold text-center sm:text-left">
                    {module.title}
                  </h3>
                </div>

                {/* Module Description */}
                <p className="text-base md:text-lg text-text-dark leading-relaxed mb-8 text-center sm:text-left">
                  {module.description}
                </p>

                {/* Grid: Features + Tech + Demo */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column: Features and Tech Stack */}
                  <div className="space-y-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                        Features:
                      </h4>
                      <ul className="space-y-4">
                        {module.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="text-accent mr-4 mt-1 text-lg">
                              ✓
                            </span>
                            <span className="text-text-dark text-base md:text-lg leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                        Tech & Skills Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {module.techStack.map((tech) => (
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

                  {/* Right Column: Video Demo */}
                  <div>
                    <h4 className="text-xl md:text-2xl text-primary font-semibold mb-6">
                      Live Demo:
                    </h4>
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/20 shadow-lg">
                      <div className="relative overflow-hidden rounded-xl">
                        <video
                          src={module.videoUrl}
                          autoPlay
                          loop
                          muted
                          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="text-center mt-6">
                        <p className="text-text-dark font-semibold text-lg md:text-xl mb-2">
                          {module.title}
                        </p>
                        <p className="text-text-light text-sm md:text-base">
                          Interactive AR experience with real-time processing
                        </p>
                        <div className="mt-4 inline-flex items-center text-accent text-sm font-medium">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                          Live Demo Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Final CTA Section */}
        <Fade direction="up" delay={800} triggerOnce>
          <div className="text-center mt-16">
            <div className="bg-primary text-background rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Build Your AR Experience?
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Transform your e-commerce platform with cutting-edge AR
                technology. Let&apos;s create an immersive virtual try-on
                experience for your customers.
              </p>
              <button
                type="button"
                className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-background hover:text-primary transition duration-300 border-2 border-accent"
              >
                Start Your AR Project
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
