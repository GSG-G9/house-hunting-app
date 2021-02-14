const connection = require('../../config/connection');

const addHouseToFavList = ({ userId, houseId }) => {
  const sql = {
    text:
      'INSERT INTO favorites (user_id,house_id) VALUES ($1,$2) RETURNING *;',
    values: [userId, houseId],
  };
  return connection.query(sql);
};
module.exports = addHouseToFavList;
