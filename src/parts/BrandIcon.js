/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../elements/Button';

export default function BrandIcon({ scrolled }) {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className={`ml-12 text-4xl font-medium ${scrolled ? 'text-white' : 'text-secondary'}`}>
        Ware
        <span className="text-accent">Tech</span>
      </p>
    </Button>
  );
}

BrandIcon.propTypes = {
  scrolled: PropTypes.bool,
};

BrandIcon.defaultProps = {
  scrolled: false,
};
