import { Drawer ,Box,Typography,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'

export const Muidrawer = () => {
    const [drawer,setDrawer]=useState(false)
  return (
      <>
      <IconButton size='large' edge='start' onClick={()=>setDrawer(true)}>
          <MenuIcon />
      </IconButton>
    <Drawer anchor='left' open={drawer} onClose={()=>setDrawer(false)}>
<Box p={2} width='250px' textAlign='centre' role='presentation'>
    <Typography variant='h6' component='div'>
        Side Panel 
    </Typography>
</Box>

    </Drawer>
    </>
  )
}
