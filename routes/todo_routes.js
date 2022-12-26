const { Router } = require('express')
const controllers = require('../controllers/todo_controllers')
const cors = require('cors')

const router = Router()


var corsOptionsDelegate = {
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
};

const log_func = (req, res, next)=> {
  console.log('Received request');
  console.log(req);
  next();
}

router.options('*', cors(corsOptionsDelegate));
router.post('/add_todo', cors(corsOptionsDelegate), controllers.PostAdd);
router.get('/get_all_todos', cors(corsOptionsDelegate), controllers.GetRetrieveAll);
router.get('/get_todo', cors(corsOptionsDelegate), log_func, controllers.GetRetrieveById);

router.delete('/delete_all', cors(corsOptionsDelegate), controllers.PostRemoveAll);
router.delete('/delete_todo', cors(corsOptionsDelegate), controllers.PostRemoveById);

router.post('/modify_todo', cors(corsOptionsDelegate), controllers.PostModifyById);


module.exports = router
