import * as types from './types'

export function getProjects() {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch('http://localhost:8080/project', {method: 'GET', headers: { "Content-Type": "application/json", "accesstoken": token }})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch({type: types.SET_PROJECTS, projects: res.projects})
      })
      .catch(err => console.error(err))
  }
}

export function createProject(project) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch('http://localhost:8080/project', {method: 'POST', headers: {"Content-Type": "application/json", "accesstoken": token }, body: JSON.stringify({project})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch({type: types.ADD_PROJECT, project: res.project})
      })
      .catch(err => console.error(err))
  }
}

export function editProject(projectId, project) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch(`http://localhost:8080/project/${projectId}`, {method: 'PUT', headers: {"Content-Type": "application/json", "accesstoken": token }, body: JSON.stringify({project})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(getProjects)
      })
      .catch(err => console.error(err))
  }
}

export function deleteProject(projectId) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch(`http://localhost:8080/project/${projectId}`, {method: 'DELETE', headers: {"Content-Type": "application/json", "accesstoken": token }})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(getProjects)
      })
      .catch(err => console.error(err))
  }
}

export function getProjectTasks(projectId) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch(`http://localhost:8080/project/${projectId}`, {method: 'GET', headers: {"Content-Type": "application/json", "accesstoken": token }})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch({type: types.SET_TASKS, tasks: res.tasks})
      })
      .catch(err => console.error(err))
  }
}