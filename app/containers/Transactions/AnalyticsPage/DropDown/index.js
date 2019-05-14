import React from 'react';
import PropTypes from 'prop-types';
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';

import { DropDownContainer } from './styles';

function CustomDropDown(props) {
  const { ddDatas } = props;
  return (
    <DropDownContainer>
      <DropDown options={ddDatas} />
    </DropDownContainer>
  );
}

CustomDropDown.propTypes = {
  ddDatas: PropTypes.array,
};

export default CustomDropDown;
