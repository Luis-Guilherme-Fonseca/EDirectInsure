import { getProjectTasks } from './projects'

export function createTask(projectId, task) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch('http://localhost:8080/task', {method: 'POST', headers: { "Content-Type": "application/json", "accesstoken": token }, body: JSON.stringify({...task, project_id: projectId})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(getProjectTasks)
      })
      .catch(err => console.error(err))
  }
}

export function finishTask(taskId) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch(`http://localhost:8080/task/${taskId}`, {method: 'PUT', headers: {"Content-Type": "application/json", "accesstoken": token }, body: JSON.stringify({finished: true})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(getProjectTasks)
      })
      .catch(err => console.error(err))
  }
}

export function editTask(taskId, task) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch(`http://localhost:8080/task/${taskId}`, {method: 'PUT', headers: {"Content-Type": "application/json", "accesstoken": token }, body: JSON.stringify({...task})})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(getProjectTasks)
      })
      .catch(err => console.error(err))
  }
}

export function deleteTask(taskId) {
  return (dispatch, getState) => {
    const {token} = getState()
    return fetch(`http://localhost:8080/task/${taskId}`, {method: 'DELETE', headers: {"Content-Type": "application/json", "accesstoken": token }})
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch(getProjectTasks)
      })
      .catch(err => console.error(err))
  }
}