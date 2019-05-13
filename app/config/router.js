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
import { Switch, Route, withRouter } from 'react-router';
import WelcomePage from 'containers/OnBoarding/WelcomePage';
import PaymentConnectPage from 'containers/OnBoarding/PaymentsConnectPage';
import SuccessPage from 'containers/OnBoarding/SuccessPage';
import PreferencesPage from 'containers/OnBoarding/PreferencesPage';
import TransactionsPage from 'containers/Transactions/TransactionsPage';
import AccountsPage from 'containers/AccountsPage';
import AnalyticsPage from 'containers/Transactions/AnalyticsPage';
import SyncSettingsPage from 'containers/SyncSettingsPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Transactions/Header';
import LeftDrawer from 'containers/Transactions/TransactionsPage/components/LeftDrawer';

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  padding: 0;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    isDrawerOpen: false,
  };

  openDrawer = () => {
    this.setState({
      isDrawerOpen: true,
    });
  };

  closeDrawer = () => {
    this.setState({
      isDrawerOpen: false,
    });
  };

  render() {
    const { history } = this.props;
    const { pathname } = history.location;

    return (
      <AppWrapper>
        <LeftDrawer
          onClose={this.closeDrawer}
          isOpen={this.state.isDrawerOpen}
        />
        {(pathname === '/transactions' ||
          pathname === '/accounts' ||
          pathname === '/sync-settings' ||
          pathname === '/analytics') && (
          <Header history={history} openDrawer={this.openDrawer} />
        )}
        <Switch>
          <Route
            exact
            path="/welcome"
            render={props => <WelcomePage history={props.history} />}
          />
          <Route
            exact
            path="/paymentconnectors"
            render={props => <PaymentConnectPage history={props.history} />}
          />
          <Route
            exact
            path="/success"
            render={props => <SuccessPage history={props.history} />}
          />
          <Route
            exact
            path="/preferences"
            render={props => <PreferencesPage history={props.history} />}
          />
          <Route
            exact
            path="/transactions"
            render={props => <TransactionsPage history={props.history} />}
          />
          <Route
            exact
            path="/analytics"
            render={props => <AnalyticsPage history={props.history} />}
          />
          <Route
            exact
            path="/sync-settings"
            render={props => <SyncSettingsPage history={props.history} />}
          />
          <Route
            exact
            path="/accounts"
            render={props => <AccountsPage history={props.history} />}
          />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({}),
};

export default withRouter(App);
