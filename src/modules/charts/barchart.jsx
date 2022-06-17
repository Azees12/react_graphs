import React from 'react'
import { useState } from 'react'
import Box from "@mui/material/Box"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Barchart(props) {

    console.log(props)

    const options = {
        maintainAspectRatio: true,
        plugins: {
          title: {
            display: true,
            text: 'Products',
          },
        },
        responsive: true,
        scales: {
          y: {
            display: true,
            position: 'left',
          },
          y1: {
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: true,
            },
          }
        },
      };

const [chartData,setChartData] = useState({
  labels: props.props.map((value) => value.product),
  datasets: [
    {
      label: 'Total Revenue',
      data: props.props.map((value) => value.total_sales),
      backgroundColor: 'rgb(255, 99, 132)',
      yAxisID: 'y',
    },
    {
      label: 'Total Quantity',
      data: props.props.map((value) => value.total_quantity),
      backgroundColor: 'rgb(75, 192, 192)',
      yAxisID: 'y',
    },
   
  ],
})



  return (
    <div style={{ position: "relative", margin: "auto", height:"auto" }} >
    <Bar options={options} data={chartData} />
    </div>
    
  )
}

export default Barchart