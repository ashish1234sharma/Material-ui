import { Stack,Divider } from '@mui/material'
import React from 'react'


export const Muistack = () => {
  return (
    <>
    <Stack sx={{border:"1px solid red"}} direction="row" spacing={4} divider={<Divider orientation='vertical' flexItem/>} >

    </Stack>
    
    </>
  )
}
