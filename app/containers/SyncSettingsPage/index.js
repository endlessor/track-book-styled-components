import React from 'react';
import Paypal from './Paypal';
import { Container, PaddedContainer } from '../../components';

import { AccountTabs, AccountTabPane, StyledH1 } from './styles';

function SyncSettingsPage() {
  return (
    <Container height="calc(100vh - 70px)" backgroundColor="#f4f5f8">
      <PaddedContainer padding="18px 39px 0">
        <StyledH1>Sync Settings</StyledH1>
      </PaddedContainer>

      <AccountTabs defaultActiveKey="1">
        <AccountTabPane tab="Paypal" key="1">
          <Paypal />
        </AccountTabPane>
        <AccountTabPane tab="Stripe" key="2">
          Content of Tab Pane 2
        </AccountTabPane>
        <AccountTabPane tab="General" key="3">
          Content of Tab Pane 3
        </AccountTabPane>
      </AccountTabs>
    </Container>
  );
}

export default SyncSettingsPage;
