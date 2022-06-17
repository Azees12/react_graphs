import React, { useEffect } from 'react'
import { Item,Item2, Stats, Pie,GraphGrid } from './Salesstyles';
import useSalesStore from './../../store/SalesStore';
import Donut from '../../charts/donut';
import Table from '../../charts/table'
import Barchart from './../../charts/barchart';
import * as helper from './Saleshelper';
import Skeleton from '@mui/material/Skeleton';
import { Fade, Card, Grid,Box, TableContainer } from '@mui/material';
import { Bar } from 'react-chartjs-2';




function Sales() {
  console.count('counter')    
  const isLoading = useSalesStore(state => state.isLoading)
  const data = useSalesStore(state => state.data)
  helper.RetriveSales();
  
  
  
  
  return (
   
    <Box sx={{ flexGrow: 1,p: 3  }} style={{ display: 'flex', height: '100%' }} >
     
        <Grid style={{ display: 'flex', height: '100%' }} container spacing={{ xs: 2, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }} >
          
          <GraphGrid item xs={12} md={2.3} sx={{border: "1px solid red" }}>
          {isLoading ? (
             <Fade in={isLoading}>
                <Item elevation={4}  >
                  <Donut props={helper.PieChart(data,"category")}/>
                </Item>
             </Fade>
            
                ):
                <Skeleton
                animation="wave"
                height={400}
                />
            }
          </GraphGrid>

          <GraphGrid item xs={12} md={2.3} sx={{border: "1px solid red" }} >
          {isLoading ? (
             <Fade in={isLoading}>
                <Item elevation={4}>
                  <Donut props={helper.PieChart(data,"city")}/>
                </Item>
             </Fade>
            
                ):
                <Skeleton
                animation="wave"
                height={400}
                />
            }
          </GraphGrid>

          <GraphGrid item xs={12} md={2.3} sx={{border: "1px solid red" }}>
          {isLoading ? (
             <Fade in={isLoading}>
                <Item  elevation={4} >
                  <Donut props={helper.PieChart(data,"region")}/>
                </Item>
             </Fade>
            
                ):
                <Skeleton
                animation="wave"
                height={400}
                />
            }
          </GraphGrid>

          <GraphGrid item xs={12} md={5}  sx={{border: "1px solid red" }} >
          {isLoading ? (
             <Fade in={isLoading}>
              <Item2  >
                <Barchart props={helper.ProductSales(data)}/>
              </Item2>
              
              
             </Fade>
            
                ):
                <Skeleton
                animation="wave"
                height={400}
                />
            }
          </GraphGrid>


          <Grid item xs={12} md={9}>
            {isLoading ? (
              <Fade in={isLoading}>
                <Stats  elevation={4}>
                  Product Sales Line Graph 
                </Stats>
              </Fade>
              
                ):
               
                <Skeleton
                animation="wave"
                height={200}
                />
            }
          </Grid>

          <Grid item xs={12} md={3} >

            {isLoading ? (
               <Fade in={isLoading}>
                 <Stats elevation={4}>
                  Blank
                </Stats>
               </Fade>
               
                ):
                <Skeleton
                animation="wave"
                height={200}
                />
            }
            
          </Grid>
        



        <Grid item xs={12} md={4}>

          {isLoading ? (
             <Fade in={isLoading}>
               <Item>
                Histogram 
               </Item>
             </Fade>
              
                ):
                <Skeleton
                animation="wave"
                height={200}
                />
            }
        </Grid>
        
        <Grid item xs={12} md={8}>
          
          {isLoading ? (
               <Fade in={isLoading}>
                <Item >Line Graph</Item>
               </Fade>
              
                ):
                <Skeleton
                animation="wave"
                height={200}
                />
            }
        </Grid>

        <Grid item xs={12} md={12} style={{ display: 'flex', height: '52.6%' }} >
          {isLoading ? (
             <Fade in={isLoading}>
              <TableContainer  >
                <Table props={helper.TableData(data)}/>
              </TableContainer>
            
             </Fade>
            
                ):
                <Skeleton
                animation="wave"
                height={200}
                />
            }
        </Grid>

      </Grid>

  </Box>
  )
}

export default Sales