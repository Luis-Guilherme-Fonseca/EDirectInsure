import React, {useState, Fragment} from 'react';
import { Button, Input } from '../../../components/Form/Styled';
import { ProjectsContainer } from '../Styled';

export default function Projects(props) {
  const [title, setTitle] = useState('')
  const [editProject, setProject] = useState({})

  const saveProject = () => {
    props.editProject(editProject._id, editProject.project)
    setProject({})
  }

  return(
    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '7vh'}}>
      {props.projects.map(project => 
        <ProjectsContainer key={project._id}>
          {editProject._id === project._id
            ?
              <div>
                <Input onChange={e => setProject({...editProject, project: e.target.value})} type="text" value={editProject.project}/>
                <Button color="#0000ff" onClick={() => saveProject(project._id)} >Save</Button>
                <Button color="#ff0000" onClick={() => props.deleteProject(project._id)} >Delete</Button>
                <Button color="#ABABAB" onClick={() => setProject({})} >Cancel</Button>
              </div>
            :
              <Fragment>
                <h3>{project.project}</h3>
                <Button onClick={() => props.selectProject(project._id)} >See more</Button>
                <Button onClick={() => setProject(project)} >Edit project</Button>
              </Fragment>
          }
        </ProjectsContainer>
      )}
      <ProjectsContainer>
        <Input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Project Title" />
        <Button onClick={() => props.createProject(title)}>Add New Project</Button>
      </ProjectsContainer>
    </div>
  )
} 