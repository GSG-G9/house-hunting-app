const connection = require('../../config/connection');

const getHousesFromFav = ({ houseId }) => {
  const sql = {
    text: 'SELECT * FROM favorites WHERE house_id = $1',
    values: [houseId],
  };
  return connection.query(sql);
};
module.exports = getHousesFromFav;
