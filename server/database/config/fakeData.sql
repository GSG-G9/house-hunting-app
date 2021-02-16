INSERT INTO users (username, email, password, address, mobile)
VALUES 
  ('user_1', 'user_1@house.com', '123456asd', 'gaza', '010123456'),
  ('user_2', 'user_2@house.com', '123456asd', 'rafah', '010123000'),
  ('user_3', 'user_3@house.com', '123456asd', 'khanyunis', '010444456'),
  ('user_4', 'user_4@house.com', '123456asd', 'gaza', '010525456'),
  ('user_5', 'user_5@house.com', '123456asd', 'gaza', '010122514'),
  ('user_6', 'user_6@house.com', '123456asd', 'rafah', '010126656'),
  ('user_7', 'user_7@house.com', '123456asd', 'khanyunis', '010021620'),
   
INSERT INTO
  locations (location)
VALUES
  ('Gaza'),
  ('Khanyunis'),
  ('ALwosta'),
  ('Rafah'),
  ('North');

INSERT INTO
  houses (user_id, location_id, title, description, room_num, bathroom_num, category, price, area,image)
VALUES
  (1, 4, 'Multi Family House', 'pride of ownership duplex located in the heart of sultan street, rafah. The duplex features two spacious full floor flats situated on a 2, The property measures approximately 2, 576 square feet of rentable area. ', 3, 2, 'roof', 100, 100,'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (3, 1, 'Single Family House', 'Exquisite custom Modern Farmhouse designed by renowned Brooke Wagner Design consisting of 10,000 sf on 4.6-acres in the prestigious community of Gaza', 2, 2, 'roof', 200, 200,'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (1, 1, 'Multi Family House', 'This is one of those truly exceptional homes that don’t come on the market very often! Every attention to detail was given in creating this remarkable estate that offers 5 Bedrooms plus bonus plus loft, plus separate main floor guest quarters/game room, plus library with rich wood builtins,.', 5, 3, 'apartment', 150, 200,'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (1, 3, 'house with 3 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 3, 2, 'classic', 80, 120,''),
  (1, 2, 'house with 5 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 5, 2, 'classic', 130, 170),
  (5, 3, 'house with 4 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 4, 2, 'apartment', 120, 150),
  (2, 4, 'house with 6 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 6, 3, 'apartment', 200, 190),
  (3, 5, 'house with 2 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 2, 2, 'apartment', 100, 100),
  (4, 1, 'house with 3 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 3, 2, 'roof', 100, 140),
  (4, 3, 'house with 4 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 4, 2, 'roof', 130, 150),
  (2, 3, 'house with 5 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 5, 3, 'roof', 180, 170),
  (2, 1, 'house with 5 rooms', 'Nulla ullamcorper pharetra ligula, nec pharetra tortor fringilla non. Nullam.', 5, 3, 'apartment', 180, 170);



