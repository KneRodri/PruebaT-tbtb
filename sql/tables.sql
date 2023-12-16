CREATE TABLE TbUser (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(50) UNIQUE,
    country VARCHAR(50),
    city VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE TbOrderList (
    order_id INT PRIMARY KEY,
    user_id INT,
    total_order DECIMAL(10, 2),
    date_order DATE,
    FOREIGN KEY (user_id) REFERENCES TbUser(user_id)
);

CREATE TABLE TbProducts (
    product_id INT PRIMARY KEY,
    name_product VARCHAR(50) NOT NULL,
    price DECIMAL(8, 2) NOT NULL
);

CREATE TABLE TbOrderProducts (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES TbOrderList(order_id),
    FOREIGN KEY (product_id) REFERENCES TbProducts(product_id)
);
