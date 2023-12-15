const express = require('express');
const sqilite3 = require('sqlite3').verbose();   

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

const db = new sqilite3.Database('my_database.db');

app.get('/user', (req, res) => {
    const userData = {
        user_id: '102',
        user_name: 'Bolivar Franco',
        email: 'bolivar@example.com',
        country: 'Ecuador',
        city: 'Quito',
        creation_date: new Date().toISOString()
    };

    res.json(userData);
});

app.listen(port, () => {
    console.log('Server started on port', port);
});


// // db.exec(sqlScript, (err) => {
// //     if (err) {
// //         console.error('Error executing SQL script:', err);
// //     } else {
// //         console.log('Successfully created tables');
// //     }
// // });

// app.post('/users', (req, res) => {
//     const { user_id, user_name, email, country, city } = req.body;
//     const creation_date = new Date().toISOString();

//     const sql = 'INSERT INTO TbUser (user_id, user_name, email, country, city, creation_date) VALUES (?, ?, ?, ?, ?, ?)';

//     const values = [user_id, user_name, email, country, city, creation_date];

//     db.run(sql, values, (err, rows) => {
//       if (err) {
//         res.status(500).json({ message: 'Internal server error' });
//       } else {
//         res.json(rows);
//       }
//     });
// });

// app.get('/users', (req, res) => {
//     db.all('SELECT * FROM TbUser', (err, rows) => {
//         if (err) {
//             res.status(500).json({ message: 'Internal server error '});
//         } else {
//             res.json(rows);
//         }
//     });
// });

// app.get('/users/:user_id', (req, res) => {
//     const user_id = parseInt(req.params.user_id);
//     db.get('SELECT * FROM TbUser WHERE user_id = ?', [user_id], (err, row) => {
//         if (err) {
//             res.status(500).json({ message: 'Internal server error'});
//         } else if (row) {
//             res.json(row);
//         } else {
//             res.status(404).json({ message: 'User not found' });
//         }
//     });
// });

// app.put('/user/:user_id', (req, res) => {
//     const user_id = parseInt(req.params.user_id);
//     const { user_name, email, country, city } = req.body;

//     const sql = 'UPDATE TbUser SET user_name = ?, email = ?, country = ?, city = ? WHERE user_id = ?';
//     const values = [user_name, email, country, city, user_id];

//     db.run(sql, values, (err) => {
//         if (err) {
//             res.status(500).json({ message: 'Internal server error put'});
//         } else {
//             res.json({ message: 'User update successfully' });
//         }
//     });
// });

// app.delete('/users/:user_id', (req, res) => {
//     const user_id = parseInt(req.params.user_id);

//     db.run('DELETE FROM TbUser WHERE user_id = ?', [user_id], (err, row) => {
//         if (err) {
//             res.status(500).json({ message: 'Internal server error' });
//         } else {
//             res.json({ message: 'User deleted successfully '});
//         } 
//     });
// });