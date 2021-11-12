const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json())

require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

app.get('/test', (req, res) => {
    connection.connect((error) => {
        if (error) {
            res.send(error.message);
        }

        res.send({data: 'Connected to the MySQl server. 🔥'})
    });
});

app.get('/select', (req, res) => {
    connection.query(`SELECT * FROM users`, (error, results, fields) => {
        if (error) {
            res.send(error.message);
        }
        res.send(results);
    });
});

app.get('/select/:id', async (req, res) => {
    const id = req.params.id;

    connection.query(`SELECT * FROM users WHERE id = ?`, [id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
        }
        res.send(results);
    });
});

app.post('/insert', async (req, res) => {
    const user = req.body;

    connection.query(`INSERT INTO users (name, email) VALUES (?, ?)`, [user.name, user.email], (error, results, fields) => {
        if (error) {
            res.send(error.message);
        }
        res.send({data: "User added"});
    });
});

app.listen(8888, () => console.log('alive on http://localhost:8888'));
