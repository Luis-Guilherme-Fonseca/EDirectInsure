import React, {useEffect, useState} from 'react';
import { Header } from './Styled';
import { connect } from 'react-redux'
import { getProjects, createProject, editProject, deleteProject } from '../../actions/projects';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import { logout } from '../../actions/auth';

const Project = (props) => {
  const [isOpen, opeModal] = useState(false) 
  const [project, setProject] = useState({}) 
  useEffect(() => {
    props.getProjects()
  })
  const selectProject = (projectId) => {
    setProject(props.projects.find(proj => proj._id === projectId))
    opeModal(true)
  }
  const onClose = () => {
    setProject({})
    opeModal(false)
  }

  const logout = () => {
    localStorage.removeItem('accessToken')
    props.logout()
  }
  return (
    <div>
      <Header>
        <span>EdirectInsure</span>
        <a href="#" onClick={logout}>Logout</a>
      </Header>
      <Projects deleteProject={props.deleteProject} editProject={props.editProject} projects={props.projects} createProject={props.createProject} selectProject={selectProject} />
      <ProjectModal isOpen={isOpen} projectId={project._id} project={project.project} onClose={onClose} />
    </div>
  )
}

export default connect(state => ({projects: state.projects}), {getProjects, createProject, editProject, deleteProject, logout})(Project)