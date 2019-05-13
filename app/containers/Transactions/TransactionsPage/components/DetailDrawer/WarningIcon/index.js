import React from 'react';
import styled from 'styled-components';

const CircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #e7cf9b;
  padding: 2px 0;
  margin: 0 0 0 7px;
`;

const StickDiv = styled.div`
  width: 1.6px;
  height: 5.9px;
  background-color: #e7cf9b;
`;

const DotDiv = styled.div`
  width: 1px;
  height: 1px;
  background-color: #e7cf9b;
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
