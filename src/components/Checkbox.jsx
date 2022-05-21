import { Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup } from '@mui/material'
import {useState} from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Check } from '@mui/icons-material';

export const MuiCheckbox = () => {
  const [value,setValue]=useState(false)
  const [skills,setSkills]=useState(false)
  console.log(skills)
  return (
    <Box>
      <Box>
        <FormControlLabel label='I accept the terms and conditions' control={<Checkbox checked={value} 
        onChange={(e)=>setValue(e.target.checked)} />} />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
         checked={value} onChange={(e)=>setValue(e.target.checked)} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Check the skills</FormLabel>
          <FormGroup row >
           <FormControlLabel control={<Checkbox value='html' size='small' color='success' checked={skills}/>} label='HTML' onChange={(e)=>setSkills(e.target.checked)} />
           <FormControlLabel control={<Checkbox value='CSS' size='medium' color='success' checked={skills}/>} label='CSS'  onChange={(e)=>setSkills(e.target.checked)}/>
           <FormControlLabel control={<Checkbox value='React' size='large' color='success' checked={skills}/>} label='REACT'  onChange={(e)=>setSkills(e.target.checked)}/>

           
          </FormGroup>
        </FormControl>
      </Box>

    </Box>

    
  )
}
