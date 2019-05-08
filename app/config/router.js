/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import WelcomePage from 'containers/OnBoarding/WelcomePage';
import PaymentConnectPage from 'containers/OnBoarding/PaymentsConnectPage';
import SuccessPage from 'containers/OnBoarding/SuccessPage';
import PreferencesPage from 'containers/OnBoarding/PreferencesPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import GlobalStyle from '../styles/global-styles';

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  padding: 0;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route
          exact
          path="/onboarding/welcome"
          render={props => <WelcomePage history={props.history} />}
        />
        <Route
          exact
          path="/onboarding/payment-connect"
          render={props => <PaymentConnectPage history={props.history} />}
        />
        <Route
          exact
          path="/onboarding/success"
          render={props => <SuccessPage history={props.history} />}
        />
        <Route
          exact
          path="/onboarding/preferences"
          render={props => <PreferencesPage history={props.history} />}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}

App.propTypes = {
  history: PropTypes.shape({}),
};

export default App;
