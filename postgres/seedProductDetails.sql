DROP TABLE IF EXISTS products

CREATE TABLE products (
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(40),
    price       VARCHAR(10),
    description TEXT,
    size        INT[],
    fabric      TEXT,
    care        TEXT,
    features    TEXT,
);


