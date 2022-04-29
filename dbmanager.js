const mysql = require('mysql');

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

/*let sql = 'CREATE TABLE persons(id int AUTO_INCREMENT, name VARCHAR(255), age int, PRIMARY KEY(id))'

db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
})*/

let person = {name: "Antonio", age: 50}
let sql = 'INSERT INTO persons SET ?'

db.query(sql, person, (err, result) => {
    if(err) throw err;
    console.log(result);
})

db.end((err) => {
    if (err) throw err;
    console.log("Connection ended");
})