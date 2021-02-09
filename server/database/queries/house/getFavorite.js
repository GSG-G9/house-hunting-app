const connection = require('../../config/connection');

const getFavoriteHouses = (userId) => {
  const sql = {
    text:
      'SELECT  houses.*    FROM favorites INNER JOIN users ON users.id = favorites.user_id INNER JOIN houses ON houses.id = favorites.house_id WHERE favorites.user_id =  $1 ',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getFavoriteHouses;
