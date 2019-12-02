import React, {Fragment} from 'react'
import { Input } from '../../../../components/Form/Styled'
import moment from 'moment'

export default function AddTask(props) {
  const {mode, task} = props
  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
      <label>Title</label>
      <Input value={mode ? task.title : undefined} onChange={(e) => props.updateTask({title: e.target.value})} border="1px solid lightgray" type="text" />
      <label>Description</label>
      <Input value={mode ? task.description : undefined} onChange={(e) => props.updateTask({description: e.target.value})} border="1px solid lightgray" type="text" />
      {mode !== 'editTask' &&
        <Fragment>
          <label>Finish Date</label>
          <Input onChange={(e) => props.updateTask({finish_date: moment(e.target.value).format('YYYY-MM-DD')})} border="1px solid lightgray" type="date" />
        </Fragment>
      }
    </div>
  )
}