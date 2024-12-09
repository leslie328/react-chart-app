import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = () => {
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: [
            { x: 136, y: 81 }, // { expense, profit }
            { x: 143, y: 119 },
            { x: 94, y: 145 },
        ],
    ],
    backgroundColor: 'rgba(255, 99, 132, 1)',
  },
};
return (
    <div>
      <h3>Scatter Chart - Expenses vs Profits</h3>
      <ChartComponent type="scatter" data={chartData} options={chartOptions} />
    </div>
  );
};

export default ScatterChart;