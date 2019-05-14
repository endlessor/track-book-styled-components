import React from 'react';
import PropTypes from 'prop-types';
import CustomDropDown from '../DropDown';
import { CardContainer, HeaderTitle, HeaderValue } from './styles';

import { FlexEndContainer } from '../../../../components';

function ChartCard(props) {
  const { children, ddDatas, headerTitle, headerValue } = props;

  return (
    <CardContainer>
      <FlexEndContainer>
        <CustomDropDown ddDatas={ddDatas} />
      </FlexEndContainer>
      <HeaderTitle>{headerTitle}</HeaderTitle>
      <HeaderValue>{headerValue}</HeaderValue>
      {children}
    </CardContainer>
  );
}

ChartCard.propTypes = {
  children: PropTypes.node,
  ddDatas: PropTypes.string,
  headerTitle: PropTypes.string,
  headerValue: PropTypes.string,
};
export default ChartCard;
