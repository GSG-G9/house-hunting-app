INSERT INTO users (username, email, password, address, mobile, created_at)
VALUES 
  ('user_1', 'user_1@house.com', '123456asd', 'gaza', '010123456', CURRENT_TIMESTAMP),
  ('user_2', 'user_2@house.com', '123456asd', 'rafah', '010123000', CURRENT_TIMESTAMP),
  ('user_3', 'user_3@house.com', '123456asd', 'khanyunis', '010444456', CURRENT_TIMESTAMP),
  ('user_4', 'user_4@house.com', '123456asd', 'gaza', '010525456', CURRENT_TIMESTAMP),
  ('user_5', 'user_5@house.com', '123456asd', 'gaza', '010122514', CURRENT_TIMESTAMP),
  ('user_6', 'user_6@house.com', '123456asd', 'rafah', '010126656', CURRENT_TIMESTAMP),
  ('user_7', 'user_7@house.com', '123456asd', 'khanyunis', '010021620', CURRENT_TIMESTAMP);

INSERT INTO
  locations (location, created_at)
VALUES
  ('Gaza', CURRENT_TIMESTAMP),
  ('Khanyunis', CURRENT_TIMESTAMP),
  ('ALwosta', CURRENT_TIMESTAMP),
  ('Rafah', CURRENT_TIMESTAMP),
  ('North', CURRENT_TIMESTAMP);

INSERT INTO
  houses (user_id, location_id, title, description, room_num, bathroom_num, category, price, area, created_at)
VALUES
  (1, 3, 'house with 3 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 3, 2, 'appartment', 100, 100, CURRENT_TIMESTAMP),
  (3, 2, 'house with 2 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 2, 2, 'appartment', 100, 100, CURRENT_TIMESTAMP),
  (1, 1, 'house with 5 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 5, 3, 'appartment', 150, 200, CURRENT_TIMESTAMP),
  (1, 3, 'house with 3 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 3, 2, 'appartment', 80, 120, CURRENT_TIMESTAMP),
  (1, 2, 'house with 5 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 5, 2, 'appartment', 130, 170, CURRENT_TIMESTAMP),
  (5, 3, 'house with 4 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 4, 2, 'appartment', 120, 150, CURRENT_TIMESTAMP),
  (2, 3, 'house with 6 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 6, 3, 'appartment', 200, 190, CURRENT_TIMESTAMP),
  (3, 3, 'house with 2 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 2, 2, 'appartment', 100, 100, CURRENT_TIMESTAMP),
  (4, 1, 'house with 3 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 3, 2, 'appartment', 100, 140, CURRENT_TIMESTAMP),
  (4, 3, 'house with 4 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 4, 2, 'appartment', 130, 150, CURRENT_TIMESTAMP),
  (2, 3, 'house with 5 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 5, 3, 'appartment', 180, 170, CURRENT_TIMESTAMP);

INSERT INTO
  favorites (user_id, house_id, created_at)
VALUES
  (1, 1, CURRENT_TIMESTAMP),
  (2, 1, CURRENT_TIMESTAMP),
  (1, 2, CURRENT_TIMESTAMP),
  (1, 5, CURRENT_TIMESTAMP),
  (1, 6, CURRENT_TIMESTAMP),
  (3, 7, CURRENT_TIMESTAMP),
  (3, 2, CURRENT_TIMESTAMP),
  (4, 2, CURRENT_TIMESTAMP),
  (4, 1, CURRENT_TIMESTAMP),
  (5, 1, CURRENT_TIMESTAMP);
