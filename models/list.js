const db = require('../util/database');

module.exports = class List {
    constructor(id, message) {
        this.id = id;
        this.message = message;

    }

    save() {
        return db.execute(
            'INSERT INTO list (toDo) VALUES (?)',
            [this.message]
        );
    }

    static deleteById(id) {
        var sql = `DELETE FROM todos WHERE id = ?`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
          });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM list');
    }

    static findById(id) {
        return db.execute('SELECT * FROM list WHERE list.id = ?', [id]);
    }
}