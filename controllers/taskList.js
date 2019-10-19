const List = require('../models/list');

exports.getList = (req, res, next) => {
    List.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('taskList/viewList.ejs', {
            todo: rows,
            pageTitle: 'To Do List',
            path: '/'
        });
    })
    .catch(err => console.log(err));
}

exports.addToDo = (req, res, next) => {
    console.log(req.body);
    
    const list = new List(null,req.body.txtTask);
    list.save().then(() => {res.redirect('/');}).catch(err => console.log(err));
}

exports.deleteTask = (req, res) => {
    const {
      id
    } = req.params;
  
    List.deleteById(id).then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };

  exports.getEditList = (req, res) => {
    const {
      id
    } = req.params;
  
    List.findById(id).
    then(([rows, fieldData]) => {
        res.render('taskList/editTask.ejs', {
          todo: rows[0],
          pageTitle: 'Edit Task',
          path: ''
        });
      })
      .catch(err => console.log(err));
  };

  exports.postUpdateList = (req, res) => {
    const {
      id,
      title,
    } = req.body;
  
    const list = new List(id, title);
    console.log(list);
  
    list
      .update()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };