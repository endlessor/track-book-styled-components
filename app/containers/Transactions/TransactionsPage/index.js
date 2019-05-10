import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { PaddedContainer, Container } from '../../../components';
import TransactionTable from './components/TransactionTable';

const TransactionsContainer = styled(PaddedContainer)`
  height: 100%;
  overflow: hidden;
`;

function TransactionsPage() {
  return (
    <Container>
      <Header />
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
}

export default TransactionsPage;
