import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';

// Available layouts
import {
  // Main as MainLayout,
  // Fluid as FluidLayout,
  // Fixed as FixedLayout,
  BrickMmo as BrickMmoLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
  Portfolio as PortfolioView,
  PortfolioCdmo as PortfolioCdmoView,
  PortfolioLogos as PortfolioLogosView,
  PortfolioSmartCity as PortfolioSmartCityView,
  PortfolioBrevisRefero as PortfolioBrevisReferoView,
  Education as EducationView,
  Systems as SystemsView,
  // SystemPanel as SystemPanelView,
  // SystemsColours as SystemsColoursView,
  Research as ResearchView,
  GetStarted as GetStartedView,
  Bio as BioView,
} from './views/pages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            title="Home"
            {...matchProps}
            component={HomeView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/bio"
        element={((matchProps) => (
          <WithLayout
            title="Bio 2024"
            {...matchProps}
            component={BioView}
            layout={BrickMmoLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/portfolio"
        element={((matchProps) => (
          <WithLayout
            title="Portfolio"
            {...matchProps}
            component={PortfolioView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/portfolio-logos"
        element={((matchProps) => (
          <WithLayout
            title="Logos"
            {...matchProps}
            component={PortfolioLogosView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/portfolio-smart-city"
        element={((matchProps) => (
          <WithLayout
            title="Smart City"
            {...matchProps}
            component={PortfolioSmartCityView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/portfolio-bio-2024"
        element={((matchProps) => (
          <WithLayout
            title="Bio 2024"
            {...matchProps}
            component={PortfolioCdmoView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/education"
        element={((matchProps) => (
          <WithLayout
            title="Education"
            {...matchProps}
            component={EducationView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/systems"
        element={((matchProps) => (
          <WithLayout
            title="Systems"
            {...matchProps}
            component={SystemsView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/research"
        element={((matchProps) => (
          <WithLayout
            title="Research"
            {...matchProps}
            component={ResearchView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/get-started"
        element={((matchProps) => (
          <WithLayout
            title="Get Started"
            {...matchProps}
            component={GetStartedView}
            layout={BrickMmoLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
