import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

  export const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    alignItems: 'center',
    justifyItems:'center,',
    color: theme.palette.text.secondary,
  }));

  export const Item2 = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    alignItems: 'center',
    justifyItems:'center,',
    color: theme.palette.text.secondary,
  }));
  export const GraphGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyItems:'center,',
    color: theme.palette.text.secondary,

  }));

  export const TableContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    color: theme.palette.text.secondary,

  }));
  export const Pie = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    color: theme.palette.text.secondary,
    elevation: 4
  }));



  export const Stats = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body3,
    padding: theme.spacing(4),
    fontWeight: 'bold',
    textAlign: 'Left',
    fontSize: 20,
    color: theme.palette.text.secondary,
    
  }));

  export const Loader = styled(Skeleton)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body3,
    padding: theme.spacing(4),
    fontWeight: 'bold',
    textAlign: 'Left',
    fontSize: 20,
    color: theme.palette.text.secondary,
  }));