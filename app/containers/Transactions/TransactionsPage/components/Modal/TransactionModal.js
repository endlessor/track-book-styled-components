import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import {
  StyledHeader,
  SelectLabel,
  DatePickerWrapper,
  ModalDiv,
} from './styles';

import {
  PaddedContainer,
  StyledSelect,
  StyledDatePicker,
  FlexRowContainer,
  FlexEndContainer,
  StyledNormalButton as StyledNormalBtn,
  StyledPrimaryButton as StyledPrimaryBtn,
} from '../../../../../components';

const StyledNormalButton = styled(StyledNormalBtn)`
  min-width: 101px !important;
  height: 45px !important;
`;
const StyledPrimaryButton = styled(StyledPrimaryBtn)`
  min-width: 101px !important;
  height: 45px !important;
`;

export default class TransactionModal extends Component {
  closeModal() {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const { visible } = this.props;
    return (
      <Modal
        visible={visible}
        width="505"
        height="494"
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}
      >
        <ModalDiv>
          <StyledHeader>Download Previous Transactions</StyledHeader>
          <PaddedContainer padding="8px 0">
            <SelectLabel>Select Dates</SelectLabel>
            <FlexRowContainer>
              <DatePickerWrapper>
                <StyledDatePicker />
              </DatePickerWrapper>
              <DatePickerWrapper>
                <StyledDatePicker />
              </DatePickerWrapper>
            </FlexRowContainer>
          </PaddedContainer>
          <PaddedContainer padding="8px 0">
            <SelectLabel>By Payments System</SelectLabel>
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
            <SelectLabel>By Transaction Types</SelectLabel>
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
          <FlexEndContainer margin="31px 0 0 0">
            <StyledNormalButton
              // minWidth="101px"
              // height="45px"
              appearance="default"
            >
              Clear Filter
            </StyledNormalButton>
            <StyledPrimaryButton
              // minWidth="101px"
              // height="45px"
              appearance="primary"
            >
              Search
            </StyledPrimaryButton>
          </FlexEndContainer>
        </ModalDiv>
      </Modal>
    );
  }
}

TransactionModal.propTypes = {
  closeModal: PropTypes.func,
  visible: PropTypes.bool,
};
