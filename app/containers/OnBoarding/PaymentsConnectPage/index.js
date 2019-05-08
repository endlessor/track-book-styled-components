/**
 * WelcomePage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Progress } from 'react-sweet-progress';
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
  P,
  StyledP,
  Container,
  StyledButton,
} from '../../../components';
import 'react-sweet-progress/lib/style.css';

export default function PaymentConnectPage() {
  return (
    <Container>
      <StyledRow>
        <StyledCol xs={12} md={8}>
          <FlexContainer>
            <StepHeader>
              <FlexRowContainer>
                <H2>TrackBook</H2>
                <Progress
                  theme={{
                    success: {
                      symbol: ' ',
                      trailColor: '#f4f5f8',
                      color: '#52ae46',
                    },
                  }}
                  percent={88}
                  status="success"
                />
              </FlexRowContainer>
              <StyledP fontSize="12px" margin="8px 0 0 0">
                Acknow a/c: Nexus Infotech Ltd.
              </StyledP>
            </StepHeader>
            <StepContent>
              <H1>Welcome to TrackBook</H1>
              <P>Get your TrackBook up and running in 3 steps</P>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledButton>Get Started1</StyledButton>
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
