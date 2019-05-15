/**
 * Payment Page
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import {
  StepHeader,
  StepContent,
  StepFooter,
  PaymentType,
  WarningIcon,
  PaymentRectangle,
} from '../components';
import {
  StyledRow,
  StyledCol,
  H1,
  H2,
  P,
  StyledP,
  Container,
  StyledPrimaryButton,
  PositionedRelativeContainer,
  FlexContainer,
  FlexEndContainer,
  FlexRowContainer,
  PaddedContainer,
  FlexStartContainer,
} from '../../../components';
import 'react-sweet-progress/lib/style.css';
import { EmbbedOval } from '../components/Stepper/Oval';

import {
  FusionContainer,
  AcknowContainer,
  PaymentOval,
  DashedDiv,
  AcknowText,
  FusionLogo,
} from './styles';

export default function PaymentConnectPage(props) {
  return (
    <Container height="100vh">
      <StyledRow>
        <StyledCol xs={12} md={8}>
          <FlexContainer>
            <StepHeader>
              <FlexRowContainer>
                <H2>TrackBook</H2>
                <FlexRowContainer>
                  <StyledP fontSize="12px" margin="0 5px 0 0">
                    1 of 3
                  </StyledP>
                  <Progress
                    theme={{
                      success: {
                        symbol: ' ',
                        trailColor: '#f4f5f8',
                        color: '#52ae46',
                      },
                    }}
                    percent={30}
                    status="success"
                  />
                </FlexRowContainer>
              </FlexRowContainer>
              <FlexStartContainer>
                <StyledP fontSize="12px" color="#b0b3b8" margin="8px 0 0 0">
                  Acknow a/c:
                </StyledP>
                <StyledP fontSize="12px" margin="8px 0 0 3px">
                  Nexus Infotech Ltd.
                </StyledP>
              </FlexStartContainer>
            </StepHeader>
            <StepContent>
              <H1>Connect to your payment system</H1>
              <P>
                Connections will be private and secure. TrackBook connects your
                payment’s account with your Acknow account, so payments get
                synced automatically. We will not enable auto-syncing until you
                enable relevant settings.
              </P>
              <PaddedContainer margin="44px 0">
                <StyledRow style={{ height: 'auto' }}>
                  <StyledCol xs={12} md={4}>
                    <PaymentType>
                      <FusionLogo>Fusion</FusionLogo>
                    </PaymentType>
                  </StyledCol>
                  <StyledCol xs={12} md={4}>
                    <PaymentType>
                      <FusionLogo>Fusion</FusionLogo>
                    </PaymentType>
                  </StyledCol>
                  <StyledCol xs={12} md={4}>
                    <PaymentType>
                      <FusionLogo>Fusion</FusionLogo>
                    </PaymentType>
                  </StyledCol>
                </StyledRow>
              </PaddedContainer>

              <FlexStartContainer>
                <WarningIcon />
                <StyledP width="400px" color="#393a3d" margin="0 0 0 16px">
                  New tab will open for you to give Fusion permission. You can
                  disconnect any time.
                </StyledP>
              </FlexStartContainer>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledPrimaryButton
                  onClick={() => props.history.push('/success')}
                  appearance="primary"
                >
                  Next
                </StyledPrimaryButton>
              </FlexEndContainer>
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
              <PaymentRectangle width="330px" height="312px" ovalSize="8px">
                <AcknowText>Acknow</AcknowText>
              </PaymentRectangle>
            </AcknowContainer>
            <FusionContainer>
              <PaymentRectangle width="330px" height="312px" ovalSize="8px">
                <FusionLogo>Fusion</FusionLogo>
              </PaymentRectangle>
            </FusionContainer>
          </PositionedRelativeContainer>
        </StyledCol>
      </StyledRow>
    </Container>
  );
}

PaymentConnectPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
