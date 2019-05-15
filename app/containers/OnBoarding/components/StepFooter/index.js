import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledP } from '../../../../components';

import stepFooterStyles from './styles';

const StepFooterDiv = styled.div`
  ${stepFooterStyles};
  padding: 6px 14px;
`;

function StepFooter(props) {
  return (
    <StepFooterDiv>
      {props.children}
      <StyledP fontSize="12px">
        © 2019 Nexus Technologies. All Rights Reserved.
      </StyledP>
    </StepFooterDiv>
  );
}

StepFooter.propTypes = {
  children: PropTypes.node,
};
export default StepFooter;
