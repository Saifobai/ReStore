
import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  darkMode: boolean,
  handelThemeChange: () => void
}


const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'}
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
 
]

const navStyles ={
  color:'inherit', 
  textDecoration: 'none',
  typography:'h6',
  '&:hover':{color:"grey.500"},
  '&.active':{color:"text.secondary"},

}


export default function Header({darkMode, handelThemeChange}:Props) {
  return (

    <AppBar position='static' sx={{mb:4}}>
       <Toolbar>
          <Typography
          variant='h6'
          component={NavLink}
          to='/' 
          sx={navStyles}>
              RE-STORE
          </Typography>

        <Switch checked= {darkMode} onChange={handelThemeChange}/>

{/* here is the left links  */}
        <List sx={{display: 'flex'}}>
          {midLinks.map(({title, path}) => (
            <ListItem
            component={NavLink}
            to={path}
            key={path}
            sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

            {/* here is shopping cart */}
            <IconButton size="large" sx={{color:'inherit'}}>
              <Badge badgeContent={4} color="secondary">
            <ShoppingCart/>
              </Badge>
            </IconButton>

        {/* here is the right links */}
        <List sx={{display: 'flex', justifyContent: 'left'}}>
          {rightLinks.map(({title, path}) => (
            <ListItem
            component={NavLink}
            to={path}
            key={path}
            sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        </Toolbar>    
    </AppBar>
  )
}























