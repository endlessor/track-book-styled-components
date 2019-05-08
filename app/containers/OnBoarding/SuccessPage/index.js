/**
 * Success Page
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StepHeader,
  StepContent,
  StepFooter,
  FlexContainer,
  FlexEndContainer,
  FlexRowContainer,
} from '../components';
import {
  StyledRow,
  StyledCol,
  H1,
  H2,
  StyledP,
  Container,
  StyledPrimaryButton,
  StyledNormalButton,
} from '../../../components';
import 'react-sweet-progress/lib/style.css';

export default function SuccessPage(props) {
  return (
    <Container>
      <StyledRow>
        <StyledCol xs={12} md={8}>
          <FlexContainer>
            <StepHeader>
              <FlexRowContainer>
                <H2>TrackBook</H2>
              </FlexRowContainer>
              <StyledP fontSize="12px" margin="8px 0 0 0">
                Acknow a/c: Nexus Infotech Ltd. Fusion a/c: Nexus
              </StyledP>
            </StepHeader>
            <StepContent>
              <H1>Great!</H1>
              <StyledP fontSize="20px">
                Acknow is connected to your Fusion account now
              </StyledP>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledNormalButton
                  appearance="default"
                  onClick={() =>
                    props.history.push('/onboarding/payment-connect')
                  }
                >
                  Back
                </StyledNormalButton>
                <StyledPrimaryButton
                  appearance="primary"
                  onClick={() => props.history.push('/onboarding/preferences')}
                >
                  Next
                </StyledPrimaryButton>
              </FlexEndContainer>
              <StyledP fontSize="12px">
                © 2019 Nexus Technologies. All Rights Reserved.
              </StyledP>
            </StepFooter>
          </FlexContainer>
        </StyledCol>
        <StyledCol xs={12} md={4} />
      </StyledRow>
    </Container>
  );
}

SuccessPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
