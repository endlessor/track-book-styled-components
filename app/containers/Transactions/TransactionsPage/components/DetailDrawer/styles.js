import styled from 'styled-components';
import {
  P,
  StyledP,
  StyledPrimaryButton,
  StyledNormalButton,
} from '../../../../../components';

export const DrawContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 49px 53px 49px 46px;
`;

export const TransactionHeader = styled(P)`
  object-fit: contain;
  font-family: LibreFranklin;
  font-size: 20px;
  line-height: 1.75;
  color: #393a3d;
  margin: 0;
`;
export const TransactionPaymentHeader = styled(P)`
  object-fit: contain;
  font-family: LibreFranklin;
  font-size: 20px;
  line-height: 1.75;
  color: #0077c5;
  margin: 0 0 0 5px;
`;
export const FusionLogo = styled(P)`
  font-family: AvantGarde;
  font-size: 24px;
  text-align: center;
  color: #0077c5;
  &::first-letter {
    color: #83d478;
  }
  margin: 0 0 0 12px;
`;

export const StyledP14 = styled(StyledP)`
  object-fit: contain;
  font-size: 14px;
  color: #8d9096;
`;

export const ResyncButton = styled(StyledPrimaryButton)`
  height: 45px !important;
  min-width: 110px !important;
`;

export const UndoButton = styled(StyledNormalButton)`
  height: 45px !important;
  min-width: 110px !important;
  border-radius: 3px;
  border: 1px solid #8d9096 !important;
  margin-left: 12px;
`;

export const StyledP18 = styled(StyledP)`
  object-fit: contain;
  font-size: 18px;
  line-height: 1.94;
  color: #3d3d3d;
`;
