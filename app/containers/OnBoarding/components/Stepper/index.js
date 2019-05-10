import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CircleStepItem from './CircleStepItem';

import { StyledP } from '../../../../components';
import { FlexStartContainer } from '../../../../components/FlexContainer';

const StepperContainer = styled(FlexStartContainer)`
  z-index: 99;
`;

function Stepper(props) {
  return (
    <StepperContainer alignItem={props.alignItem}>
      <CircleStepItem>{props.number}</CircleStepItem>
      <StyledP style={{ width: '160px', marginLeft: '26px' }} fontSize="16px">
        {props.title}
      </StyledP>
    </StepperContainer>
  );
}

Stepper.propTypes = {
  alignItem: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string,
};

export default Stepper;
