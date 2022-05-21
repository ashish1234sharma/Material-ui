import React from 'react'
import { AppBar,Toolbar,IconButton,Typography,Button,Stack,TextField,InputAdornment } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';


export const Muinavbar = () => {
  return (
    <AppBar position='static' sx={{bgcolor:'black'}}>
        <Toolbar sx={{height:'150px'}}>
            <IconButton size="large" edge='start' >
                <YouTubeIcon sx={{fontSize:'60px', color:'red'}}  />
            </IconButton>
            <Typography varient='h6' component='div' >YouTube</Typography>
            <Stack sx={{width:'550px' ,marginLeft:"150px",borderRadius:'20px'}} >
                <TextField variant='outlined' fullWidth size='small'  
                 
                  color='secondary'
                   sx={{bgcolor:'white',borderRadius:'10px'}}
                   InputProps={{endAdornment:<IconButton sx={{color:'black'}} > < SearchIcon  /></IconButton>}}
                    />
                    {/* <IconButton sx={{color:'white'}} > < SearchIcon  /></IconButton> */}
                    
            </Stack>
            <Stack spacing={2} direction='row' sx={{marginLeft:'150px'}}>
                <Button variant='text' sx={{color:'white'}}>Home</Button>
                <Button variant='text' sx={{color:'white'}}>About</Button>
                <Button variant='text' sx={{color:'white'}}>Signin</Button>

            </Stack>

        </Toolbar>

    </AppBar>
  )
}
