import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = () => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: 
         { x: 139, y: 81, r: 136 },  // { sales, profit, expenses }
        { x: 288, y: 119, r: 143 },
        { x: 215, y: 145, r: 94 }
      ],
    }};
    return (
        <div>
          <h3>Bubble Chart - Sales, Profits, and Expenses</h3>
          <ChartComponent type="bubble" data={chartData} options={chartOptions} />
        </div>
      );
    };
    
    export default BubbleChart;
