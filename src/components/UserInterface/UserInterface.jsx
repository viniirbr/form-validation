import React from 'react'
import Form from '../Form/Form'
import Button from '@mui/material/Button';
import { UserInterfaceWrapper } from './UserInterfaceWrapper';


function UserInterface() {
  return (
    <UserInterfaceWrapper>
      <Button 
      variant='contained'
      fullWidth='true'
      >Try it free 7 days then $20/mo. thereafter</Button>
      <Form>
        
      </Form>
      
    </UserInterfaceWrapper>
  )
}

export default UserInterface