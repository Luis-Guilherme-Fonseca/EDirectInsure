const mongoose = require('mongoose');
const Task = mongoose.model('Task');

exports.addTask = function(req, res) {
  console.log(req.body)
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    finish_date: req.body.finish_date,
    project_id: req.body.project_id
  })

  try {
    task.save().then(newTask => {
      res.status(200).json({ message: "Task added", project: newTask })
    }, err => {
      console.log(err)
      res.status(500).json({ message: 'internal server error' })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getTasks = function(req, res) {
  try {
    Task.find({ project_id: req.params.projectId }, function(err, tasks) {
      if(err) return res.status(400).json({ message: err.message })

      res.status(201).json({ tasks })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getTask = function(req, res) {
  try {
    Task.findById(req.params.taskId , function(err, task) {
      if(err) return res.status(400).json({ message: err.message })

      res.status(201).json({ task })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.editTask = function(req, res) {
  try {
    Task.findById(req.params.taskId, function(err, task) {
      if(err) return res.status(400).json({ message: err.message })
      if(task.finished) return res.status(403).json({ message: "this task cannot be updated" })


      const { title, description, finished } = req.body
      
      if(title) task.title = title;
      if(description) task.description = description;
      if(finished) task.finished = finished;

      task.save().then(updatedTask => {
        res.status(200).json({ message: "Task updated", project: updatedTask })
      }, err => {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
      })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.deleteTask = function(req, res) {
  try {
    Task.findById(req.params.taskId, function(err, task) {
      if(err) return res.status(400).json({ message: err.message })
      if(task.finished) return res.status(403).json({ message: 'finished tasks cannot be deleted' })
      
      task.remove(function(error) {
        if(error) return res.status(400).json({ message: error.message })
        res.status(201).json({ message: "task deleted" })
      })
    })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}