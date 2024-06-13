import { useContext } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { MyThemeContext } from './MyThemeProvider';
import { Box, Typography, MenuItem, Toolbar, AppBar, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import {Menu} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import './App.css'

export default function NavBar() {
    const { theme } = useContext(MyThemeContext);
    const [drawerOpen, setDrawerOpen]= useState(false);
    const menuItems = [
        {"text": "Home", "path":"/"},
        {"text": "Dashboard", "path":"/dash"},
        {"text": "About", "path":"/about"},
        {"text": "Posts", "path":"/posts"}
    ]

    function handleDrawerToggle()
    {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
        <Box>
            <AppBar>
               <Toolbar>
                    <IconButton edge="start" onClick={handleDrawerToggle} color="inherit" aria-label='menu' sx={{marginRight: 2}}>
                        <MailIcon></MailIcon>
                    </IconButton>
                    <Typography variant='h6' component="div" sx={{flexGrow: 0.5}}>My App</Typography>
                    <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
                        {menuItems.map((item)=> (
                            <MenuItem component={NavLink} to={item.path} key={item.text}>
                                {item.text}
                            </MenuItem>
                        ))}
                    </Box>
               </Toolbar>
            </AppBar>
        </Box>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} sx={{width: 240}}>
            <List sx={{width: 240}}>
                {menuItems.map((item)=> (
                    <ListItem key={item.text} component={NavLink} to={item.path}>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        </>
    )
       
}