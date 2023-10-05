DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS suppliers;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS suppliers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    supplier_name TEXT NOT NULL,
    contact_sup TEXT NOT NULL,
    supplier_description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_name TEXT NOT NULL UNIQUE,
    product_description TEXT NOT NULL,
    product_quantity INTEGER DEFAULT 0,
    _supplier_product_name TEXT NOT NULL,
    supplier_id uuid REFERENCES suppliers(id)
);

CREATE TABLE IF NOT EXISTS transactions (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    transaction_date DATE DEFAULT CURRENT_DATE,
    transaction_type VARCHAR(10) NOT NULL,
    product_id uuid REFERENCES products(id),
    transaction_quantity INTEGER NOT NULL
);