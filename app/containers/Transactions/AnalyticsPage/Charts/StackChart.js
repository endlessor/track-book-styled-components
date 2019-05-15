import React from 'react';
import { FaCircle } from 'react-icons/fa';
import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TooltipDiv = styled.div`
  width: 120px;
  border-radius: 1px;
  background-color: #f4f5f8;
  padding: 9px 11px;
  h3 {
    font-family: 'Libre Franklin';
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1px;
    color: #393a3d;
    margin: 0;
  }
  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #f4f5f8;
    border-width: 5px;
    margin-left: -5px;
  }
`;
const ContentToopTipDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p {
    font-family: 'Libre Franklin';
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.1px;
    color: #393a3d;
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    p {
      margin-left: 5px;
    }
  }
`;

const LegendDiv = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
    p {
      font-family: 'Libre Franklin';
      font-size: 12px;
      line-height: 1.25;
      letter-spacing: 0.1px;
      color: #393a3d;
      margin: 0 0 0 5px;
    }
  }
`;
// eslint-disable-next-line react/prop-types
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <TooltipDiv>
        <h3>{payload[0].payload.name}</h3>
        {payload.map(item => (
          <ContentToopTipDiv key={`index-${item.name}`}>
            <div>
              <FaCircle size={7} color={item.color} />
              <p>{item.name}</p>
            </div>
            <p>${item.value}</p>
          </ContentToopTipDiv>
        ))}
      </TooltipDiv>
    );
  }

  return null;
};

const renderLegend = props => {
  const { payload } = props;
  return (
    <LegendDiv>
      {payload.map(item => (
        <div key={`index-${item.value}`}>
          <FaCircle size={7} color={item.color} />
          <p>{item.value}</p>
        </div>
      ))}
    </LegendDiv>
  );
};
renderLegend.propTypes = {
  payload: PropTypes.object,
};
function StackChart(props) {
  const { data } = props;
  return (
    <ResponsiveContainer>
      <BChart data={data} barCategoryGap="20%">
        <CartesianGrid vertical={false} strokeDasharray="3" stroke="#f4f5f8" />
        <XAxis tickLine={false} axisLine={false} dataKey="name" />
        <YAxis tickLine={false} axisLine={false} domain={[0, 2400]} />
        <Tooltip
          content={<CustomTooltip />}
          unit="5"
          cursor={{ fill: 'transparent' }}
        />
        <Legend
          width={140}
          content={renderLegend}
          verticalAlign="top"
          align="right"
        />
        <Bar dataKey="Expenses" stackId="a" fill="#6ac11f" />
        <Bar dataKey="Fees" stackId="a" fill="#b1eb4b" />
      </BChart>
    </ResponsiveContainer>
  );
}

StackChart.propTypes = {
  data: PropTypes.array,
};

export default StackChart;
