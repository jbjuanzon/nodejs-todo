const express = require('express');
const listController = require('../controllers/taskList');

const router = express.Router();

// /admin/add-product => GET
router.get('/', listController.getList);
router.get('/list/delete/:id', listController.deleteTask);
router.get('/list/edit/:id', listController.getEditList);

// /admin/add-product => POST
router.post('/', listController.addToDo);
router.post('/list/update/:id', listController.postUpdateList);
//router.put('/:id', listController);

module.exports = router;