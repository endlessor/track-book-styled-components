import styled from 'styled-components';

import { PositionedRelativeContainer } from '../../../components';

const RingImg = styled.img`
  height: 8px;
  margin-top: 8px;
`;
const PaymentHowToimg = styled.img`
  width: calc(100% - 54px);
  border-radius: 18px;
`;
const PrefPositionedRelativeContainer = styled(PositionedRelativeContainer)`
  overflow: inherit;
`;

export { PrefPositionedRelativeContainer, PaymentHowToimg, RingImg };
