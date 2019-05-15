import styled from 'styled-components';
import {
  P,
  Container,
  PositionedRelativeContainer,
  PaddedContainer,
} from '../../../components';

export const AnalyticsContainer = styled(Container)`
  padding: 24px 39px;
  background-color: #f4f5f8;
`;
export const PageTitle = styled(P)`
  font-size: 18px;
  font-weight: 500;
  line-height: 0.89;
  color: #393a3d;
  margin-left: 7px;
`;

export const PositionedRelativeDiv = styled(PositionedRelativeContainer)`
  padding-top: 100%;
  margin: 7px;
  width: auto;
  height: auto;
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
