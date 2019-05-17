import styled from 'styled-components';
import {
  PaddedContainer,
  P,
  PositionedRelativeContainer,
} from '../../../../components';

export const PositionedRelativeDiv = styled(PositionedRelativeContainer)`
  padding-top: 100%;
  margin: 7px;
  width: auto;
  height: auto;
`;
export const ChartWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  margin-left: -20px;
`;

export const CardContainer = styled(PaddedContainer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  padding: 20px 26px;
`;

export const HeaderTitle = styled(P)`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.19;
  letter-spacing: normal;
  color: #393a3d;
  margin: 0;
`;

export const HeaderValue = styled(P)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.46;
  color: #393a3d;
  margin: 0;
`;

export const LoaderContainer = styled(PaddedContainer)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
`;
