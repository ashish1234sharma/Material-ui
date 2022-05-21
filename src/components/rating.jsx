import { Box ,Stack,Rating} from '@mui/material'
import {useState} from 'react'


export const Muirating = () => {
    const[value,setValue] = useState(null)
   
    console.log(value)
  return (
    <Box>
        <Stack spacing={2}>
            <Rating value={value} onChange={(e)=>setValue(e.target.value)} precision={0.5} size='large' highlightSelectedOnly />
        </Stack>

    </Box>
  )
}
