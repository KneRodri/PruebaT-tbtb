const express = require('express');
const sqilite3 = require('sqlite3').verbose();   

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

const db = new sqilite3.Database('my_database.db');

const sqlScript = `
  CREATE TABLE IF NOT EXISTS TbOrderStatus (
   status_id INT PRIMARY KEY,
   order_id INT,
   status VARCHAR(50) NOT NULL,
   status_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (order_id) REFERENCES TbOrderList(order_id)
)`;

db.exec(sqlScript, (err) => {
    if (err) {
        console.error('Error executing SQL script:', err);
    } else {
        console.log('Successfully created tables');
    }
});



app.listen(port, () => {
    console.log('Server started on port', port);
});