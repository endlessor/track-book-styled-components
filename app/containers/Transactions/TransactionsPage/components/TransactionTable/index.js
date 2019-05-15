import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import {
  FaChevronRight,
  FaChevronLeft,
  FaSyncAlt,
  FaTrashAlt,
} from 'react-icons/fa';
import { data } from './fakeData';
import { TransactionModal, PreDownloadModal } from '../Modal';
import FilterTransactionsButton from './FilterTransactionsButton';
import {
  StyledPrimaryButton45,
  TablePagination,
  ButtonPanel,
  PageLabel,
  StatusPanel,
  StatusPara,
  TableContainer,
  ControlDiv,
  StyledBorderedButton,
  StyledP14,
} from './styles';

function checkColor(text) {
  if (text === 'paid') {
    return '#cbe8ba';
  }
  if (text === 'pending') {
    return '#fbdde3';
  }
  if (text === 'closed') {
    return '#c5e5f4';
  }
  return '#ffffff';
}

const columns = [
  {
    title: 'DATE',
    dataIndex: 'transactionDate',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'TRANSACTION TYPE',
    dataIndex: 'type',
  },
  {
    title: 'CONTACT',
    dataIndex: 'contact',
  },
  {
    title: 'PROCESSOR',
    dataIndex: 'processor',
    render: (text, record) => <a href={record.link}>{text}</a>,
  },
  {
    title: 'TOTAL',
    dataIndex: 'total',
  },
  {
    title: 'CURRENCY',
    dataIndex: 'currency',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    render: text => (
      <StatusPanel ccolor={() => checkColor(text)}>
        <StatusPara>{text}</StatusPara>
      </StatusPanel>
    ),
  },
  {
    title: 'ACTIONS',
    key: 'actions',
    render: () => (
      <ControlDiv>
        <FaSyncAlt size={18} color="#babec5" />
        <FaTrashAlt size={18} color="#babec5" />
      </ControlDiv>
    ),
  },
];

// customize item Render of Pagination
function itemRender(what, type, originalElement) {
  if (what > 100) {
    return null;
  }
  if (type === 'prev') {
    return <FaChevronLeft />;
  }
  if (type === 'next') {
    return <FaChevronRight />;
  }
  if (type === 'page') {
    return null;
  }
  return originalElement;
}
// rowSelection object indicates the need for row selection
const rowSelection = {
  getCheckboxProps: record => ({
    name: record.name,
  }),
};

class TransactionTable extends Component {
  state = {
    currentPage: `1-10 of ${data.length}`,
    visiblePreModal: false,
    visibleTraModal: false,
    selectedRows: [],
  };

  onChange = pagination => {
    const { current, pageSize } = pagination;
    const first = (current - 1) * pageSize + 1;
    const second =
      data.length > current * pageSize ? current * pageSize : data.length;
    const currentPage = `${first}-${second} of ${data.length}`;
    this.setState({
      currentPage,
    });
  };

  onPreDownloadModal = () => {
    this.setState({
      visiblePreModal: true,
    });
  };

  onTransactionModal = () => {
    this.setState({
      visibleTraModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      visibleTraModal: false,
      visiblePreModal: false,
    });
  };

  // record, index
  onSelect = () => {
    const { openDrawer } = this.props;
    openDrawer();
  };

  render() {
    const { selectedTab } = this.props;
    return (
      <TableContainer>
        <PreDownloadModal
          visible={this.state.visiblePreModal}
          closeModal={this.closeModal}
        />
        <TransactionModal
          visible={this.state.visibleTraModal}
          closeModal={this.closeModal}
        />

        <TablePagination>
          {selectedTab === 2 && (
            <ButtonPanel>
              <FilterTransactionsButton onClick={this.onTransactionModal} />
              <StyledPrimaryButton45
                onClick={this.onPreDownloadModal}
                appearance="primary"
              >
                Download Previous Transactions
              </StyledPrimaryButton45>
            </ButtonPanel>
          )}
          {selectedTab === 1 ? (
            <ButtonPanel>
              <StyledP14>
                {this.state.selectedRows.length} of {data.length} transactions
                synced
              </StyledP14>
              <StyledPrimaryButton45 appearance="primary">
                Sync Selected
              </StyledPrimaryButton45>
              <StyledBorderedButton>Removed All</StyledBorderedButton>
            </ButtonPanel>
          ) : (
            <ButtonPanel />
          )}
          <PageLabel>{this.state.currentPage}</PageLabel>
        </TablePagination>

        <Table
          rowKey="id"
          rowSelection={{
            ...rowSelection,
            onChange: selectedRows => {
              this.setState({
                selectedRows,
              });
            },
          }}
          columns={columns}
          dataSource={data}
          pagination={{ position: 'top', itemRender }}
          onChange={this.onChange}
          onRow={(record, index) => ({
            onClick: () => {
              this.onSelect(record, index);
            },
          })}
          scroll={{ y: window.innerHeight - 275 }}
        />
      </TableContainer>
    );
  }
}

TransactionTable.propTypes = {
  openDrawer: PropTypes.func,
  selectedTab: PropTypes.number,
};
export default TransactionTable;
