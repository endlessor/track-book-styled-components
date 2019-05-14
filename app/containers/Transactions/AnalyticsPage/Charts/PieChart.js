import React from 'react';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import {
  PieChart as PChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
// import styled from 'styled-components';
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

const AbsolutedUl = styled.ul`
  width: 120px;
`;
const CustomLi = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-family: 'Libre Franklin';
    font-size: 12px;
    line-height: 1.67;
    letter-spacing: 0.1px;
    color: #393a3d;
    margin: 0 0 0 10px;
  }
`;
// eslint-disable-next-line react/prop-types
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <CustomTooltipTitle>
        <p className="label">{`$${payload[0].value}`}</p>
      </CustomTooltipTitle>
    );
  }

  return null;
};

const renderLegend = props => {
  const { payload } = props;
  return (
    <AbsolutedUl>
      {payload.map(entry => (
        <CustomLi key={`item-${entry.value}`}>
          <FaCircle size={7} color={entry.color} />
          <p>{entry.value}</p>
        </CustomLi>
      ))}
    </AbsolutedUl>
  );
};

renderLegend.propTypes = {
  payload: PropTypes.object,
};
function PieChart(props) {
  const { data, colors } = props;
  return (
    <ResponsiveContainer>
      <PChart>
        <Pie
          data={data}
          cx="40%"
          cy="50%"
          innerRadius="50%"
          outerRadius="80%"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          width={100}
          content={renderLegend}
          verticalAlign="middle"
          align="right"
        />
      </PChart>
    </ResponsiveContainer>
  );
}

PieChart.propTypes = {
  data: PropTypes.array,
  colors: PropTypes.array,
};

export default PieChart;
