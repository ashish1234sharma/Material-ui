import React from 'react'
import {Stack, Button ,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
      <Stack spacing={4} >
    <Stack spacing={2} direction='row'>
   <Button variant='text' fullWidth>text</Button>
   <Button variant='contained'>contained</Button>
   <Button variant='outlined'>outlined</Button>
   </Stack>

   <Stack spacing={2} direction='row'>
       <Button variant='contained' color='primary'>primary</Button>
       <Button variant='contained' color='secondary'>secondary</Button>
       <Button variant='contained' color='success'>success</Button>
       <Button variant='contained' color='warning'>warning</Button>
       <Button variant='contained' color='error'>Error</Button>
   </Stack>
   <br />
   <Stack spacing={2} direction='row'>
       <Button variant='outlined' color='primary'>Primary</Button>
       <Button variant='outlined' color='secondary'>Secondary</Button>
       <Button variant='outlined' color='success'>Success</Button>
       <Button variant='outlined' color='warning'>Warning</Button>
       <Button variant='outlined' color='error'>Error</Button>
   </Stack>
   <Stack spacing={2} direction='row'>
   <Button variant='text' color='primary'>Primary</Button>
       <Button variant='text' color='secondary'>Secondary</Button>
       <Button variant='text' color='success'>Success</Button>
       <Button variant='text' color='warning'>Warning</Button>
       <Button variant='text' color='error'>Error</Button>
   </Stack>
   <Stack  spacing={5} direction='coloumn'>
       <Button variant='contained' size='small'>Small</Button>
       <Button variant='contained' size='medium'>Medium</Button>
       <Button variant='contained' size='large'>Large</Button>
   </Stack>
   <Stack spacing={2} direction='row'>
       <Button variant='contained' startIcon={<SendIcon/>} size='large' disableElevation>Send</Button>
       <Button variant='contained' endIcon={<SendIcon/>} size='large' disableRipple>Send</Button>
       <IconButton aria-label='send' color='success' size='small' onClick={()=>{alert("hello")}}><SendIcon/></IconButton>
   </Stack>
   <Stack direction='row' >
       <ButtonGroup variant='contained' orientation='horizontal' color='secondary'>
       <Button >Left</Button>
       <Button >Centre</Button>
       <Button >Right</Button>
       </ButtonGroup>
   </Stack>
   <Stack direction='row'>
       <ToggleButtonGroup aria-label='text-formating'>
           <ToggleButton>left</ToggleButton>
           <ToggleButton>centre</ToggleButton>
           <ToggleButton>right</ToggleButton>
       </ToggleButtonGroup>
   </Stack>

   


   </Stack>
   
  )
}
