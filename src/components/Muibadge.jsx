import { Stack,Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import React from 'react'

export const Muibadge = () => {
  return (
    <Stack spacing={2} direction='row' sx={{marginTop:"50px"}}>
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='secondary' showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='primary' >
        <MailIcon />
      </Badge>
      <Badge variant='dot' color='primary' >
        <MailIcon />
      </Badge>
    </Stack>
  )
}
