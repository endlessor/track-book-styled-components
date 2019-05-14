import React from 'react';
import ChartCard from './ChartCard';

import { StyledRow, StyledCol, FlexStartContainer } from '../../../components';
import BarChart from './Charts/BarChart';

import { PageTitle, AnalyticsContainer } from './styles';
import PieChart from './Charts/PieChart';
import StackChart from './Charts/StackChart';
const ddDatas = ['Last 5 months', 'This month', 'Last Week', 'This week'];
const barChartSample = [
  { name: 'Jan', value: 1800 },
  { name: 'Feb', value: 900 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 1200 },
];

const pieChartSample = [
  { name: 'Sales', value: 600 },
  { name: 'Expense', value: 600 },
  { name: 'Fees', value: 1000 },
  { name: 'Deposit', value: 800 },
];

const stackChartSample = [
  { name: 'Jan', Expenses: 2000, Fees: 1400, amt: 2400 },
  { name: 'Feb', Expenses: 2000, Fees: 398, amt: 2210 },
  { name: 'Mar', Expenses: 2000, Fees: 800, amt: 2290 },
  { name: 'Apr', Expenses: 2780, Fees: 80, amt: 2000 },
  { name: 'May', Expenses: 1890, Fees: 800, amt: 2181 },
];

const colors = ['#278480', '#33a5a4', '#3cc1bf', '#44d7d7'];

function AnalyticsPage() {
  return (
    <AnalyticsContainer>
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
          >
            <StackChart data={stackChartSample} />
          </ChartCard>
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
          >
            <PieChart data={pieChartSample} colors={colors} />
          </ChartCard>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={3}>
          <ChartCard
            ddDatas={ddDatas}
            headerTitle="Sales by Products"
            headerValue="$23634"
          >
            <PieChart data={pieChartSample} colors={colors} />
          </ChartCard>
        </StyledCol>
      </StyledRow>
    </AnalyticsContainer>
  );
}

export default AnalyticsPage;
