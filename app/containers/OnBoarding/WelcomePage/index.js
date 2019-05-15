/**
 * WelcomePage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StepHeader, StepContent, StepFooter, Stepper } from '../components';
import {
  StyledRow,
  StyledCol,
  H1,
  H2,
  P,
  Container,
  StyledPrimaryButton,
  FlexContainer,
  FlexEndContainer,
} from '../../../components';
import Oval from '../components/Stepper/Oval';

import { DashedDiv } from './styles';

export default function WelcomePage(props) {
  return (
    <Container height="100vh">
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
                <StyledPrimaryButton
                  appearance="primary"
                  onClick={() => props.history.push('/paymentconnectors')}
                >
                  Get Started
                </StyledPrimaryButton>
              </FlexEndContainer>
            </StepFooter>
          </FlexContainer>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <FlexContainer padding="15% 66px" backgroundColor="#f4f5f8">
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
