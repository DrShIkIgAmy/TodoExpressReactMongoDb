const { Router } = require('express')
const controllers = require('../controllers/todo_controllers')
const cors = require('cors')

const router = Router()


var corsOption = {origin: "*"};

router.get('/get_all_todos', cors(corsOption), controllers.GetRetrieveAll);
router.get('/get_todo', cors(corsOption), controllers.GetRetrieveById);

router.delete('/delete_all', cors(corsOption), controllers.PostRemoveAll);
router.delete('/delete_todo', cors(corsOption), controllers.PostRemoveById);

router.post('/modify_todo', cors(corsOption), controllers.PostModifyById);
router.post('/add_todo', cors(corsOption), controllers.PostAdd);

module.exports = router
