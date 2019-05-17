import React from 'react';
import PropTypes from 'prop-types';
import { FlexStartContainer } from '../FlexContainer';

import WarningIcon from './WarningIcon';

import { ErrorPara } from './styles';

function ErrorText(props) {
  return (
    <FlexStartContainer>
      <WarningIcon />
      <ErrorPara>{props.title}</ErrorPara>
    </FlexStartContainer>
  );
}

ErrorText.propTypes = {
  title: PropTypes.string,
};
export default ErrorText;
