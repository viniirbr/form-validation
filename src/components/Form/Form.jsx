import React from 'react'
import { TextField, Typography } from '@mui/material';
import { FormWrapper } from './FormWrapper';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form'

function Form() {

  const { register, handleSubmit, watch, formState: { errors }} = useForm();


  const isOlderThan18 = () => {
    const birth = new Date(watch('date'))
    const dateIf18 = new Date(birth.getUTCFullYear() + 18, birth.getUTCMonth(), birth.getUTCDay());
    const today = new Date();
    return (dateIf18 <= today);
  }

  console.log(errors)

  const onSubmit = (e) => {
    console.log(e)
  }  

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        {...register('firstname',
          {
            required: 'The first name input must be filled.',
            minLength: {
              value: 4,
              message: 'The first name input should have more than 3 letters.'
            }
          })}
        error={errors.firstname === undefined ? false : true}
        helperText={errors.firstname?.message}
        type='text'
        label='First Name'
        sx={{ mb: '15px' }}
        />

      <TextField
        variant="outlined"
        {...register('lastname',
          {
            required: 'The last name input must be filled.',
            minLength: {
              value: 4,
              message: 'The last name input should have more than 3 letters.'
            }
          })}
        error={errors.lastname === undefined ? false : true}
        helperText={errors.lastname?.message}
        type='text'
        label='Last Name'
        sx={{ mb: '15px' }}
    />

      <TextField
        variant="outlined"
        {...register('email', {
          required: 'The email input must be filled.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Enter a valid email address.'
          }
        })}
        error={errors.email === undefined ? false : true}
        helperText={errors.email?.message}
        label='Email address'
        sx={{ mb: '15px' }} />

      <TextField
        variant="outlined"
        {...register('date',
          {
            required: 'The date input must be filled.',
            validate: isOlderThan18 || 'teste'
          })}
        error={errors.date === undefined ? false : true}
        helperText={errors.date && 'You should be more than 18 to sign up.'}
        type='date'
        sx={{ mb: '15px' }} />

      <TextField
        variant="outlined"
        {...register('password',
          {
            required: 'The password input must be filled.',
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[])/,
              message: 'The password should have at least one digit, one lowercase letter, one uppercase letter and one special character.',

            },
          })}
        error={errors.password === undefined ? false : true}
        helperText={errors.password?.message}
        type='password'
        label='Password'
        sx={{ mb: '15px' }} />

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