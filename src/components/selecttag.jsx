import { Box,TextField,MenuItem } from '@mui/material'
import  {useState} from 'react'

export const Muiselecttag = () => {

    const [country,setCountry]=useState([])
    console.log(country)

    // const handlechange=(e)=>{

    //     const {id,value}=e.target

    //     setCountry({
    //         ...country,
    //         [id]:value

    //     }
            
    //     )

    // }e
  return (
    
    <Box width='250px'>
        <TextField label='Select country'  select value={country} 
         onChange={(e)=>setCountry(e.target.value)} fullWidth SelectProps={{multiple:true}} size='small' color='secondary'helperText='please select country'>

            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='Au'>Australia</MenuItem>

        </TextField>
         <TextField label='select city' fullWidth select value={country} SelectProps={{multiple:true}} onChange={(e)=>setCountry(e.target.value)}>
             <MenuItem value='gw'>Gwalior</MenuItem>
             <MenuItem value='In'>indore</MenuItem>
             <MenuItem value='mu'>Mumbai</MenuItem>
             
             </TextField> 
    </Box>
  )
}
