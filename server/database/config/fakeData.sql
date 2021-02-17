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
  houses (user_id, location_id, title, description, room_num, bathroom_num, category, price, area,image)
VALUES
  (1, 4, 'Multi Family House', 'pride of ownership duplex located in the heart of sultan street, rafah. The duplex features two spacious full floor flats situated on a 2, The property measures approximately 2, 576 square feet of rentable area. ', 3, 2, 'roof', 100, 100,'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (3, 1, 'Single Family House', 'Exquisite custom Modern Farmhouse designed by renowned Brooke Wagner Design consisting of 10,000 sf on 4.6-acres in the prestigious community of Gaza', 2, 2, 'roof', 200, 150,'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (1, 1, 'Multi Family House', 'This is one of those truly exceptional homes that don’t come on the market very often! Every attention to detail was given in creating this remarkable estate that offers 5 Bedrooms plus bonus plus loft, plus separate main floor guest quarters/game room, plus library with rich wood builtins,.', 5, 3, 'apartment', 150, 200,'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (1, 3, 'Multi Family House', 'Very Rare Opportunity to find 2 MAIN FLOOR BEDROOMS AND MAIN FLOOR MASTER BEDROOM.', 3, 2, 'classic', 80, 120,'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (1, 2, 'single Family House', 'Located on approximately 3.64 acres in the exclusive Khanuinus, the Premier Equestrian Estate has stunning views, impeccable appointments and finishes.', 5, 2, 'classic', 130, 170,'https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (5, 3, 'Multi Family House', 'Own a piece of history and income property with tremendous upside where the historic Wirth Brothers Bakery has previously resided for many years.', 4, 2, 'apartment', 120, 150,'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (3, 5, 'single Family House', 'Prime mixed-use Edwardian two-unit building on the north side of Geary Blvd in the Central Richmond. Above is a home-like residential unit which has 4 bedrooms,.', 2, 2, 'apartment', 100, 190,'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (4, 1, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 3, 2, 'roof', 400, 140,'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (4, 3, 'Multi Family House', 'Prime mixed-use Edwardian two-unit building on the north side of Geary Blvd in the Central Richmond. Above is a home-like residential unit which has 4 bedrooms,.', 4, 2, 'roof', 330, 150,'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (2, 3, 'single Family House', 'Prime mixed-use Edwardian two-unit building on the north side of Geary Blvd in the Central Richmond. Above is a home-like residential unit which has 4 bedrooms,.', 2, 3, 'roof', 280, 170,'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (2, 1, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 5, 3, 'apartment', 390, 170,'https://images.pexels.com/photos/2850472/pexels-photo-2850472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');



