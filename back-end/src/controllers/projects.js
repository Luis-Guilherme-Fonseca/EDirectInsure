const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.createProject = function(req, res) {
  const project = new Project({
    project: req.body.project,
    user_id: res.locals.decoded.id
  })
  try {
    project.save().then(newProject => {
      res.status(201).json({ message: "Project successfuly created", project: newProject })
    }, err => {
      console.log(err)
      res.status(500).json({ message: 'internal server error' })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getProjects = function(req, res) {
  try {
    Project.find({ user_id: res.locals.decoded.id }, function(err, projects) {
      if(err) res.status(400).json({ message: err.message })

      res.status(201).json({ projects })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.editProject = function(req, res) {
  try {
    Project.findByIdAndUpdate(req.params.projectId, { project: req.body.project }, { new: true }, function(err, project) {
      if(err) res.status(400).json({ message: err.message })

      res.status(201).json({ project, message: "project successfuly updated" })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.deleteProject = function(req, res) {
  try {
    Project.findByIdAndRemove(req.params.projectId, function(err, project) {
      if(err) res.status(400).json({ message: err.message })

      res.status(201).json({ message: "project deleted" })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}