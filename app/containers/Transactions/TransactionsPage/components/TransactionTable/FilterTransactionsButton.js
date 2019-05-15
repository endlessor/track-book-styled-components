import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OutlineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 45px;
  object-fit: contain;
  border-radius: 2px;
  border: solid 1px #92959b;
  cursor: pointer;
  p {
    margin: 0;
    object-fit: contain;
    font-family: 'Libre Franklin';
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #616e74;
  }
`;

function FilterTransactionsButton(props) {
  const { onClick } = props;
  return (
    <OutlineDiv onClick={onClick}>
      <p>Filter Transactions</p>
    </OutlineDiv>
  );
}

FilterTransactionsButton.propTypes = {
  onClick: PropTypes.func,
};
export default FilterTransactionsButton;
