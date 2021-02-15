const connection = require('../../config/connection');

const getHousesFromFav = ({ houseId, userId }) => {
  const sql = {
    text: 'SELECT * FROM favorites  WHERE house_id = $1 AND user_id = $2; ',
    values: [houseId, userId],
  };
  return connection.query(sql);
};
module.exports = getHousesFromFav;
