import React from 'react';
import ChartCard from './ChartCard';

import { StyledRow, StyledCol, FlexStartContainer } from '../../../components';
import BarChart from './Charts/BarChart';

import { PageTitle, AnalyticsContainer } from './styles';
import PieChart from './Charts/PieChart';

const ddDatas = ['Last 5 months', 'This month', 'Last Week', 'This week'];
const barChartSample = [
  { name: 'Jan', value: 1800 },
  { name: 'Feb', value: 900 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 1200 },
];

const pieChartSample = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

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
          >
            <BarChart data={barChartSample} color="#64be19" />
          </ChartCard>
        </StyledCol>
        <StyledCol xs={12} md={4}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Sales Tax"
            headerValue="$4643"
          >
            <BarChart data={barChartSample} color="#64be19" />
          </ChartCard>
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
          >
            <BarChart data={barChartSample} color="#64be19" />
          </ChartCard>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={3}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Total Refunds/ Disputes"
            headerValue="$48348"
          >
            <BarChart data={barChartSample} color="#64be19" />
          </ChartCard>
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
