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
  PaymentRectangle,
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
  PositionedRelativeContainer,
  FlexStartContainer,
  FlexContainer,
  FlexEndContainer,
  FlexRowContainer,
} from '../../../components';
import 'react-sweet-progress/lib/style.css';
import { EmbbedOval } from '../components/Stepper/Oval';
import RingImage from '../../../assets/images/ring.png';

import {
  RingImg,
  FusionContainer,
  AcknowContainer,
  PaymentOval,
  DashedDiv,
  AcknowText,
  FusionLogo,
} from './styles';

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
              <FlexStartContainer>
                <StyledP fontSize="12px" color="#b0b3b8" margin="8px 0 0 0">
                  Acknow a/c:
                </StyledP>
                <StyledP fontSize="12px" margin="8px 6px 0 3px">
                  Nexus Infotech Ltd.
                </StyledP>
                <RingImg src={RingImage} alt="Ring" />
                <StyledP fontSize="12px" color="#b0b3b8" margin="8px 0 0 6px">
                  Fusion a/c:
                </StyledP>
                <StyledP fontSize="12px" margin="8px 0 0 3px">
                  Nexus
                </StyledP>
              </FlexStartContainer>
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
                  onClick={() => props.history.push('/paymentconnectors')}
                >
                  Back
                </StyledNormalButton>
                <StyledPrimaryButton
                  appearance="primary"
                  onClick={() => props.history.push('/preferences')}
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
        <StyledCol xs={12} md={4}>
          <PositionedRelativeContainer backgroundColor="#f4f5f8">
            <DashedDiv>
              <PaymentOval>
                <EmbbedOval />
              </PaymentOval>
            </DashedDiv>
            <AcknowContainer>
              <PaymentRectangle width="240px" height="233px" ovalSize="6px">
                <AcknowText>Acknow</AcknowText>
              </PaymentRectangle>
            </AcknowContainer>
            <FusionContainer>
              <PaymentRectangle width="400px" height="347px" ovalSize="9px">
                <FusionLogo>Fusion</FusionLogo>
              </PaymentRectangle>
            </FusionContainer>
          </PositionedRelativeContainer>
        </StyledCol>
      </StyledRow>
    </Container>
  );
}

SuccessPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
