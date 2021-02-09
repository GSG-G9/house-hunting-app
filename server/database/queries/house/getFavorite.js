const connection = require('../../config/connection');

const getFavorite = () => {
  const sql = {
    text:
      'SELECT * FROM houses inner join favorites WHERE houses.id = favorites.house_id inner join users WHERE favorites.user_id = users.id',
  };
  return connection.query(sql);
};

module.exports = getFavorite;
