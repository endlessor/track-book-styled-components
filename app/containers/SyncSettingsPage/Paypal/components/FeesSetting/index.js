import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  PaddedContainer,
  FlexStartContainer,
  StyledSelect,
  StyledCheckbox,
  ErrorText,
} from '../../../../../components';

import {
  StyledP16,
  StyledP22,
  FeesContainer,
  SaveButton,
  ResetButton,
  PrefPositionedRelativeContainer,
} from './styles';

const settingsSchema = Yup.object().shape({
  bankAccounts: Yup.string().required('BankAccounts must be provided'),
  feeExpense: Yup.string().required('Fee Expense must be provided'),
  defaultVendor: Yup.string().required('Default Vendor must be provided'),
  defaultVendorCheck: Yup.bool().oneOf([true], 'Must Check Default Vendor'),
});

function FeesSettings(props) {
  return (
    <Formik
      validationSchema={settingsSchema}
      onSubmit={() => {}}
      enableReinitialize
      initialValues={{
        bankAccounts: '',
        feeExpense: '',
        defaultVendorCheck: false,
        defaultVendor: '',
      }}
      render={({
        errors,
        values,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
      }) => (
        <FeesContainer margin="0 120px 0 0">
          <StyledP22>Fees Settings</StyledP22>
          <PaddedContainer padding="8px 0" margin="15px 0 0 0">
            <StyledP16>
              Bank/ Credit card account to record payment fees?
            </StyledP16>
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
              id="bankAccounts"
              onBlur={() => setFieldTouched('bankAccounts', true)}
              onChange={value => setFieldValue('bankAccounts', value.label)}
            />
            {errors.bankAccounts && <ErrorText title={errors.bankAccounts} />}
          </PaddedContainer>
          <PaddedContainer padding="8px 0">
            <PrefPositionedRelativeContainer>
              <StyledP16>Fee expense category</StyledP16>
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
                id="feeExpense"
                onBlur={() => setFieldTouched('feeExpense', true)}
                onChange={value => setFieldValue('feeExpense', value.label)}
              />
              {errors.feeExpense && <ErrorText title={errors.feeExpense} />}
              {props.children}
            </PrefPositionedRelativeContainer>
          </PaddedContainer>
          <PaddedContainer margin="8px 0">
            <StyledCheckbox
              isFullWidth
              label="Apply default Vendor"
              value="Apply default Vendor"
              name="checkbox-checked"
              id="defaultVendorCheck"
              onBlur={() => setFieldTouched('defaultVendorCheck', true)}
              onChange={() =>
                setFieldValue('defaultVendorCheck', !values.defaultVendorCheck)
              }
            />
            {errors.defaultVendorCheck && (
              <ErrorText title={errors.defaultVendorCheck} />
            )}
          </PaddedContainer>
          <PaddedContainer padding="8px 0">
            <StyledP16>Record default Vendor as</StyledP16>
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
              id="defaultVendor"
              onBlur={() => setFieldTouched('defaultVendor', true)}
              onChange={value => setFieldValue('defaultVendor', value.label)}
            />
            {errors.defaultVendor && <ErrorText title={errors.defaultVendor} />}
          </PaddedContainer>
          <FlexStartContainer margin="31px 0 0 0">
            <SaveButton appearance="primary" onClick={handleSubmit}>
              Save Changes
            </SaveButton>
            <ResetButton>Reset</ResetButton>
          </FlexStartContainer>
        </FeesContainer>
      )}
    />
  );
}

FeesSettings.propTypes = {
  children: PropTypes.node,
};
export default FeesSettings;
