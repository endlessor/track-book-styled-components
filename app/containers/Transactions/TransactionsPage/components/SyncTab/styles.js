import styled from 'styled-components';

import { FlexRowContainer, P } from '../../../../../components';

export const TabContainer = styled(FlexRowContainer)`
  padding: 31px 27px;
  cursor: pointer;
  border-radius: 2px;
  ${props =>
    props.active === true &&
    'border-top: solid 4px #2ca01c; background-color: #eceef1'};
`;

export const Label = styled(P)`
  font-family: 'Libre Franklin';
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #393a3d;
  margin: 0 0 0 6px;
`;

export const Number = styled(P)`
  font-family: 'Libre Franklin';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  text-align: center;
  padding: 0 3px;
  background: #ffffff;
  color: ${props => (props.color ? props.color : '#eb8e0e')};
  margin: 0 0 0 10px;
`;
