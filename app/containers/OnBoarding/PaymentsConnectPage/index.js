/**
 * Payment Page
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import {
  StepHeader,
  StepContent,
  StepFooter,
  FlexContainer,
  FlexEndContainer,
  FlexRowContainer,
  PaymentType,
  PaddedContainer,
  FlexStartContainer,
  WarningIcon,
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
} from '../../../components';
import 'react-sweet-progress/lib/style.css';

const FusionLogo = styled.h1`
  // font-family: AvantGarde;
  font-size: 42px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #0077c5;
  &::first-letter {
    color: #83d478;
  }
`;

export default function PaymentConnectPage(props) {
  return (
    <Container>
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
              <StyledP fontSize="12px" margin="8px 0 0 0">
                Acknow a/c: Nexus Infotech Ltd.
              </StyledP>
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
                <StyledP width="300px" margin="0 0 0 16px">
                  New tab will open for you to give Fusion permission. You can
                  disconnect any time.
                </StyledP>
              </FlexStartContainer>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledPrimaryButton
                  onClick={() => props.history.push('/onboarding/success')}
                  appearance="primary"
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

PaymentConnectPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
