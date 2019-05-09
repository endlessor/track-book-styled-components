/**
 * Success Page
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
// import LineTo from 'react-lineto';

import {
  StepHeader,
  StepContent,
  StepFooter,
  FlexContainer,
  FlexEndContainer,
  FlexRowContainer,
  PaddedContainer,
  FlexStartContainer,
  PositionedRelativeContainer,
  // Circle,
} from '../components';
import {
  StyledRow,
  StyledCol,
  H1,
  H2,
  StyledCheckbox,
  StyledP,
  Container,
  StyledPrimaryButton,
  StyledNormalButton,
  StyledSelect,
} from '../../../components';
import 'react-sweet-progress/lib/style.css';
import RingImage from '../../../assets/images/ring.png';
import PaymentHowToImage from '../../../assets/images/payment_howto.png';
const RingImg = styled.img`
  height: 8px;
  margin-top: 8px;
`;
const PaymentHowToimg = styled.img`
  width: calc(100% - 54px);
  border-radius: 18px;
`;
const PrefPositionedRelativeContainer = styled(PositionedRelativeContainer)`
  overflow: inherit;
`;
// const FirstCircle = styled(Circle)`
//   top: 40px;
//   right: -27px;
// `
// const SecondCircle = styled(Circle)`
//   top: 80px;
//   right: -27px;
// `
export default function PreferencesPage(props) {
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
                    2 of 3
                  </StyledP>
                  <Progress
                    theme={{
                      success: {
                        symbol: ' ',
                        trailColor: '#f4f5f8',
                        color: '#52ae46',
                      },
                    }}
                    percent={66}
                    status="success"
                  />
                </FlexRowContainer>
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
              <PaddedContainer margin="0 120px 0 0">
                <H1>Manage your sales preferences</H1>
                <PaddedContainer padding="8px 0">
                  <StyledP>Bank account to deposit sales/income</StyledP>
                  <StyledSelect
                    className="single-select"
                    classNamePrefix="react-select"
                    options={[
                      { label: 'Adelaide', value: 'adelaide' },
                      { label: 'Brisbane', value: 'brisbane' },
                      { label: 'Canberra', value: 'canberra' },
                      { label: 'Darwin', value: 'darwin' },
                      { label: 'Hobart', value: 'hobart' },
                      { label: 'Melbourne', value: 'melbourne' },
                      { label: 'Perth', value: 'perth' },
                      { label: 'Sydney', value: 'sydney' },
                    ]}
                    placeholder="Choose a City"
                  />
                </PaddedContainer>
                <PaddedContainer padding="8px 0">
                  <PrefPositionedRelativeContainer>
                    <StyledP>Select your payment method</StyledP>
                    <StyledSelect
                      className="single-select"
                      classNamePrefix="react-select"
                      options={[
                        { label: 'Adelaide', value: 'adelaide' },
                        { label: 'Brisbane', value: 'brisbane' },
                        { label: 'Canberra', value: 'canberra' },
                        { label: 'Darwin', value: 'darwin' },
                        { label: 'Hobart', value: 'hobart' },
                        { label: 'Melbourne', value: 'melbourne' },
                        { label: 'Perth', value: 'perth' },
                        { label: 'Sydney', value: 'sydney' },
                      ]}
                      placeholder="Choose a City"
                    />
                    {/* <FirstCircle className="A" size="11px" />
                    <SecondCircle className="B" size="11px" />
                    <LineTo from="A" to="B" borderColor="#8dd1fd" borderStyle="dashed" /> */}
                  </PrefPositionedRelativeContainer>
                </PaddedContainer>
                <PaddedContainer margin="8px 0">
                  <StyledCheckbox
                    defaultChecked
                    isFullWidth
                    label="Apply default product/service?"
                    value="Apply default product/service?"
                    // onChange={this.onChange}
                    name="checkbox-checked"
                  />
                </PaddedContainer>
                <PaddedContainer padding="8px 0">
                  <StyledP>Record default product/ service as</StyledP>
                  <StyledSelect
                    className="single-select"
                    classNamePrefix="react-select"
                    options={[
                      { label: 'Adelaide', value: 'adelaide' },
                      { label: 'Brisbane', value: 'brisbane' },
                      { label: 'Canberra', value: 'canberra' },
                      { label: 'Darwin', value: 'darwin' },
                      { label: 'Hobart', value: 'hobart' },
                      { label: 'Melbourne', value: 'melbourne' },
                      { label: 'Perth', value: 'perth' },
                      { label: 'Sydney', value: 'sydney' },
                    ]}
                    placeholder="Choose a City"
                  />
                </PaddedContainer>
                <PaddedContainer margin="8px 0">
                  <StyledCheckbox
                    defaultChecked
                    isFullWidth
                    label="Make transaction taxable"
                    value="Make transaction taxable"
                    // onChange={this.onChange}
                    name="checkbox-checked"
                  />
                </PaddedContainer>
                <StyledRow style={{ height: 'auto' }}>
                  <StyledCol xs={12} md={6}>
                    <PaddedContainer padding="8px 4px 8px 0">
                      <StyledP>Default Tax code</StyledP>
                      <StyledSelect
                        className="single-select"
                        classNamePrefix="react-select"
                        options={[
                          { label: 'Adelaide', value: 'adelaide' },
                          { label: 'Brisbane', value: 'brisbane' },
                        ]}
                        placeholder="Choose a City"
                      />
                    </PaddedContainer>
                  </StyledCol>
                  <StyledCol xs={12} md={6}>
                    <PaddedContainer padding="8px 0 8px 4px">
                      <StyledP>Zero rated tax code:</StyledP>
                      <StyledSelect
                        className="single-select"
                        classNamePrefix="react-select"
                        options={[
                          { label: 'Adelaide', value: 'adelaide' },
                          { label: 'Brisbane', value: 'brisbane' },
                        ]}
                        placeholder="Choose a City"
                      />
                    </PaddedContainer>
                  </StyledCol>
                </StyledRow>
              </PaddedContainer>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledNormalButton
                  appearance="default"
                  onClick={() => props.history.push('/success')}
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
            <StyledP fontSize="20px" margin="43px 64px" color="#393a3d">
              Here it is how it looks like in Acknow
            </StyledP>
            <StyledP fontSize="14px" margin="65px 64px 13px" color="#393a3d">
              Choose the method you have chosen in your Acknow account
            </StyledP>
            <FlexEndContainer>
              <PaymentHowToimg src={PaymentHowToImage} alt="Payment How to" />
            </FlexEndContainer>
          </PositionedRelativeContainer>
        </StyledCol>
      </StyledRow>
    </Container>
  );
}

PreferencesPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
