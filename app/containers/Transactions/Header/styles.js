import styled from 'styled-components';
import { H1, P } from '../../../components';

export const LogoHeader = styled(H1)`
  font-family: 'Libre Franklin';
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;

export const AccountHeader = styled(P)`
  font-family: 'Libre Franklin';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  color: #ffffff;
  margin: 0;
  cursor: pointer;
`;

export const AccountSubHeader = styled(P)`
  font-family: 'Libre Franklin';
  font-size: 11px;
  font-weight: 500;
  line-height: 2.36;
  color: #f4f5f8;
  margin: 0;
`;

export const NavigationMenu = styled(P)`
  font-family: 'Libre Franklin';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${props => (props.active ? '#ffffff' : '#b0b3b8')};
  margin: 0 0 0 12px;
`;
