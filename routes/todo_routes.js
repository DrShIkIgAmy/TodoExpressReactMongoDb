const { Router } = require('express')
const controllers = require('../controllers/todo_controllers')

const router = Router()

router.get('/test', (req, res) => {
    res.send('Hello World!')
  })

router.get('/get_all_todos', controllers.GetRetrieveAll);
router.get('/get_todo', controllers.GetRetrieveById);

router.delete('/delete_all', controllers.PostRemoveAll);
router.delete('/delete_todo', controllers.PostRemoveById);

router.post('/modify_todo', controllers.PostModifyById);
router.post('/add_todo', controllers.PostAdd);

module.exports = router
