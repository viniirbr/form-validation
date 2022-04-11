import React from 'react'
import TextField from '@mui/material/TextField';
import { FormWrapper } from './FormWrapper';

function Form() {
  return (
    <FormWrapper>
      <TextField variant="outlined" label='First Name'/>
      <TextField variant="outlined" label='Last Name'/>
      <TextField variant="outlined" label='Email address'/>
      <TextField variant="outlined" label='Password'/>
    </FormWrapper>
  )
}

export default Form