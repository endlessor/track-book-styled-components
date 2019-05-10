import styled from 'styled-components';
import {
  StyledPrimaryButton,
  PositionedAbsoluteContainer,
} from '../../../../../components';

export const DownloadPreviousTransactionsButton = styled(StyledPrimaryButton)`
  height: 45px !important;
  margin-left: 18px;
`;
export const TablePagination = styled(PositionedAbsoluteContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  height: 64px;
  width: calc(100% - 90px);
  z-index: 99;
`;
export const StatusPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 24px;
  border-radius: 16px;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
`;

export const StatusPara = styled.p`
  margin: 0;
`;
export const ButtonPanel = styled.div`
  display: flex;
  align-items: center;
`;

export const PageLabel = styled.p`
  margin: 0;
`;

export const TableContainer = styled.div`
  position: relative;
  overflow: auto;
  .ant-table-wrapper {
    .ant-pagination {
      .ant-pagination-prev {
        min-width: auto;
      }
      .ant-pagination-item {
        display: none;
      }
      .ant-pagination-next {
        margin-right: 39px;
        min-width: auto;
      }
    }
  }
  .ant-table-thead {
    th {
      border-bottom: solid 2px #ababab;
      span {
        object-fit: contain;
        font-family: 'Libre Franklin';
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.83;
        letter-spacing: normal;
        color: #b0b3b8;
      }
    }
    .ant-table-column-sort {
      background: transparent;
    }
    .ant-table-selection-column {
      padding: 16px 0 16px 40px;
    }
  }
  .ant-table-tbody {
    td {
      span {
        font-family: 'Libre Franklin';
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #393a3d;
      }
    }
    .ant-table-column-sort {
      background: transparent;
    }
    .ant-table-selection-column {
      padding: 16px 0 16px 40px;
    }
    td {
      border-bottom: solid 1px #eceef1;
    }
    td:nth-child(1) {
      position: relative;
      border: none;
      &:after {
        background-color: #eceef1;
        bottom: -1px;
        content: '';
        display: block;
        height: 1px;
        right: 0;
        position: absolute;
        width: 18px;
      }
    }
  }
`;
