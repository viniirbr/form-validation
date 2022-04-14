import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { FormWrapper } from './FormWrapper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const log = (e) => {
    e.preventDefault();
    window.alert('Você logou!')
  }
  return (
    <FormWrapper onSubmit={log}>
      <TextField
        variant="outlined"
        type='text'
        label='First Name'
        required
        sx={{ mb: '15px' }}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} />

      <TextField
        variant="outlined"
        type='text'
        label='Last Name'
        sx={{ mb: '15px' }}
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)} />

      <TextField
        variant="outlined"
        type='email'
        label='Email address'
        sx={{ mb: '15px' }}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        
      <TextField
        variant="outlined"
        type='password'
        label='Password'
        sx={{ mb: '15px' }}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <Button
        variant='contained'
        style={{ background: 'hsl(154, 59%, 51%)' }}
        type='submit'>Claim your free trial</Button>
      <Typography
        variant='subtitle1'
        component='p'
        style={{ color: 'hsl(246, 25%, 77%)', lineHeight: '20px' }}>
        By clicking the button you are agreeing with our terms and services.
      </Typography>
    </FormWrapper>
  )
}

export default Form