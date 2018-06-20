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

CREATE TABLE colors_products (
    id          SERIAL PRIMARY KEY,
    color_id    INT REFERENCES colors(id),
    product_id  INT REFERENCES products(id),
);

CREATE TABLE colors (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(40)
);

