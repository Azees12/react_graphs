import React from "react";
import Container from "@mui/material/Container"
import Appbar from "../appbar/app";
import SideDrawer from './../sidedrawer/drawer';
import Box from '@mui/material/Box';
import { DrawerHeader } from "../sidedrawer/Drawerstyle";

function Layout({children}) {
    return (
        <Box sx={{ display: 'flex' }}>
        <Appbar/>
        <SideDrawer/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
            {children}  
        </Box>
        </Box>
     
    )
}

export default Layout