import styled from 'styled-components';

export const DashedDiv = styled.div`
  & {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &:before {
    content: '';
    position: absolute;
    left: 34px;
    top: 0;
    height: 100%;
    border-left: 2px dashed #babec5;
  }
`;
