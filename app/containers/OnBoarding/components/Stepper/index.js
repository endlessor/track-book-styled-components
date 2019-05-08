import React from 'react';
import PropTypes from 'prop-types';
import CircleStepItem from './CircleStepItem';

import { StyledP } from '../../../../components';
import { FlexRowContainer } from '../FlexContainer';

function Stepper(props) {
  return (
    <FlexRowContainer alignItem={props.alignItem}>
      <CircleStepItem>{props.number}</CircleStepItem>
      <StyledP style={{ width: '160px' }} fontSize="16px">
        {props.title}
      </StyledP>
    </FlexRowContainer>
  );
}

Stepper.propTypes = {
  alignItem: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string,
};

export default Stepper;
