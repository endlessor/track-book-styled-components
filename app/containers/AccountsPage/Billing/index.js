import React from 'react';
import { Progress } from 'react-sweet-progress';
import {
  PaddedContainer,
  FlexContainer,
  FlexRowContainer,
  FlexStartContainer,
  StyledRow,
  StyledCol,
} from '../../../components';

import {
  PlanDiv,
  PlanInfoDiv,
  Line,
  FlexNoHeightContainer,
  InvoiceList,
  PdfA,
} from './styles';

import {
  StyledP22,
  StyledP12,
  StyledP24,
  StyledP18,
  StyledP16,
  UpgradeButton,
  CancelButton,
  UpdateButton,
  LeftNormalButton,
} from '../styles';

import 'react-sweet-progress/lib/style.css';

class Billing extends React.Component {
  renderInvoiceListItems = () =>
    [1, 2, 3, 4, 5].map(item => (
      <InvoiceList key={`${item}`}>
        <StyledP16 color="#393a3d">#134589</StyledP16>
        <StyledP16 color="#393a3d">Jan 4, 2018</StyledP16>
        <StyledP16 color="#393a3d">$25</StyledP16>
        <PdfA>PDF</PdfA>
      </InvoiceList>
    ));

  render() {
    return (
      <PaddedContainer>
        <FlexContainer>
          <StyledP22>Current Plan Info</StyledP22>
          <PlanDiv>
            <PlanInfoDiv width="30%">
              <FlexContainer>
                <StyledP12>PLAN NAME</StyledP12>
                <StyledP24>Basic</StyledP24>
              </FlexContainer>
              <FlexRowContainer margin="37px 0 0 0">
                <UpgradeButton appearance="primary">Upgrade</UpgradeButton>
                <CancelButton appearance="default">Cancel Plan</CancelButton>
              </FlexRowContainer>
            </PlanInfoDiv>
            <Line />
            <PlanInfoDiv width="20%">
              <FlexContainer>
                <StyledP12>PLAN STATUS</StyledP12>
                <StyledP18>Trial</StyledP18>
              </FlexContainer>
              <FlexContainer margin="28px 0 0 0">
                <StyledP12>RENEWAL DATE</StyledP12>
                <StyledP18>11 Jan 2019</StyledP18>
              </FlexContainer>
            </PlanInfoDiv>
            <Line />
            <PlanInfoDiv width="25%">
              <FlexContainer>
                <StyledP12>CREDIT CONSUMPTION</StyledP12>
                <FlexRowContainer padding="0 20% 0 0">
                  <Progress
                    type="circle"
                    theme={{
                      success: {
                        symbol: ' ',
                        trailColor: '#f4f5f8',
                        color: '#83d478',
                      },
                    }}
                    strokeWidth={12}
                    width={40}
                    percent={66}
                    status="success"
                  />
                  <StyledP18>1000 / 2000</StyledP18>
                </FlexRowContainer>
                <FlexStartContainer>
                  <UpdateButton appearance="default">Add Credits</UpdateButton>
                </FlexStartContainer>
              </FlexContainer>
            </PlanInfoDiv>
            <Line />
            <PlanInfoDiv width="25%">
              <FlexContainer>
                <StyledP12>PAYMENT METHOD</StyledP12>
                <StyledP16 color="#393a3d">John Andersen</StyledP16>
                <StyledP16>**** **** **** 7700</StyledP16>
                <FlexStartContainer>
                  <UpdateButton appearance="default">Update</UpdateButton>
                </FlexStartContainer>
              </FlexContainer>
            </PlanInfoDiv>
          </PlanDiv>
        </FlexContainer>
        <FlexContainer margin="60px 0 0 0">
          <StyledRow>
            <StyledCol xs={12} md={6}>
              <FlexRowContainer>
                <StyledP22>Invoice List</StyledP22>
              </FlexRowContainer>
              {this.renderInvoiceListItems()}
              <LeftNormalButton appearance="default">
                Show all invoices
              </LeftNormalButton>
            </StyledCol>
            <StyledCol xs={12} md={6}>
              <FlexRowContainer>
                <StyledP22>Update Invoice Information</StyledP22>
                <UpdateButton appearance="default">Update</UpdateButton>
              </FlexRowContainer>
              <FlexNoHeightContainer>
                <StyledP16 color="#393a3d">Billing Address</StyledP16>
                <StyledP16>
                  C-301, Tirthbhumi Apartments, Snehkunj, 380015, Ahmeda...
                </StyledP16>
              </FlexNoHeightContainer>
              <FlexNoHeightContainer>
                <StyledP16 color="#393a3d">Billing Email</StyledP16>
                <StyledP16>john@optsoftware.com</StyledP16>
              </FlexNoHeightContainer>
              <FlexNoHeightContainer>
                <StyledP16 color="#393a3d">Company Name</StyledP16>
                <StyledP16>Opt Software</StyledP16>
              </FlexNoHeightContainer>
              <FlexNoHeightContainer>
                <StyledP16 color="#393a3d">Tax No</StyledP16>
                <StyledP16>34738223</StyledP16>
              </FlexNoHeightContainer>
            </StyledCol>
          </StyledRow>
        </FlexContainer>
      </PaddedContainer>
    );
  }
}

export default Billing;
