INSERT INTO users (username, email, password, address, mobile)
VALUES 
  ('user_1', 'user_1@house.com', '123456asd', 'gaza', '010123456'),
  ('user_2', 'user_2@house.com', '123456asd', 'rafah', '010123000'),
  ('user_3', 'user_3@house.com', '123456asd', 'khanyunis', '010444456'),
  ('user_4', 'user_4@house.com', '123456asd', 'gaza', '010525456'),
  ('user_5', 'user_5@house.com', '123456asd', 'gaza', '010122514'),
  ('user_6', 'user_6@house.com', '123456asd', 'rafah', '010126656'),
  ('user_7', 'user_7@house.com', '123456asd', 'khanyunis', '010021620');

INSERT INTO
  locations (location)
VALUES
  ('Gaza'),
  ('Khanyunis'),
  ('ALwosta'),
  ('Rafah'),
  ('North');

INSERT INTO
  houses (user_id, location_id, title, description, room_num, bathroom_num, category, price, area)
VALUES
  (1, 3, 'house with 3 rooms', 'Nulla ngilla non. Nullam.', 3, 2, 'appartment', 100, 100),
  (3, 2, 'house with 4 rooms', 'Nulla ngilla non. Nullam.', 2, 2, 'appartment', 100, 100),
  (1, 1, 'house with 5 rooms', 'Nulla ngilla non. Nullam.', 5, 3, 'appartment', 150, 200),
  (1, 3, 'house with 6 rooms', 'Nulla ngilla non. Nullam.', 3, 2, 'appartment', 80, 120),
  (2, 3, 'house with 56 rooms', 'Nulla ngilla non. Nullam.', 5, 3, 'appartment', 180, 170);

INSERT INTO
  favorites (user_id, house_id)
VALUES
  (1, 1),
  (1, 3),
  (1, 2),
  (2, 1),
  (2, 3);
