import React from 'react';
import styled from 'styled-components';

const EmbbedOval = styled.div`
  width: 7px;
  height: 7px;
  margin: 7px;
  background-color: #ffffff;
  border-radius: 50%;
`;

const ParentOval = styled.div`
  position: absolute;
  top: 180px;
  left: 24px;
  width: 21px;
  height: 21px;
  opacity: 0.52;
  background-color: #52ae46;
  border-radius: 50%;
`;

export default function Oval() {
  return (
    <ParentOval>
      <EmbbedOval />
    </ParentOval>
  );
}
