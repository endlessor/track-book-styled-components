import React from 'react';
import { PieChart as PChart, Pie, Cell, Legend } from 'recharts';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

function PieChart(props) {
  const { data, color } = props;
  return (
    <PChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Cell key={index} fill={color[index % color.length]} />
        ))}
      </Pie>
      <Legend />
    </PChart>
  );
}

PieChart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
};

export default PieChart;
