import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const OvalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #52ae46;
`;
function TickOval() {
  return (
    <OvalContainer>
      <FaCheck size={12} color="#ffffff" />
    </OvalContainer>
  );
}

export default TickOval;
