/**
 * WelcomePage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  StepHeader,
  StepContent,
  StepFooter,
  FlexContainer,
  FlexEndContainer,
  Stepper,
} from '../components';
import {
  StyledRow,
  StyledCol,
  H1,
  H2,
  P,
  StyledP,
  Container,
  StyledButton,
} from '../../../components';
import Oval from '../components/Stepper/Oval';

const DashedDiv = styled.div`
  & {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &:before {
    content: '';
    position: absolute;
    left: 34px;
    top: 0;
    height: 100%;
    border-left: 2px dashed #babec5;
  }
`;

export default function WelcomePage(props) {
  return (
    <Container>
      <StyledRow>
        <StyledCol xs={12} md={8}>
          <FlexContainer>
            <StepHeader>
              <H2>TrackBook</H2>
            </StepHeader>
            <StepContent>
              <H1>Welcome to TrackBook</H1>
              <P>Get your TrackBook up and running in 3 steps</P>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledButton
                  onClick={() =>
                    props.history.push('/onboarding/payment-connect')
                  }
                >
                  Get Started
                </StyledButton>
              </FlexEndContainer>
              <StyledP fontSize="12px">
                © 2019 Nexus Technologies. All Rights Reserved.
              </StyledP>
            </StepFooter>
          </FlexContainer>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <FlexContainer padding="130px 25%" backgroundColor="#f4f5f8">
            <DashedDiv>
              <Stepper number={1} title="Connect TrackBook with AckNow" />
              <Oval />
              <Stepper number={2} title="Connect TrackBook with Fusion" />
              <Stepper number={3} title="Add your preferences" />
            </DashedDiv>
          </FlexContainer>
        </StyledCol>
      </StyledRow>
    </Container>
  );
}

WelcomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
