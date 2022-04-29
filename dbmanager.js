const mysql = require('mysql');

const CREATE_PARENT_TABLE = 'CREATE TABLE parent(id int AUTO_INCREMENT, name VARCHAR(255) UNIQUE, password VARCHAR(255), PRIMARY KEY(id))'

const CREATE_CHILD_TABLE = 'CREATE TABLE child(childID int AUTO_INCREMENT, game VARCHAR(255), parentID int, PRIMARY KEY(childID), FOREIGN KEY(parentID) REFERENCES parent(id))'

const ADD_ROW_PARENT = 'INSERT INTO parent SET ?'
const CONTENT_PARENT = {
    name: 'name',
    password: 'password'
}

const ADD_ROW_CHILD = 'INSERT INTO child SET ?'
const CONTENT_CHILD = {
    game: 'game',
    parentID: 1
}


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tests'
})

db.connect((err) => {
    if(err) console.log(err.message);
    console.log('Connected to MySQL');
})

db.query(ADD_ROW_CHILD, CONTENT_CHILD, (err, result) => {
    if(err) throw err;
    console.log(result);
})

db.end((err) => {
    if (err) throw err;
    console.log("Connection ended");
})