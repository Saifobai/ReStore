
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
  darkMode: boolean,
  handelThemeChange: () => void
}

export default function Header({darkMode, handelThemeChange}:Props) {
  return (

    <AppBar position='static' sx={{mb:4}}>
       <Toolbar>
        <Typography>
            RE-STORE
        </Typography>
        <Switch checked= {darkMode} onChange={handelThemeChange}/>
        </Toolbar>    
    </AppBar>
  )
}


























































