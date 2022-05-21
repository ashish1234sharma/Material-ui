import { Box,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio, FormHelperText } from '@mui/material'
import {useState} from 'react'

export const MuiRadiobutton = () => {
    const [value,setValue] =useState('')
    console.log(value)
  return (
    <Box width='250px' height='300px' color='black'>
        <FormControl >
            <FormLabel id='job'>Years of Experience</FormLabel>
            <RadioGroup value={value} onChange={(e)=>setValue(e.target.value)} name="job-expirience-group" aria-labelledby='job-expirience-group-lable'>
                <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-4' value='3-4' />
                <FormControlLabel control={<Radio />} label='5-6' value='5-6' />
            </RadioGroup>
            <FormHelperText>Type valid Credential</FormHelperText>
        </FormControl>
        <Box marginTop='30px'>

        <FormControl>
            <FormLabel>Cities</FormLabel>
            <RadioGroup name='city' value={value} onChange={(e)=>setValue(e.target.value)} row>
                <FormControlLabel control={<Radio size='large' color='secondary' />} label='Gwalior' value='Gwalior' />
                <FormControlLabel control={<Radio  size='small' color='warning'/>} label='Indore' value='Indore' />
                <FormControlLabel control={<Radio />} label='New delhi' value='New delhi' />
                <FormControlLabel control={<Radio />} label='Mumbai' value='Mumbai' />
            </RadioGroup>
        </FormControl>
        </Box>
        
    </Box>
  )
}
