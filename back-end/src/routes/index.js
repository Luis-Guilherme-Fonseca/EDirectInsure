module.exports = function(app) {
  const UserController = require('../controllers/users')
  const ProjectController = require('../controllers/projects')
  const TaskController = require('../controllers/tasks')
  const AuthMiddleware = require('../middlewares/auth')

  app.post('/signup', UserController.signUp)

  app.post('/signin', UserController.signIn)

  // Routes with authentication
  app.use(AuthMiddleware)

  app.route('/project')
    .get(ProjectController.getProjects)
    .post(ProjectController.createProject)
  
  app.route('/project/:projectId')
    .get(TaskController.getTasks)
    .put(ProjectController.editProject)
    .delete(ProjectController.deleteProject)

  app.route('/task')
    .post(TaskController.addTask)
    
  app.route('/task/:taskId')
    .get(TaskController.getTask)
    .put(TaskController.editTask)
    .delete(TaskController.deleteTask)
}