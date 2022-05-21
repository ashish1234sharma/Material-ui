import { Stack ,TextField,InputAdornment} from '@mui/material'
import {useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const MuiTextfield = () => {
    const [text,setText]=useState('')
  return (
      <Stack spacing={4}>
          <Stack spacing={2} direction='row'>
            <TextField label='name' fullWidth variant='outlined' />
            <TextField label='name' variant='filled' />
            <TextField label='name' variant='standard' />
          </Stack>
          <Stack spacing={2} direction='row'>
              <TextField label='small secondary'  size='small' color='secondary' />
              <TextField label='medium success' size='medium' color='success' />
              <TextField label='large error' size='large' color='error' />
          </Stack>
          <Stack spacing={2} direction='row'>
              <TextField label='Form input' required size='small' color='secondary' />
              <TextField label='Form input' required size='small' color='secondary' helperText='do not share your password' />
              
          </Stack>
          <Stack spacing={2} direction='row'>
              <TextField label='Password' type="password" required size='small' color='secondary' />
              <TextField label='Form input' type='text' required size='small' color='secondary' helperText='do not share your password' />
              <TextField label='read only'  InputProps={{readOnly:true}} />
          </Stack>
          <Stack spacing={2} direction='row'>
              <TextField label='Amount' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}} />
              <TextField label='weight'  InputProps={{endAdornment:<InputAdornment position='end'>
                  kg
              </InputAdornment>}}/>
              <TextField label='password' InputProps={{endAdornment:<InputAdornment position='end'><VisibilityOffIcon /></InputAdornment>}} />
              <TextField  
              
              required
              value={text}
              onChange={(e)=>setText(e.target.value)}
              error={!text}
              label={!text ? 'Required' : 'do not share your password'}
              helperText={!text ? 'Required' : 'do not share your password'}
               />
          </Stack>
          
      </Stack>
    
  )
}
