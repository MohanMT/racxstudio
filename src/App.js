/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';
import AboutUsPage from 'pages/AboutUsPage';
import ContactUsPage from 'pages/ContactUsPage';
import VirtualTryOnPage from 'pages/VirtualTryOnPage';
import SnapLensPage from 'pages/SnapLensPage';
import EcommerceAppPage from 'pages/EcommerceAppPage';
import BrandWebsitePage from 'pages/BrandWebsitePage';

import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';

import './assets/css/styles.css';
import './cursor.js';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/about" element={<AboutUsPage />} />
        <Route exact path="/contact" element={<ContactUsPage />} />
        <Route exact path="/virtual-try-on" element={<VirtualTryOnPage />} />
        <Route exact path="/snapchat-lens" element={<SnapLensPage />} />
        <Route exact path="/ecommerce-app" element={<EcommerceAppPage />} />
        <Route exact path="/brand-website" element={<BrandWebsitePage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
