import styled from 'styled-components';
import { FlexContainer, P, FlexStartContainer } from '../../../components';

export const PaypalDiv = styled(FlexContainer)`
  padding: 39px 30px;
  justify-content: flex-start;
`;

export const PaymentHowToimg = styled.img`
  width: 87.6%;
  border-radius: 18px;
`;

export const PaymentOptionDiv = styled(FlexContainer)`
  width: 212px;
  border-radius: 3px;
  border: solid 1px #d7d7d7;
  background-color: #ffffff;
  padding: 10px 0;
  margin-top: 8px;
  height: auto;
`;

export const PaymentOptionItem = styled(FlexStartContainer)`
  background-color: ${props => props.active && '#0077c5'};
  cursor: pointer;
  padding: 0 20px;
`;
export const OptionTitle = styled(P)`
  color: ${props => (props.active ? '#ffffff' : '#393a3d')};
  font-size: 13px;
  font-weight: 600;
  line-height: 3.69;
  margin: 0 0 0 16px;
`;
