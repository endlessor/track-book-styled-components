import styled from 'styled-components';
import { FlexRowContainer, FlexContainer } from '../../../components';

export const PlanDiv = styled(FlexRowContainer)`
  height: 180px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #b5e0fd;
`;
export const PlanInfoDiv = styled(FlexContainer)`
  height: 100%;
  width: ${props => props.width};
  padding: 20px 42px;
`;
export const Line = styled.div`
  min-height: 180px;
  width: 1px;
  background: #e0edf6;
`;

export const FlexNoHeightContainer = styled(FlexContainer)`
  height: auto;
  margin-top: 23px;
`;

export const PdfA = styled.a``;

export const InvoiceList = styled(FlexRowContainer)`
  margin: 20px 0;
  p,
  a {
    width: 25%;
  }
`;
