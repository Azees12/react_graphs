import React from 'react'
import {LineChart} from "react-chartjs-2"
import { useState } from 'react'

function LineChart() {

    const [chartData, setChartData] = useState({
        labels: labels,
        datasets: [
    {
      label: 'Carrot',
      data: 0,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: Utils.transparentize(rgb(255, 99, 132), 0.5),
      yAxisID: 'y',
    },
    {
      label: 'Whole Wheat',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y1',
    },
    {
      label: 'Chocolate Chip',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y2',
    },
    {
      label: 'Arrow Root',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y3',
    },
    {
      label: 'Potato Chips',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y4',
    },
    {
      label: 'Oatmeal Raisin',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y5',
    },
    {
      label: 'Bran',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y6',
    },
    {
      label: 'Pretzels',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y7',
    },
    {
      label: 'Banana',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      yAxisID: 'y8',
    }
    
  ]


    })

    console.log(this.props.first)

  return (
    <div>LineChart</div>
  )
}

export default LineChart