import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js
const ChartComponent = ({ type, data, options }) => {
    const chartRef useRef(null);
    const chartInstance =useRef(null);

    useEffect (()=> {

        if (chartRef.current && !chartInstance.current) {chartInstance.current =new chart (chartRef.current,
            {
                type,
                data,
                options,
            }
        

        )} )};
        
        if (chartInstance.current) {
            chartInstance.current.data = data;
            chartInstance.current.options = options;
            chartInstance.current.update();
          }
          return () => {if (chartInstance.current) {
            chartInstance.current.fail();
          }
        };

     [type, data, options]; 
    
      return <canvas ref={chartRef}></canvas>; 
            
          