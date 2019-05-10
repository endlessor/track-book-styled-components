import React, { Component } from 'react';
import { Table } from 'antd';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { data } from './fakeData';

import FilterTransactionsButton from './FilterTransactionsButton';
import {
  DownloadPreviousTransactionsButton,
  TablePagination,
  ButtonPanel,
  PageLabel,
  StatusPanel,
  StatusPara,
  TableContainer,
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
      <StatusPanel color={() => checkColor(text)}>
        <StatusPara>{text}</StatusPara>
      </StatusPanel>
    ),
  },
  {
    title: 'ACTIONS',
    key: 'actions',
    render: () => <p>delete</p>,
  },
];

// customize item Render of Pagination
function itemRender(current, type, originalElement) {
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
  // onChange: (selectedRowKeys, selectedRows) => {
  //   // console.log(
  //   //   `selectedRowKeys: ${selectedRowKeys}`,
  //   //   'selectedRows: ',
  //   //   selectedRows,
  //   // );
  // },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
class TransactionTable extends Component {
  state = {
    currentPage: `1-10 of ${data.length}`,
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

  render() {
    return (
      <TableContainer>
        <TablePagination>
          <ButtonPanel>
            <FilterTransactionsButton />
            <DownloadPreviousTransactionsButton appearance="primary">
              Download Previous Transactions
            </DownloadPreviousTransactionsButton>
          </ButtonPanel>
          <PageLabel>{this.state.currentPage}</PageLabel>
        </TablePagination>

        <Table
          rowKey="id"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ position: 'top', itemRender }}
          onChange={this.onChange}
        />
      </TableContainer>
    );
  }
}

export default TransactionTable;
