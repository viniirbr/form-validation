import React from 'react'
import Typography from '@mui/material/Typography';
import { HeaderWrapper } from './HeaderWrapper';

function Header() {
  return (
    <HeaderWrapper>
      <Typography
        variant='h3'
        component='h1'
        sx={{ color: '#fff', fontFamily:"Poppins, sans-serif", fontWeight: 700}}
        align='center'>Learn to code by watching others
      </Typography>
      <Typography
        variant='h6'
        component='h2'
        sx={{ color: '#fff', fontFamily:"Poppins, sans-serif", fontWeight: 400}}
        align='center'>See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how developers think is invaluable.
      </Typography>
    </HeaderWrapper>
  )
}

export default Header