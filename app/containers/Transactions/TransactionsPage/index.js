import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../../../components';
import TransactionTable from './components/TransactionTable';
import DetailDrawer from './components/DetailDrawer';
import SyncTab from './components/SyncTab';

import { TransactionsContainer, TabsContainer } from './styles';

import {
  fetchTransactionStats,
  fetchTransactions,
} from '../../../actions/transactionsAction';

const colors = ['#eb8e0e', '#2ca01c', '#00b0bc', '#6d7af7', '#e141ea'];
class TransactionsPage extends Component {
  state = {
    selectedTab: 0,
    isDetailDrawerOpen: false,
  };

  componentDidMount() {
    const { fetchTransactionStats_, fetchTransactions_ } = this.props;
    fetchTransactionStats_();
    fetchTransactions_();
  }

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
    const { transactionStats, transactions } = this.props;
    return (
      <Container height="calc(100vh - 70px)">
        <DetailDrawer
          onClose={this.closeDrawer}
          isOpen={this.state.isDetailDrawerOpen}
        />
        <TabsContainer backgroundColor="#f4f5f8">
          {transactionStats.map((item, index) => (
            <SyncTab
              key={item.type}
              id={index}
              label={item.type}
              color={colors[index]}
              count={item.count}
              selectedTab={this.state.selectedTab}
              selectTab={this.selectTab}
            />
          ))}
        </TabsContainer>
        <TransactionsContainer>
          <TransactionTable
            data={transactions.data}
            selectedTab={this.state.selectedTab}
            openDrawer={this.openDetailDrawer}
          />
        </TransactionsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  transactionStats: state.transactions.transactionStats,
  transactions: state.transactions.transactions,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionStats_: () => {
    dispatch(fetchTransactionStats());
  },
  fetchTransactions_: () => {
    dispatch(fetchTransactions());
  },
});

TransactionsPage.propTypes = {
  transactionStats: PropTypes.array,
  transactions: PropTypes.object,
  fetchTransactionStats_: PropTypes.func,
  fetchTransactions_: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsPage);
