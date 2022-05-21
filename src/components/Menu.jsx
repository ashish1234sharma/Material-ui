import { MenuItem,Menu,Stack ,Button} from '@mui/material'
import { useState } from 'react'


export const MuiMenu = () => {
    const[anchorEl,setAnchorel]=useState(null)
    const open =Boolean(anchorEl)


    const handleclick=(e)=>{
       
        setAnchorel(e.currentTarget)
    }
    const handleclose=()=>{
        setAnchorel(null)
    }
  return (
      <>
      <Menu id='resources-menu' anchorEl={anchorEl} open={open} onClose={handleclose}>
          <MenuItem  onClick={()=>console.log("ashish")}>Blog</MenuItem>
          <MenuItem onClick={()=>console.log("ashish")}>Podcast</MenuItem>
          
      </Menu>
      <Button color='primary' id='resources-button' onClick={handleclick}>Resources</Button>
      
      </>
    
  )
}
