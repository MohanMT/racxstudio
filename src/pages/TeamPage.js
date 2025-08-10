/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Header from 'parts/Header';
import HeroTeam from 'parts/HeroTeam';
import AllTeam from 'parts/AllTeam';
import Footer from 'parts/Footer';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroTeam />
        <AllTeam />
      </main>
      <Footer />
    </div>
  );
}
