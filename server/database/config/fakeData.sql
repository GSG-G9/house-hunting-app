INSERT INTO users (username, email, password, address, mobile)
VALUES 
  ('user_1', 'user_1@house.com', '123456asd', 'gaza', '010123456'),
  ('user_2', 'user_2@house.com', '123456asd', 'rafah', '010123000'),
  ('Mohammad', 'mohammad@gmail.com', '123456asd', 'khanyunis', '009720259740000'),
  ('user_4', 'user_4@house.com', '123456asd', 'gaza', '010525456'),
  ('user_5', 'user_5@house.com', '123456asd', 'rafah', '010122514'),
  ('mariam', 'mariam@gmail.com', '123456asd', 'gaza', '009725984578210'),
  ('Adham', 'Adham@gmail.com', '123456asd', 'khanyunis', '00972596078478'),
  ('yasmeen-attallah','yattallah@gmail.com','123456789','gaza','00972598070000');
   
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
  (8, 4, 'Multi Family House', 'pride of ownership duplex located in the heart of sultan street, rafah. The duplex features two spacious full floor flats situated on a 2, The property measures approximately 2, 576 square feet of rentable area. ', 3, 2, 'roof', 100, 100,'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (3, 1, 'Single Family House', 'Exquisite custom Modern Farmhouse designed by renowned Brooke Wagner Design consisting of 10,000 sf on 4.6-acres in the prestigious community of Gaza', 2, 2, 'roof', 200, 150,'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (8, 1, 'Multi Family House', 'This is one of those truly exceptional homes that don’t come on the market very often! Every attention to detail was given in creating this remarkable estate that offers 5 Bedrooms plus bonus plus loft, plus separate main floor guest quarters/game room, plus library with rich wood builtins,.', 5, 3, 'apartment', 150, 200,'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (3, 3, 'Multi Family House', 'Very Rare Opportunity to find 2 MAIN FLOOR BEDROOMS AND MAIN FLOOR MASTER BEDROOM.', 3, 2, 'classic', 80, 120,'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (8, 2, 'single Family House', 'Located on approximately 3.64 acres in the exclusive Khanuinus, the Premier Equestrian Estate has stunning views, impeccable appointments and finishes.', 5, 2, 'classic', 130, 170,'https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (6, 3, 'Multi Family House', 'Own a piece of history and income property with tremendous upside where the historic Wirth Brothers Bakery has previously resided for many years.', 4, 2, 'apartment', 120, 150,'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (3, 5, 'single Family House', 'Prime mixed-use Edwardian two-unit building on the north side of Geary Blvd in the Central Richmond. Above is a home-like residential unit which has 4 bedrooms,.', 2, 2, 'apartment', 100, 190,'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (3, 1, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 3, 2, 'roof', 400, 140,'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (6, 3, 'Multi Family House', 'Prime mixed-use Edwardian two-unit building on the north side of Geary Blvd in the Central Richmond. Above is a home-like residential unit which has 4 bedrooms,.', 4, 2, 'roof', 330, 150,'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (8, 3, 'single Family House', 'Prime mixed-use Edwardian two-unit building on the north side of Geary Blvd in the Central Richmond. Above is a home-like residential unit which has 4 bedrooms,.', 2, 3, 'roof', 280, 170,'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (3, 4, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 4, 2, 'studio', 280, 170,'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (6, 4, 'single Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 2, 1, 'studio', 200, 130,'https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (7, 4, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 5, 2, 'classic', 250, 170,'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (6, 3, 'single Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 6, 3, 'studio', 160, 170,'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (3, 3, 'single Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 1, 3, 'classic', 400, 300,'https://images.pexels.com/photos/6283963/pexels-photo-6283963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (8, 5, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 5, 3, 'studio', 390, 270,'https://images.pexels.com/photos/6284230/pexels-photo-6284230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (7, 5, 'single Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 3, 1, 'classic', 350, 170,'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
  (7, 5, 'Multi Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 4, 2, 'studio', 420, 170,'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
  (7, 3, 'single Family House', 'et in a stunning Edwardian duplex located two blocks north of Golden Gate Park, this gorgeous ground floor unit has been renovated and masterfully remodeled with the most modern fixtures and finishes.', 5, 2, 'classic', 130, 100,'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');


