import { Stack,Avatar,AvatarGroup } from '@mui/material'
import React from 'react'

export const Muiavatar = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={1} direction='row'>
            <Avatar sx={{bgcolor:'red'}}>AS</Avatar>
            <Avatar sx={{bgcolor:'green'}}>BW</Avatar>
        </Stack>
        <Stack spacing={1} direction='row'>
            <AvatarGroup max={3}>
            <Avatar src='https://s.yimg.com/fz/api/res/1.2/G2ITfNm9SCvccJryYp4YPQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/1b0d8b91f8941efa721b0e2e51be7ae4' alt='image'></Avatar>
            
            <Avatar src='https://s.yimg.com/fz/api/res/1.2/G2ITfNm9SCvccJryYp4YPQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjg7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/1b0d8b91f8941efa721b0e2e51be7ae4' alt='image'></Avatar>
            <Avatar src='https://s.yimg.com/fz/api/res/1.2/kzsNSfXCiAPI10_QPvtipA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2Mw--/https://s.yimg.com/zb/imgv1/da9ebeba-e106-3376-9625-98a2c2c870ce/t_500x300' alt='image'></Avatar>
            <Avatar src='https://s.yimg.com/fz/api/res/1.2/kzsNSfXCiAPI10_QPvtipA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2Mw--/https://s.yimg.com/zb/imgv1/da9ebeba-e106-3376-9625-98a2c2c870ce/t_500x300' alt='image'></Avatar>
            </AvatarGroup>
        </Stack>

    </Stack>
  )
}
