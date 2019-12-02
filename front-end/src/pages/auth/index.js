import React, {useState} from 'react';
import { LoginContainer, LoginPage } from './Styled';
import Login from './components/Login';
import Register from './components/Register';
import { connect } from 'react-redux'
import { login, signup } from '../../actions/auth';

const Auth = (props) => {
  const [page, setPage] = useState('login')
  const register = (username, password, passwordConfirm) => {
    if(password === passwordConfirm) props.signup(username, password)
    else alert('password and confirmation must have equal values')
  }
  return (
    <LoginPage>
      <LoginContainer>
        <h2 style={{color: 'blue'}} >EdirectInsure</h2>
        {page === 'login' 
          ?
            <Login onLogin={props.login} onSwitch={() => setPage('register')} />
          :
            <Register onRegister={register} onSwitch={() => setPage('login')} />
        }
      </LoginContainer>
    </LoginPage>
  )
}

export default connect(null, {login, signup})(Auth)