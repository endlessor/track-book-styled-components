import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '@atlaskit/checkbox';

const PrefCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  rect {
    width: 20px;
    height: 20px;
    x: 2px;
    y: 2px;
  }
`;
const CheckBoxContainer = styled.div`
  .gZqHoi {
    object-fit: contain;
    font-family: 'Libre Franklin';
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #8d9096;
  }
`;
function StyledCheckbox(props) {
  return (
    <CheckBoxContainer>
      <PrefCheckbox {...props} />
    </CheckBoxContainer>
  );
}

export default StyledCheckbox;
