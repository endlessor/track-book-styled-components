import React from 'react';
import ChartCard from './ChartCard';

import { StyledRow, StyledCol, FlexStartContainer } from '../../../components';

import { PageTitle, AnalyticsContainer } from './styles';

const ddDatas = ['Last 5 months', 'This month', 'Last Week', 'This week'];
function AnalyticsPage() {
  return (
    <AnalyticsContainer height="calc(100vh - 70px)">
      <FlexStartContainer>
        <PageTitle>Analytics</PageTitle>
      </FlexStartContainer>
      <StyledRow>
        <StyledCol xs={12} md={4}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Sales"
            headerValue="$53482"
          />
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Sales Tax"
            headerValue="$4643"
          />
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Expense & Fees"
            headerValue="$2368"
          />
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol xs={12} md={6} lg={3}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Refunds/ Disputes"
            headerValue="$48348"
          />
        </StyledCol>
        <StyledCol xs={12} md={6} lg={3}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Refunds/ Disputes"
            headerValue="$48348"
          />
        </StyledCol>
        <StyledCol xs={12} md={6} lg={3}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Sales/Expense/ Fees/Deposit"
            headerValue="$34723"
          />
        </StyledCol>
        <StyledCol xs={12} md={6} lg={3}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Sales by Products"
            headerValue="$23634"
          />
        </StyledCol>
      </StyledRow>
    </AnalyticsContainer>
  );
}

export default AnalyticsPage;
