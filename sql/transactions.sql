INSERT INTO Usuarios (usuario_id, nombre, correo, ciudad) VALUES
(1, 'Betzy Rodríguez', 'betzy@example.com', 'Ciudad A'),
(2, 'Bolívar Franco', 'bolivar@example.com', 'Ciudad B')
(3, 'Glau Rojas', 'glau@example.com', 'Ciudad C'),
(4, 'Lourdes Rojas', 'lourdes@example.com', 'Ciudad D'),
(5, 'Louvia Franco', 'louvia@example.com', 'Cuidad E')
(6, 'Mara Rodríguez', 'mara@example.com', 'Ciudad F'),
(7, 'Rosmer Franco', 'rosmer@example.com', 'Ciudad G'),
(8, 'Veronica Castillo', 'vero@example.com', 'Ciudad H');

INSERT INTO Pedidos (pedido_id, usuario_id, total_pedido, fecha_pedido) VALUES
(101, 1, 120.50, '2023-12-13'),
(102, 2, 72.50, '2023-12-13'),
(103, 3, 80.10, '2023-12-13'),
(104, 4, 90.50, '2023-12-13'),
(105, 5, 88.20, '2023-12-14'),
(106, 6, 90.90, '2023-12-14'),
(107, 7, 20.30, '2023-12-14'),
(108, 8, 60.70, '2023-12-14');

INSERT INTO Productos (producto_id, nombre_producto, precio) VALUES
(501, 'Producto A', 50.30),
(502, 'Producto B', 60.40),
(503, 'Producto C', 40.20),
(504, 'Producto D', 20.50),
(505, 'Producto E', 80.20);

INSERT INTO Pedido_Productos (pedido_id, producto_id, cantidad) VALUES
(101, 501, 2),
(103, 503, 1),
(105, 505, 3),
(107, 507, 1);