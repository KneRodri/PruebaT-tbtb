# Pruebat-tbtb

## Descripción

`pruebat-tbtb` Es una interfaz que actúa con una API externa para mostrar datos en una tabla. Este proyecto se encuentra proceso.

## Requisitos previos

- Node.js instalado

## Instalación

1. Clonar el repositorio:

    ```bash
    git clone git clone https://github.com/tu-usuario/tu-proyecto.git
    ```

    ```bash
    cd tu-proyecto
    ```

2. Instala las dependecias:
    
    ```bash
    npm install
    ```

## Configuración de la Base de Datos

1. Ejecuta el script `table.sql` para crear las tablas:
   
    ```bash
    sqlite3 my_database.db < table.sql
    ```

2. Ejecuta el script `transaction.sql` para insertar datos de prueba:
   
    ```bash
    sqlite3 my_database.db < transaction.sql
    ```
<!-- ![archivo-imagen](diagrama-prueba.pdf) -->

## Ejecución de la App

    ```bash
    npm start
    ```

## 