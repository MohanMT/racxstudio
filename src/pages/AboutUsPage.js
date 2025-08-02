/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import AboutUs from 'parts/AboutUs';
import Footer from 'parts/Footer';

export default class AboutUsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <AboutUs />
        <Footer />
      </>
    );
  }
}
