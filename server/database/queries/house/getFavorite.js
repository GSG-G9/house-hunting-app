const connection = require('../../config/connection');

const getFavoriteHouses = (userId) => {
  const sql = {
    text:
      'SELECT h.*, u.* FROM favorites AS f INNER JOIN users AS u ON u.id = f.user_id INNER JOIN houses AS h ON h.id = f.house_id WHERE f.user_id = $1 ',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getFavoriteHouses;
