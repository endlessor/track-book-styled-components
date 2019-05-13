import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  PAID_BORDER_COLOR,
  CREATED_BORDER_COLOR,
  FAILED_BORDER_COLOR,
  PAID_COLOR,
  CREATED_COLOR,
  FAILED_COLOR,
} from './colors';

const colors = {
  paid: {
    color: PAID_COLOR,
    borderColor: PAID_BORDER_COLOR,
  },
  created: {
    color: CREATED_COLOR,
    borderColor: CREATED_BORDER_COLOR,
  },
  failed: {
    color: FAILED_COLOR,
    borderColor: FAILED_BORDER_COLOR,
  },
};

const RoundedP = styled.p`
  width: 77px;
  color: ${props => props.color};
  border-radius: 10px;
  text-align: center;
  border: 2px solid ${props => props.borderColor};
  margin: ${props => (props.margin ? props.margin : '0')};
  font-size: ${props => props.fontSize};
  padding: ${props => (props.padding ? props.padding : '0')};
`;

function RoundedStatusLabel(props) {
  const { label, fontSize, margin, padding } = props;
  const { color, borderColor } = colors[label];
  return (
    <RoundedP
      color={color}
      borderColor={borderColor}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
    >
      {label.toUpperCase()}
    </RoundedP>
  );
}

RoundedStatusLabel.propTypes = {
  label: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};
export default RoundedStatusLabel;
