import * as types from '../actions/types';

export default function MainReducer(state = {token: '', projects: [], tasks: []}, action) {
  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.token
      }
    case types.LOGOUT:
      return {
        ...state,
        token: ""
      }
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case types.SET_PROJECTS:
      return {
        ...state,
        projects: action.projects
      }
      case types.ADD_PROJECT:
        return {
          ...state,
          projects: [...state.projects, action.project]
        }
      case types.SET_TASKS:
        return {
          ...state,
          tasks: action.tasks
        }
    default:
      return state
  }
}