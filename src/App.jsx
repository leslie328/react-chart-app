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
})
