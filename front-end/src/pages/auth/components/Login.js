import React, { Fragment, useState } from 'react';
import { Input, Form, Button } from '../../../components/Form/Styled';

const Login = ({onLogin, onSwitch}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Fragment>
      <Form>
        <label>Username</label>
        <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
        <label>Password</label>
        <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      </Form>
      <Button color="#02B8DC" onClick={() => onLogin(username, password)}>Login</Button>
      <Button onClick={onSwitch} >Create New Account</Button>
    </Fragment>
  )
}

export default Login