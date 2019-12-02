import * as types from './types'

export function login(username, password) {
  return (dispatch) => {
    return fetch('http://localhost:8080/signin', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({password, username})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch({type: types.LOGIN, token: res.token})
        localStorage.setItem('accessToken', res.token)
      })
      .catch(err => console.error(err))
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}

export function signup(username, password) {
  return (dispatch) => {
    return fetch('http://localhost:8080/signup', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({password, username})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch({type: types.SIGN_UP})
        alert(res.message)
      })
      .catch(err => console.error(err))
  }
}

export function setToken(token) {
  return {
    token,
    type: types.SET_TOKEN
  }
}