const connection = require('../../config/connection');

const addNewHouseData = ({
  userId,
  locationId,
  title,
  description,
  rooms,
  bathrooms,
  category,
  price,
  area,
  image,
}) => {
  const sql = {
    text:
      'INSERT INTO houses ( user_id, location_id, title, description, room_num, bathroom_num, category, price, area, image ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;',
    values: [
      userId,
      locationId,
      title,
      description,
      rooms,
      bathrooms,
      category,
      price,
      area,
      image,
    ],
  };

  return connection.query(sql);
};

module.exports = addNewHouseData;
