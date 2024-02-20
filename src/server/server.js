import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    database: 'Users'
})

pool.getConnection(err => {
    if(err) {
        console.log(err);
    }else {
        console.log('Is connected!');
    }
})

const query = 'SELECT * FROM Costs'

app.listen(3306);

    app.get('/', (req, res) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
                return;
            }
    
            connection.query(query, (err, rows) => {
                connection.release();
    
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
    
                console.log('Success', rows);
                res.send(rows);
                
            });
        });
    });

    app.post('/Costs', async (req, res) => {
        try {
            const { name, date, price } = req.body;

            const insertQuery = 'INSERT INTO Costs (name, date, price) VALUES (?, ?, ?)';

            const values = [name, date, price];
    
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
        
                connection.query(insertQuery, values, (err, result) => {
                    connection.release();
        
                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal Server Error');
                        return;
                    }
        
                    console.log('Данные успешно вставлены:', result);
                    res.send('Данные успешно вставлены');
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');       
        }
    });
