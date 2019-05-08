import React from 'react';
import styled from 'styled-components';

const CircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 4px solid #f3e7cc;
  padding: 4px 0;
`;
const StickDiv = styled.div`
  width: 4px;
  height: 15px;
  background-color: #f3e7cc;
`;

const DotDiv = styled.div`
  width: 4px;
  height: 4px;
  background-color: #f3e7cc;
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
