INSERT INTO TbUser (user_id, user_name, email, country, city) VALUES
(1, 'Betzy Rodríguez', 'betzy@example.com', 'Venezuela', 'Lechería'),
(2, 'Bolívar Franco', 'bolivar@example.com', 'Ecuador', 'Quito'),
(3, 'Glau Rojas', 'glau@example.com', 'Francia', 'Paris'),
(4, 'Lourdes Rojas', 'lourdes@example.com', 'España', 'Barcelona'),
(5, 'Louvia Franco', 'louvia@example.com', 'Mexico', 'Cancún'),
(6, 'Mara Rodríguez', 'mara@example.com', 'Argentina', 'Lanus'),
(7, 'Rosmer Franco', 'rosmer@example.com', 'Venezuela', 'Puerto la cruz'),
(8, 'Veronica Castillo', 'vero@example.com', 'Colombia', 'Bogotá');

INSERT INTO TbOrderList (order_id, user_id, total_order, date_order) VALUES
(101, 1, 120.50, '2023-12-13'),
(102, 2, 72.50, '2023-12-13'),
(103, 3, 80.10, '2023-12-13'),
(104, 4, 90.50, '2023-12-13'),
(105, 5, 88.20, '2023-12-14'),
(106, 6, 90.90, '2023-12-14'),
(107, 7, 20.30, '2023-12-14'),
(108, 8, 60.70, '2023-12-14');

INSERT INTO TbProducts (product_id, name_product, price) VALUES
(501, 'Producto A', 50.30),
(502, 'Producto B', 60.40),
(503, 'Producto C', 40.20),
(504, 'Producto D', 20.50),
(505, 'Producto E', 80.20),
(506, 'Producto F', 50.60);

INSERT INTO TbOrderProducts (order_id, product_id, quantity) VALUES
(101, 501, 2),
(103, 503, 1),
(104, 504, 3),
(105, 505, 1);

INSERT INTO TbOrderProducts (order_id, product_id, quantity) VALUES
(106, 504, 4),
(107, 505, 1),
(108, 506, 2);

SELECT * FROM tborderproducts;

UPDATE tbproducts SET name_product = 'Producto G' WHERE product_id = 501;

DELETE FROM tborderproducts WHERE order_id = 101;

SELECT
U.user_name,
OL.total_order,
P.name_product
FROM
tborderlist OL
INNER JOIN
tbuser U ON Ol.user_id = U.user_id
INNER JOIN
tborderproducts OP ON Ol.order_id = OP.order_id
INNER JOIN
tbproducts P ON OP.product_id = P.product_id;

SELECT 
U.user_name,
OL.order_id,
OL.total_order,
P.name_product
FROM
tbuser U 
LEFT JOIN
tborderlist OL ON U.user_id = OL.user_id
LEFT JOIN
tborderproducts OP ON OL.order_id = OP.order_id
LEFT JOIN
tbproducts P ON OP.product_id = P.product_id;

SELECT user_name FROM tbuser
UNION 
SELECT product_id FROM tbproducts;

SELECT
	order_id,
    total_order,
    CASE
		WHEN total_order <= 50.00 THEN 'Pedido Económico'
        WHEN total_order > 50.00 AND total_order <= 100.00 THEN 'Pedido regular'
        WHEN total_order > 100.00 THEN 'Pedido Premiun'
        ELSE 'Sin clasificación'
	END AS order_classification
FROM
	tborderlist;


