import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import RoundedStatusLabel from './RoundedStatusLabel';
import TransactionCard from './TransactionCard';
import TransactionListCard from './TransactionListCard';

import {
  DrawContent,
  TransactionHeader,
  TransactionPaymentHeader,
  FusionLogo,
  StyledP14,
  StyledP18,
  ResyncButton,
  UndoButton,
} from './styles';

import {
  FlexRowContainer,
  FlexContainer,
  FlexStartContainer,
} from '../../../../../components';

function DetailDrawer(props) {
  const { onClose, isOpen } = props;
  return (
    <Drawer
      onClose={onClose}
      visible={isOpen}
      placement="right"
      width={731}
      style={{ marginTop: 69 }}
    >
      <DrawContent>
        <FlexStartContainer>
          <TransactionHeader>Transaction#</TransactionHeader>
          <TransactionPaymentHeader>234234234</TransactionPaymentHeader>
          <FusionLogo>Fusion</FusionLogo>
        </FlexStartContainer>
        <FlexRowContainer>
          <FlexRowContainer>
            <StyledP14 margin="0 12px 0 0">Synced on 16/12/18</StyledP14>
            <RoundedStatusLabel label="paid" />
          </FlexRowContainer>
          <FlexRowContainer>
            <ResyncButton appearance="primary">Resync</ResyncButton>
            <UndoButton appearance="default">Undo</UndoButton>
          </FlexRowContainer>
        </FlexRowContainer>
        <FlexContainer margin="27px 0">
          <StyledP18>Transactions</StyledP18>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </FlexContainer>
        <FlexContainer margin="27px 0">
          <StyledP18>List</StyledP18>
          <TransactionListCard />
          <TransactionListCard />
          <TransactionListCard />
        </FlexContainer>
      </DrawContent>
    </Drawer>
  );
}

DetailDrawer.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default DetailDrawer;
