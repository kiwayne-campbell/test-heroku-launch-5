const router = require('express').Router();
const retreatsController = require('../controllers/retreats');
const blogsController = require('../controllers/blogs');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/retreats')
  .get(retreatsController.index)
  .post(retreatsController.create);

router.route('/retreats/:id')
  .get(retreatsController.show)
  .put(retreatsController.update)
  .delete(retreatsController.delete);

router.route('/blogs')
  .get(blogsController.index)
  .post(blogsController.create);

router.route('/blogs/:id')
  .get(blogsController.show)
  .put(blogsController.update)
  .delete(blogsController.delete);

module.exports = router;
