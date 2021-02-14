const connection = require('../../config/connection');

const deleteFromFavoriteHouse = (houseId, userId) => {
  const sql = {
    text: 'DELETE FROM favorites WHERE house_id = $1 AND user_id = $2;',
    values: [houseId, userId],
  };
  return connection.query(sql);
};

module.exports = deleteFromFavoriteHouse;
