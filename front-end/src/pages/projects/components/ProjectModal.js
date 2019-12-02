import React, {useEffect, useState, Fragment} from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux';
import { Button } from '../../../components/Form/Styled';
import { getProjectTasks } from '../../../actions/projects';
import ProjectTasks from './project-modal-content/ProjectTasks';
import AddTask from './project-modal-content/AddTask';
import { createTask, finishTask, deleteTask, editTask } from '../../../actions/tasks';

function ProjectModal(props){
  const [modalInfo, setModalInfo] = useState('project')
  const [newTask, setNewTask] = useState({})
  const {projectId, isOpen, tasks} = props
  useEffect(() => {
    if(projectId) props.getProjectTasks(projectId)
  }, [projectId, isOpen, tasks])

  const saveTask = () => {
    if(modalInfo === 'newTask'){
      props.createTask(projectId, newTask)
    } else if(modalInfo === 'editTask') {
      props.editTask(newTask._id, {title: newTask.title, description: newTask.description})
    }
    setNewTask({})
    setModalInfo('project')
  }

  const setEditMode = (taskId) => {
    if(!taskId) return
    setNewTask(tasks.find(task => task._id === taskId))
    setModalInfo('editTask')
  }

  return (
    <Modal size="lg" isOpen={isOpen}>
      <ModalHeader>
        {props.project}
      </ModalHeader>
      <ModalBody>
        {modalInfo === 'project' 
          ?
            <ProjectTasks setMode={setEditMode} tasks={tasks} taskDone={props.finishTask} deleteTask={props.deleteTask} />
          :
            <AddTask mode={modalInfo} task={newTask} updateTask={(val) => setNewTask({...newTask, ...val})}/>
        }
      </ModalBody>
      <ModalFooter>
        {modalInfo === 'project' 
          ?
            <Button onClick={() => setModalInfo('newTask')}>Add Task</Button>          
          :
            <Fragment>
              <Button onClick={saveTask} >Save</Button>
              <Button onClick={() => setModalInfo('project')} >See Task List</Button>
            </Fragment> 
        }
        <Button onClick={props.onClose} >Close</Button>
      </ModalFooter>
    </Modal>
  )
}

export default connect(state => ({tasks: state.tasks}), {getProjectTasks, createTask, finishTask, deleteTask, editTask})(ProjectModal)