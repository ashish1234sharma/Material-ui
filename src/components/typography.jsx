import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography=()=> {

  return(
      <>
      <Typography variant="h1"> h1 heading</Typography>
      <Typography variant="h2"> h2 heading</Typography>
      <Typography variant="h3"> h3 heading</Typography>
      <Typography variant="h4"> h4 heading</Typography>
      <Typography variant="h5" > h5 heading</Typography>
      <Typography variant="h6" component='h1' > h6 heading</Typography>
      <Typography variant="p" > p heading</Typography>

      <Typography variant="subtitle1"> subtitle1</Typography>
      <Typography variant="subtitle2"> subtitle2</Typography>


      <Typography variant="body1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perferendis. Veniam illo nostrum reprehenderit, repellat ducimus debitis earum modi et! Natus repellat dicta eum nemo delectus facilis quia maxime expedita!</Typography>
      <Typography variant="body2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, repellat doloremque similique rem adipisci eligendi sunt odio ipsa veritatis eaque, necessitatibus, laudantium deserunt hic praesentium asperiores cupiditate quas non! Doloribus!</Typography>
      </>

     
  )
}
