import React, { useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './pages/auth';
import Project from './pages/projects';
import { setToken } from './actions/auth';

function Router(props) {
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    props.dispatch(setToken(token))
  }, [])
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => props.auth ? <Redirect to="/project" /> : <Auth /> }/>
        <Route exact path='/project' render={() => props.auth ? <Project /> : <Redirect to="/" /> }/>
      </Switch>
    </BrowserRouter>
  )
}

export default connect(state => ({auth: state.token}))(Router)