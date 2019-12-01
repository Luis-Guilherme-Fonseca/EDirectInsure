const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Project', ProjectSchema)