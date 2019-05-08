/**
 * Success Page
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
  FlexContainer,
  FlexEndContainer,
  FlexRowContainer,
  PaddedContainer,
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
              <StyledP fontSize="12px" margin="8px 0 0 0">
                Acknow a/c: Nexus Infotech Ltd. Fusion a/c: Nexus
              </StyledP>
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
                </PaddedContainer>
                <PaddedContainer margin="12px 0">
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
                <PaddedContainer margin="12px 0">
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
                  </StyledCol>
                </StyledRow>
              </PaddedContainer>
            </StepContent>
            <StepFooter>
              <FlexEndContainer margin="0 46px 0 0">
                <StyledNormalButton
                  appearance="default"
                  onClick={() => props.history.push('/onboarding/success')}
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

PreferencesPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
