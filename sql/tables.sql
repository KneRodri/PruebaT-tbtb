CREATE TABLE User (
    user_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE,
    city VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Order_List (
    order_id INT PRIMARY KEY,
    user_id INT,
    total_order DECIMAL(10, 2),
    date_order DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    name_product VARCHAR(50) NOT NULL,
    price DECIMAL(8, 2) NOT NULL
);

/* Relación muchos a muchos entre 'Pedidos' y 'Productos' */
CREATE TABLE Order_Products (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES Order_List(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);