import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
            {
                label: 'Sales',
                data: [10, 20, 15],
                borderColor: 'blue',
                fill: false,
            },
        ],
    };

    return <Line data={data} />;
};

export default LineChart;