const express = require('express');
const listController = require('../controllers/taskList');

const router = express.Router();

// /admin/add-product => GET
router.get('/', listController.getList);

// /admin/add-product => POST
router.post('/', listController.addToDo);

module.exports = router;