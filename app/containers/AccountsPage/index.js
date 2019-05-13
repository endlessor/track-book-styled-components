import React from 'react';
import Billing from './Billing';
import { Container, PaddedContainer } from '../../components';

import { AccountTabs, AccountTabPane, StyledH1 } from './styles';

function AccountsPage() {
  return (
    <Container height="calc(100vh - 70px)" backgroundColor="#f4f5f8">
      <PaddedContainer padding="18px 39px 0">
        <StyledH1>Accounts</StyledH1>
      </PaddedContainer>

      <AccountTabs defaultActiveKey="1">
        <AccountTabPane tab="Billing" key="1">
          <Billing />
        </AccountTabPane>
        <AccountTabPane tab="Payment Processor" key="2">
          Content of Tab Pane 2
        </AccountTabPane>
        <AccountTabPane tab="Users" key="3">
          Content of Tab Pane 3
        </AccountTabPane>
        <AccountTabPane tab="Pricing" key="4">
          Content of Tab Pane 3
        </AccountTabPane>
      </AccountTabs>
    </Container>
  );
}

export default AccountsPage;
