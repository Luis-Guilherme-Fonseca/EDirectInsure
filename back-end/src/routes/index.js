module.exports = function(app) {
  const UserController = require('../controllers/users')
  const ProjectController = require('../controllers/projects')
  const AuthMiddleware = require('../middlewares/auth')

  app.post('/signup', UserController.signUp)

  app.post('/signin', UserController.signIn)

  // Routes with authentication
  app.use(AuthMiddleware)

  app.route('/project')
    .get(ProjectController.getProjects)
    .post(ProjectController.createProject)
  
  app.route('/project/:projectId')
    .put(ProjectController.editProject)
    .delete(ProjectController.deleteProject)
}