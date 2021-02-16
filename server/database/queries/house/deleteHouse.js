const connection = require('../../config/connection');

const deleteHouse = ({ houseId, userId }) => {
  const sql = {
    text: 'DELETE FROM houses WHERE id=$1 AND user_id=$2 RETURNING * ;',
    values: [houseId, userId],
  };
  return connection.query(sql);
};
module.exports = deleteHouse;
