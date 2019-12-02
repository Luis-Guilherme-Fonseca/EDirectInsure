import React, { Fragment, useState } from 'react';
import { Input, Form, Button } from '../../../components/Form/Styled';

const Register = ({onRegister, onSwitch}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  return (
    <Fragment>
      <Form>
        <label>Username</label>
        <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
        <label>Password</label>
        <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
        <label>Password Confirmation</label>
        <Input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="password" />
      </Form>
      <Button color="#02B8DC" onClick={() => onRegister(username, password, passwordConfirmation)}>Register</Button>
      <Button onClick={onSwitch} >I Have an account</Button>
    </Fragment>
  )
}

export default Register