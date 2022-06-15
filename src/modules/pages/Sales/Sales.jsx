import React from 'react'
import Grid from '@mui/material/Grid';
import { Item, Stats } from './Salesstyles';
import Box from '@mui/material/Box';
import useSalesStore from './../../store/SalesStore';
import Donut from '../../charts/donut';
import * as helper from './Saleshelper';


function Sales() {
  
  helper.RetriveSales();
  const data = useSalesStore(state => state.data)
  
  return (
   
    <Box sx={{ flexGrow: 1,p: 3  }}>
     
        <Grid container spacing={{ xs: 5, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid item xs={12} md={9}>
          <Stats  elevation={4}> Statistics </Stats>
        </Grid>
        <Grid item xs={12} md={3}>
        <Stats elevation={4}> Total Revenue: {helper.getTotal(data)}</Stats>
        </Grid>
      
        <Grid item xs={12} md={8}>
          <Item>Table</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item></Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Histogram</Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>Line Graph</Item>
        </Grid>
      </Grid>

  </Box>
  )
}

export default Sales