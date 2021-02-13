const connection = require('../../config/connection');

const addHouseToFavList = ({ userId, houseID }) => {
  const sql = {
    text: 'INSERT INTO favorites (user_id,house_id) VALUES ($1,$2);',
    values: [userId, houseID],
  };
  return connection.query(sql);
};
module.exports = addHouseToFavList;
