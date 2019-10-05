const List = require('../models/list');

exports.getList = (req, res, next) => {
    List.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('viewList', {
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