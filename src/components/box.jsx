import { Box } from '@mui/material'
import React from 'react'

export const Muibox = () => {
  return (
    <>
  <Box sx={{width:"250px", border:"1px solid red" ,height:"250px",bgcolor:"primary.main" ,
  color:"white" , '&:hover':{bgcolor:"pink"}}} >Materialui box component</Box>
  <Box></Box>
  </>
  )
}
