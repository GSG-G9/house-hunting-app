BEGIN;
DROP TABLE IF EXISTS users, houses, locations, favorites CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100)  NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  address TEXT,
  mobile VARCHAR(255),
  role VARCHAR(30) DEFAULT 'user',
  is_active VARCHAR(30) DEFAULT 'active',
  image TEXT,
  created_at TEXT DEFAULT TO_CHAR(CURRENT_TIMESTAMP, 'DD/MM/YYYY HH12:MI:SS:MS:US AM')
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  location TEXT,
 created_at TEXT DEFAULT TO_CHAR(CURRENT_TIMESTAMP, 'DD/MM/YYYY HH12:MI:SS:MS:US AM')
);

CREATE TABLE houses (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  location_id INT REFERENCES locations(id),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(30),
  availability BOOLEAN DEFAULT true,
  room_num INT,
  bathroom_num INT,
  price DECIMAL(8,2),
  area DECIMAL(8,2),
  image TEXT,
  created_at TEXT DEFAULT TO_CHAR(CURRENT_TIMESTAMP, 'DD/MM/YYYY HH12:MI:SS:MS:US AM')
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  house_id INT REFERENCES houses(id),
   CONSTRAINT u_f UNIQUE (user_id,house_id),
  created_at TEXT DEFAULT TO_CHAR(CURRENT_TIMESTAMP, 'DD/MM/YYYY HH12:MI:SS:MS:US AM')
);

COMMIT;


