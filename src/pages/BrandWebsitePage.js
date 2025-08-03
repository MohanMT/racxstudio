/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import BrandWebsiteDetail from 'parts/BrandWebsiteDetail';
import Footer from 'parts/Footer';

export default class BrandWebsitePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <BrandWebsiteDetail />
        <Footer />
      </>
    );
  }
}
