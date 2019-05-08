import { css } from 'styled-components';

const buttonStyles = css`
  min-width: 156px;
  height: 61px !important;
  border-radius: 4px;
  background: #2c9f1c !important;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #227a16 !important;
  }
  & > span {
    width: 100%;
  }
`;

export default buttonStyles;
