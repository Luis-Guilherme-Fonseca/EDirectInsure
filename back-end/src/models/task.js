const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creation_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  finish_date: {
    type: Date,
    required: true
  },
  project_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Task', TaskSchema)