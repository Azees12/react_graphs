import React from 'react'
import {Doughnut} from "react-chartjs-2"
import { useState } from 'react'

function Donut(props) {
    const labels = props.labels;
    const revenue = props.revenue;

    console.log(props)


    
 

  return (
    <div> <Doughnut labels={labels} data={revenue} /></div>
  )
}

export default Donut