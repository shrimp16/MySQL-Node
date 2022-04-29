const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

db.connect((err) => {
    if(err) console.log(err.message);
    console.log('Connected to MySQL');
})