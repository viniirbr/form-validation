import React from 'react'
import TextField from '@mui/material/TextField';
import { FormWrapper } from './FormWrapper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Form() {
  return (
    <FormWrapper>
      <TextField variant="outlined" label='First Name' sx={{ mb: '15px' }} />
      <TextField variant="outlined" label='Last Name' sx={{ mb: '15px' }} />
      <TextField variant="outlined" label='Email address' sx={{ mb: '15px' }} />
      <TextField variant="outlined" label='Password' sx={{ mb: '15px' }} />
      <Button variant='contained' style={{ background: 'hsl(154, 59%, 51%)' }}>Claim your free trial</Button>
      <Typography
        variant='subtitle1'
        component='p'
        style={{ color: 'hsl(246, 25%, 77%)', lineHeight: '20px'}}>
        By clicking the button you are agreeing with our terms and services.
      </Typography>
    </FormWrapper>
  )
}

export default Form