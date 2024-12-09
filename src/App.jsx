import React from 'react';
import BarChart from './BarChart';

function App() {
    return (
        <div>
            <h1>My Simple Chart</h1>
            <BarChart />
        </div>
    );
}

export default App;
import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import BubbleChart from './BubbleChart'

import React, { useEffect, useState } from 'react';

const App = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  fetch('public/data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
})
.then((data) => {
  setChartData(data); // Store the data in the state
});

if (loading) {
  return <div>Loading data...</div>; // Show loading message while data is being fetched
}

return (
  <div>
    <h1>Charts Dashboard</h1>
    
    <h2>Monthly Sales</h2>
    <BarChart data={chartData.sales} />
    
    <h2>Monthly Profts</h2>
    <LineChart data={chartData.profits} />
    
    <h2>Expenses vs Profits</h2>
    <ScatterChart data={chartData.expenses} />
    
    <h2>Sales, Profits, and Expenses</h2>
    <BubbleChart data={chartData.bubbleData} />
  </div>
);
};

export default App;