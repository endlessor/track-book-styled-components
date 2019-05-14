import React from 'react';
import PropTypes from 'prop-types';
import CustomDropDown from '../DropDown';
import {
  PositionedRelativeDiv,
  CardContainer,
  HeaderTitle,
  HeaderValue,
  ChartWrapper,
} from './styles';

import { FlexEndContainer } from '../../../../components';

function ChartCard(props) {
  const { children, ddDatas, headerTitle, headerValue } = props;

  return (
    <PositionedRelativeDiv>
      <CardContainer>
        <FlexEndContainer>
          <CustomDropDown ddDatas={ddDatas} />
        </FlexEndContainer>
        <HeaderTitle>{headerTitle}</HeaderTitle>
        <HeaderValue>{headerValue}</HeaderValue>
        <ChartWrapper>{children}</ChartWrapper>
      </CardContainer>
    </PositionedRelativeDiv>
  );
}

ChartCard.propTypes = {
  children: PropTypes.node,
  ddDatas: PropTypes.array,
  headerTitle: PropTypes.string,
  headerValue: PropTypes.string,
};
export default ChartCard;
