import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawerhelper from '../sidedrawer/Drawerhelper';
import { AppBar } from './appstyle';
import useNavStore from '../store/NavStore';
import { useTheme } from '@emotion/react';

function Appbar() {

    const theme = useTheme();
    const open = useNavStore(state => state.open)
    const handleDrawerOpen = useNavStore(state => state.setOpen)

  return (
    <AppBar position="fixed" open={open}>
  <Toolbar variant="dense">
    <IconButton 
    color="inherit"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    sx={{
      marginRight: 5,
      ...(open && { display: 'none' }),
    }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap  color="inherit" component="div">
      Sales
    </Typography>
  </Toolbar>
</AppBar>
  )
}

export default Appbar