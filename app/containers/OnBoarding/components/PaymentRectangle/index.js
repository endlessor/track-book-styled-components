import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Rectangle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 15px;
  box-shadow: 3px 8px 24px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
`;

const OvalContainer = styled.div`
  position: absolute;
  display: flex;
  top: 17px;
  left: 8px;
`;

const Oval = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: #eceef1;
  border-radius: 50%;
  margin-left: 8px;
`;

function PaymentRectangle(props) {
  const { width, height, ovalSize, children } = props;
  return (
    <Rectangle width={width} height={height}>
      <OvalContainer>
        <Oval size={ovalSize} />
        <Oval size={ovalSize} />
        <Oval size={ovalSize} />
      </OvalContainer>
      {children}
    </Rectangle>
  );
}

PaymentRectangle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  ovalSize: PropTypes.string,
  children: PropTypes.node,
};

export default PaymentRectangle;
