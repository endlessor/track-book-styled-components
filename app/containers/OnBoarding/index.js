/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Switch, Route } from 'react-router';
import WelcomePage from './WelcomePage';

export default function OnBoarding() {
  return (
    <Switch>
      <Route path="/welcome" component={WelcomePage} />
    </Switch>
  );
}
