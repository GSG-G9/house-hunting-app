BEGIN;
DROP TABLE IF EXISTS users, houses, locations, favorites CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    address TEXT,
    mobile VARCHAR(255),
    role VARCHAR(30) DEFAULT 'user',
    is_active VARCHAR(30) DEFAULT 'active',
    image TEXT,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    location TEXT,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    location_id INTEGER REFERENCES locations(id),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(30),
    availability BOOLEAN DEFAULT true,
    room_num INT,
    bathroom_num int,
    price DECIMAL(8,2),
    area DECIMAL(8,2),
    image TEXT,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    house_id INTEGER REFERENCES houses(id),
    created_at TIMESTAMP NOT NULL
);

COMMIT;
