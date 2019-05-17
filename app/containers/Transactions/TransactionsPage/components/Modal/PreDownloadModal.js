import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledHeader,
  StyledPara,
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
  ErrorText,
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

const settingsSchema = Yup.object().shape({
  fromDate: Yup.string().required('Date must be provided'),
  toDate: Yup.string().required('Date must be provided'),
  paymentSystems: Yup.string().required('Payment System must be provided'),
  transactionTypes: Yup.string().required('Transaction Type must be provided'),
});

export default class PreDownloadModal extends Component {
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
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}
      >
        <Formik
          validationSchema={settingsSchema}
          onSubmit={() => {}}
          enableReinitialize
          initialValues={{
            paymentSystems: '',
            transactionTypes: '',
            fromDate: '',
            toDate: '',
          }}
          render={({
            errors,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
          }) => (
            <ModalDiv>
              <StyledHeader>Download Previous Transactions</StyledHeader>
              <StyledPara>
                Search the transactions first in order to download them
              </StyledPara>
              <PaddedContainer padding="8px 0">
                <SelectLabel>Select Dates</SelectLabel>
                <FlexRowContainer>
                  <DatePickerWrapper>
                    <StyledDatePicker
                      name="fromDate"
                      onBlur={() => setFieldTouched('fromDate', true)}
                      onChange={value => setFieldValue('fromDate', value)}
                    />
                    {errors.fromDate && <ErrorText title={errors.fromDate} />}
                  </DatePickerWrapper>
                  <DatePickerWrapper>
                    <StyledDatePicker
                      name="toDate"
                      onBlur={() => setFieldTouched('toDate', true)}
                      onChange={value => setFieldValue('toDate', value)}
                    />
                    {errors.toDate && <ErrorText title={errors.toDate} />}
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
                  placeholder="Select"
                  id="paymentSystems"
                  onBlur={() => setFieldTouched('paymentSystems', true)}
                  onChange={value =>
                    setFieldValue('paymentSystems', value.label)
                  }
                />
                {errors.paymentSystems && (
                  <ErrorText title={errors.paymentSystems} />
                )}
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
                  placeholder="Select"
                  id="transactionTypes"
                  onBlur={() => setFieldTouched('transactionTypes', true)}
                  onChange={value =>
                    setFieldValue('transactionTypes', value.label)
                  }
                />
                {errors.transactionTypes && (
                  <ErrorText title={errors.transactionTypes} />
                )}
              </PaddedContainer>
              <FlexEndContainer margin="31px 0 0 0">
                <StyledNormalButton appearance="default">
                  Clear Filter
                </StyledNormalButton>
                <StyledPrimaryButton
                  appearance="primary"
                  onClick={handleSubmit}
                >
                  Search
                </StyledPrimaryButton>
              </FlexEndContainer>
            </ModalDiv>
          )}
        />
      </Modal>
    );
  }
}

PreDownloadModal.propTypes = {
  closeModal: PropTypes.func,
  visible: PropTypes.bool,
};
