import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import WithLayout from "WithLayout";

// Available layouts
import { BrickMmo as BrickMmoLayout } from "./layouts";

// Landing pages
import {
   Home as HomeView,
   Portfolio as PortfolioView,
   Education as EducationView,
   Systems as SystemsView,
   Research as ResearchView,
   GetStarted as GetStartedView,
} from "./views/pages";

const Routes = () => {
   return (
      <ReactRoutes>
         <Route
            exact
            path='/'
            element={((matchProps) => (
               <WithLayout title='Home' {...matchProps} component={HomeView} layout={BrickMmoLayout} />
            ))()}
         />
         <Route
            exact
            path='/portfolio'
            element={((matchProps) => (
               <WithLayout title='Portfolio' {...matchProps} component={PortfolioView} layout={BrickMmoLayout} />
            ))()}
         />
         <Route
            exact
            path='/education'
            element={((matchProps) => (
               <WithLayout title='Education' {...matchProps} component={EducationView} layout={BrickMmoLayout} />
            ))()}
         />
         <Route
            exact
            path='/systems'
            element={((matchProps) => (
               <WithLayout title='Systems' {...matchProps} component={SystemsView} layout={BrickMmoLayout} />
            ))()}
         />
         <Route
            exact
            path='/research'
            element={((matchProps) => (
               <WithLayout title='Research' {...matchProps} component={ResearchView} layout={BrickMmoLayout} />
            ))()}
         />
         <Route
            exact
            path='/get-started'
            element={((matchProps) => (
               <WithLayout title='Get Started' {...matchProps} component={GetStartedView} layout={BrickMmoLayout} />
            ))()}
         />
      </ReactRoutes>
   );
};

export default Routes;
