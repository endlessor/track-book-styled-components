import styled from 'styled-components';

import { H1, P } from '../../../../../components';

export const DatePickerWrapper = styled.div`
  width: 49%;
`;

export const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #b9b9b9;
  background-color: #ffffff;
  padding: 36px 43px;
`;
export const StyledHeader = styled(H1)`
  font-family: 'Libre Franklin';
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.94;
  letter-spacing: normal;
  color: #3d3d3d;
`;

export const StyledPara = styled(P)`
  font-family: 'Libre Franklin';
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: #7f7f7f;
`;

export const SelectLabel = styled(P)`
  font-family: LibreFranklin;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #8d9096;
  margin-bottom: 5px;
`;
