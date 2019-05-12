import { css } from 'styled-components';

const buttonStyles = css`
  min-width: ${props => (props.minWidth ? props.minWidth : '156px')};
  height: ${props => (props.height ? props.height : '61px')} !important;
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
