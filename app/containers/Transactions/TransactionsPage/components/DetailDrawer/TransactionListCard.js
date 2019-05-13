import React from 'react';
import styled from 'styled-components';
import WarningIcon from './WarningIcon';
import RoundedStatusLabel from './RoundedStatusLabel';

import {
  FlexRowContainer,
  FlexContainer,
  StyledNormalButton,
} from '../../../../../components';

import { StyledP14 } from './styles';
const CardDiv = styled(FlexRowContainer)`
  object-fit: contain;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(186, 190, 197, 0.35);
  background-color: #ffffff;
  padding: 8px 27px 12px 25px;
  margin-bottom: 13px;
`;
const PaymentHeader = styled.p`
  font-family: LibreFranklin;
  font-size: 16px;
  line-height: 2.5;
  color: #0077c5;
  margin: 0;
`;

const UpgradeButton = styled(StyledNormalButton)`
  height: 35px !important;
  min-width: 77px !important;
  border-radius: 3px;
  border: 1px solid #8d9096 !important;
  background: transparent !important;
}`;

const BorderedP = styled.p`
  font-size: 13px;
  line-height: 3.08;
  text-align: right;
  color: #8d9096;
  margin: 0 20px 0 0;
`;
function TransactionCard() {
  return (
    <CardDiv>
      <FlexContainer>
        <FlexRowContainer padding="0 0 10px 0">
          <PaymentHeader>Expense</PaymentHeader>
          <WarningIcon />
          <RoundedStatusLabel
            label="created"
            fontSize="10px"
            margin="0 7px"
            padding="1px 0"
          />
        </FlexRowContainer>
        <StyledP14>T-shirt</StyledP14>
      </FlexContainer>
      <FlexRowContainer>
        <BorderedP>Not found?</BorderedP>
        <UpgradeButton>Fix</UpgradeButton>
      </FlexRowContainer>
    </CardDiv>
  );
}

export default TransactionCard;
