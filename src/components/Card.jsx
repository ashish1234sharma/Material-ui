import { Box,Card,CardContent,Typography,CardActions,Button,CardMedia } from '@mui/material'
import React from 'react'

export const MuiCard = () => {
  return (
    <Box sx={{width:"600px",display:'flex',marginLeft:'40px',justifyContent:'space-around'}} >
        <Card>
            <CardMedia component='img' height='140' image='https://tse4.mm.bing.net/th?id=OIP.HlXkoz5exV82BHJYYvcMXAHaE6&pid=Api&P=0&w=291&h=193' />
            <CardContent>
                <Typography guttorBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>
                    React is a javascript library which we use for making single page web application
                </Typography>

            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>learn more</Button>
            </CardActions>
        </Card>
        
        <Card sx={{marginLeft:'20px'}}>
            <CardMedia component='img' height='140' image='https://tse4.mm.bing.net/th?id=OIP.HlXkoz5exV82BHJYYvcMXAHaE6&pid=Api&P=0&w=291&h=193' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' >Javascript</Typography>
                <Typography variant='body2' color="text.secondary">
                    React is a javascript library which we use for making single page web application
                    </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary'>Learn more</Button>
            </CardActions>
        </Card>


    </Box>
  )
}
