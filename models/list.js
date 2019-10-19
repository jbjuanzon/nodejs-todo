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

    update() {
        return db.execute('UPDATE list SET toDo = ? WHERE ID = ?',
          [this.message, this.id, ]);
      }

    static deleteById(id) {
        return db.execute('DELETE FROM list WHERE id = ?', [id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM list');
    }

    static findById(id) {
        return db.execute('SELECT * FROM list WHERE id = ?', [id]);
    }
}