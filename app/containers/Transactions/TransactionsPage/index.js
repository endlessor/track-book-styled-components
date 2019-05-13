import React, { Component } from 'react';

import { Container } from '../../../components';
import TransactionTable from './components/TransactionTable';
import DetailDrawer from './components/DetailDrawer';
import SyncTab from './components/SyncTab';

import { TransactionsContainer, TabsContainer } from './styles';

class TransactionsPage extends Component {
  state = {
    selectedTab: 1,
    isDetailDrawerOpen: false,
  };

  selectTab = tabId => {
    this.setState({
      selectedTab: tabId,
    });
  };

  openDetailDrawer = () => {
    this.setState({
      isDetailDrawerOpen: true,
    });
  };

  closeDrawer = () => {
    this.setState({
      isDetailDrawerOpen: false,
    });
  };

  render() {
    return (
      <Container height="calc(100vh - 70px)">
        <DetailDrawer
          onClose={this.closeDrawer}
          isOpen={this.state.isDetailDrawerOpen}
        />
        <TabsContainer backgroundColor="#f4f5f8">
          <SyncTab
            id={1}
            label="Not Synced"
            color="#eb8e0e"
            selectedTab={this.state.selectedTab}
            selectTab={this.selectTab}
          />
          <SyncTab
            id={2}
            label="Synced"
            color="#2ca01c"
            selectedTab={this.state.selectedTab}
            selectTab={this.selectTab}
          />
          <SyncTab
            id={3}
            label="Error"
            color="#00b0bc"
            selectedTab={this.state.selectedTab}
            selectTab={this.selectTab}
          />
          <SyncTab
            id={4}
            label="Igonored"
            color="#6d7af7"
            selectedTab={this.state.selectedTab}
            selectTab={this.selectTab}
          />
          <SyncTab
            id={5}
            label="Removed"
            color="#e141ea"
            selectedTab={this.state.selectedTab}
            selectTab={this.selectTab}
          />
        </TabsContainer>
        <TransactionsContainer>
          <TransactionTable openDrawer={this.openDetailDrawer} />
        </TransactionsContainer>
      </Container>
    );
  }
}
export default TransactionsPage;
