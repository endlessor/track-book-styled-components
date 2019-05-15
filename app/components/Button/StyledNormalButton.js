import styled from 'styled-components';
import Button from '@atlaskit/button';

const StyledNormalButton = styled(Button)`
  min-width: ${props => (props.minWidth ? props.minWidth : '156px')} !important;
  height: ${props => (props.height ? props.height : '61px')} !important;
  border-radius: 4px;
  & > span {
    width: 100%;
  }
  object-fit: contain;
  font-family: 'Libre Franklin';
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #303030;
`;

export default StyledNormalButton;
