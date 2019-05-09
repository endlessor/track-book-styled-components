/**
 * Success Page
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
  FlexRowContainer,
  PaymentRectangle,
  PositionedAbsoluteContainer,
  PositionedRelativeContainer,
  FlexStartContainer,
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
import { EmbbedOval, ParentOval } from '../components/Stepper/Oval';
import RingImage from '../../../assets/images/ring.png';

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

const AcknowText = styled.h1`
  font-size: 42px;
  color: #df8e2d;
`;
const DashedDiv = styled.div`
  & {
    position: relative;
    height: 100%;
    width: 10px;
    margin-left: 234px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari */
    transform: rotate(45deg);
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0px;
    border-left: 2px dashed #babec5;
  }
`;

const PaymentOval = styled(ParentOval)`
  top: calc(50vh - 12px);
  left: -9px;
`;
const AcknowContainer = styled(PositionedAbsoluteContainer)`
  top: 88px;
  right: -25px;
  overflow: hidden;
  padding: 10px;
`;

const FusionContainer = styled(PositionedAbsoluteContainer)`
  bottom: -25px;
  left: -24px;
  overflow: hidden;
  padding: 10px;
`;
const RingImg = styled.img`
  height: 8px;
  margin-top: 8px;
`;
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
