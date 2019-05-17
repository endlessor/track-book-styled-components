import React from 'react';
import styled from 'styled-components';

const CircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #e8766b;
  padding: 4px 0;
`;
const StickDiv = styled.div`
  width: 2px;
  height: 5px;
  background-color: #ffffff;
`;

const DotDiv = styled.div`
  width: 2px;
  height: 2px;
  background-color: #ffffff;
`;
function WarningIcon() {
  return (
    <CircleDiv>
      <DotDiv />
      <StickDiv />
    </CircleDiv>
  );
}

WarningIcon.propTypes = {};

export default WarningIcon;
