const { Router } = require('express')
const controllers = require('../controllers/todo_controllers')
const cors = require('cors')

const router = Router()


var corsOptionsDelegate = {
  origin: "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
};

const log_func = (req, res, next)=> {
  console.log('Received request with body');
  console.log(req.body);
  next();
}

router.options('*', log_func, cors(corsOptionsDelegate));
router.post('/add_todo', cors(corsOptionsDelegate), log_func, controllers.PostAdd);
router.get('/get_all_todos', cors(corsOptionsDelegate), log_func, controllers.GetRetrieveAll);
router.get('/get_todo', cors(corsOptionsDelegate), log_func, controllers.GetRetrieveById);

router.delete('/delete_all', cors(corsOptionsDelegate), log_func, controllers.PostRemoveAll);
router.delete('/delete_todo', cors(corsOptionsDelegate), log_func, controllers.PostRemoveById);

router.post('/modify_todo', cors(corsOptionsDelegate), log_func, controllers.PostModifyById);


module.exports = router
