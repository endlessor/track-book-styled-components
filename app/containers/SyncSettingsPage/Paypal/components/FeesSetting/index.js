import React from 'react';
import {
  PaddedContainer,
  FlexStartContainer,
  StyledSelect,
  StyledCheckbox,
} from '../../../../../components';

import {
  StyledP16,
  StyledP22,
  FeesContainer,
  SaveButton,
  ResetButton,
} from './styles';
function FeesSettings() {
  return (
    <FeesContainer margin="0 120px 0 0">
      <StyledP22>Fees Settings</StyledP22>
      <PaddedContainer padding="8px 0" margin="15px 0 0 0">
        <StyledP16>Bank/ Credit card account to record payment fees?</StyledP16>
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
          placeholder="Choose a City"
        />
        {/* <FirstCircle className="A" size="11px" />
          <SecondCircle className="B" size="11px" />
          <LineTo from="A" to="B" borderColor="#8dd1fd" borderStyle="dashed" /> */}
      </PaddedContainer>
      <PaddedContainer margin="8px 0">
        <StyledCheckbox
          defaultChecked
          isFullWidth
          label="Apply default Vendor"
          value="Apply default Vendor"
          // onChange={this.onChange}
          name="checkbox-checked"
        />
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
          placeholder="Choose a City"
        />
      </PaddedContainer>
      <FlexStartContainer margin="31px 0 0 0">
        <SaveButton appearance="primary">Save Changes</SaveButton>
        <ResetButton>Reset</ResetButton>
      </FlexStartContainer>
    </FeesContainer>
  );
}

export default FeesSettings;
