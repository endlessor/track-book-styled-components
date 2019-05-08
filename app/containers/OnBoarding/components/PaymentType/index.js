import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ParentDiv = styled.div`
  position: relative;
  width: 96%;
  padding-top: 71%;
  object-fit: contain;
  border-radius: 8px;
  border: solid 4px rgba(0, 119, 197, 0.13);
`;
const ChildDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 7px;
  border: solid 1px #0077c5;
`;
function PaymentType(props) {
  return (
    <ParentDiv>
      <ChildDiv>{props.children}</ChildDiv>
    </ParentDiv>
  );
}

PaymentType.propTypes = {
  children: PropTypes.node,
};

export default PaymentType;
