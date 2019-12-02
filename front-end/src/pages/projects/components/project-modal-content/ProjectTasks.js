import React, {Fragment} from 'react'
import { UncontrolledTooltip } from 'reactstrap';
import moment from 'moment'

export default function ProjectTasks(props) {
  return(
    <Fragment>
      <h3>To Do</h3>
      {props.tasks.filter(task => !task.finished).map(task =>
        <div key={task._id} style={{display: 'flex', justifyContent: 'space-between'}}>
          <a id={'tooltip' + task._id} href="#" onClick={() => props.setMode(task._id)} style={{width: '30%'}}>{task.title}</a>
          <UncontrolledTooltip placement="auto" target={'tooltip' + task._id}>Finish Date: {moment(task.finish_date).format('MM/DD/YYYY')}</UncontrolledTooltip>
          <span style={{width: '50%'}}>{task.description}</span>
          <a style={{width: '10%'}} href="#" onClick={() => props.taskDone(task._id)}>Done</a>
          <a style={{width: '10%'}} href="#" onClick={() => props.deleteTask(task._id)}>Delete</a>
        </div>
      )}
      <h3>Done</h3>
      {props.tasks.filter(task => task.finished).map(task =>
        <div key={task._id} style={{display: 'flex', justifyContent: 'space-between'}}>
          <span id={'tooltip' + task._id} style={{width: '30%'}}>{task.title}</span>
          <UncontrolledTooltip placement="auto" target={'tooltip' + task._id}>Finish Date: {moment(task.finish_date).format('MM/DD/YYYY')}</UncontrolledTooltip>
          <span style={{width: '50%'}}>{task.description}</span>
          <span style={{width: '20%'}}></span>
        </div>  
      )}
    </Fragment>
  )
}