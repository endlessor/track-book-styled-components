import styled from 'styled-components';
import { P, StyledPrimaryButton } from '../../../../../components';

export const DrawContent = styled.div`
  width: 100%;
  height: 100%;
`;
export const StyledP18 = styled(P)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.94;
  color: #393a3d;
  margin: 0;
`;

export const StyledP14 = styled(P)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin: 0;
  color: ${props => (props.color ? props.color : '#393a3d')};
`;
export const OvalEmpty = styled.div`
  width: 24px;
  height: 24px;
  border: solid 2px #dbdfe5;
  background-color: #ffffff;
  border-radius: 50%;
`;

export const AddButton = styled(StyledPrimaryButton)`
  height: 35px !important;
  min-width: 77px !important;
`;
