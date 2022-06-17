import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {Chart, ArcElement, Tooltip,Title } from 'chart.js'
import { useState } from 'react'
import Box from "@mui/material/Box"
Chart.register([Tooltip,Title])
Chart.register(ArcElement);
function Donut(props) {   
    const [chartdata, setChartData] = useState({
        labels:props.props.labels,
        datasets: [{
            label:"",
            data:props.props.revenue,
            backgroundColor: [
                'rgba(255, 99, 132,0.7)',
                'rgba(54, 162, 235,0.7)',
                'rgba(255, 205, 86,0.7)',
                'rgba(38, 84, 116,0.7)',
                'rgba(38, 116, 38,0.7)',
                'rgba(74, 38, 116,0.2)',
                'rgba(233, 157, 15,0.2)',
                'rgba(255, 0, 55,0.2)',
                'rgba(9, 5, 221,0.2)',

              ],
              hoverOffset: 10
            }]
          })
    
     
 
  return (
    <div style={{ position: "relative", margin: "0px", width:"auto" }} >
      <Doughnut data={chartdata}  options={{
          cutout: 50,
          maintainAspectRatio: true,
          responsive: true,
           plugins: {
            title: {
                display:true,
                text: props.props.header,
                fontSize: 40
            },
            legend:{
              display:false,
              position:'bottom',
              boxwidth: 40
            },
          animations: {
          radius: {
            duration: 1000,
            easing: 'linear',
            loop: (context) => context.active
          }}
        },

            
          }} 
        
          
          />
    </div>
     
  )
}

export default Donut