import styled from 'styled-components';
import {
  StyledP,
  PaddedContainer,
  StyledPrimaryButton,
  StyledNormalButton,
  PositionedRelativeContainer,
} from '../../../../../components';
export const StyledP22 = styled(StyledP)`
  font-size: 22px;
  line-height: 1.59;
  color: #393a3d;
  margin: 0;
`;
export const StyledP16 = styled(StyledP)`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: #8d9096;
  margin: 0;
`;

export const FeesContainer = styled(PaddedContainer)`
  width: calc(100% - 380px);
`;

export const SaveButton = styled(StyledPrimaryButton)`
  height: 45px !important;
  min-width: 144px !important;
`;

export const ResetButton = styled(StyledNormalButton)`
  height: 45px !important;
  min-width: 122px !important;
  background: transparent !important;
`;

export const PrefPositionedRelativeContainer = styled(
  PositionedRelativeContainer,
)`
  overflow: inherit;
`;
