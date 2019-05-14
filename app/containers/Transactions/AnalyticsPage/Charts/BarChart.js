import React from 'react';
import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomTooltipTitle = styled.div`
  & {
    position: relative;
    background: #f4f5f8;
    padding: 0px 10px;
    border-radius: 2px;
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

// eslint-disable-next-line react/prop-types
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <CustomTooltipTitle>
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </CustomTooltipTitle>
    );
  }

  return null;
};

function BarChart(props) {
  const { data, color } = props;
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
        <Bar barSize="60%" dataKey="value" fill={color} />
      </BChart>
    </ResponsiveContainer>
  );
}

BarChart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
};

export default BarChart;
