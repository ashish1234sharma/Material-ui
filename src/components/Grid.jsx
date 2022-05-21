import { Box,Grid,Paper } from '@mui/material'
import React from 'react'

export const MuiGrid = () => {
  return (
    
    <>
    <Paper sx={{padding:"32px"}} elevation={4}>
    <Grid container spacing={2}  >
        <Grid item xs  sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs  sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs  sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs  sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
    </Grid>
    </Paper>
    
    </>
  )
}
