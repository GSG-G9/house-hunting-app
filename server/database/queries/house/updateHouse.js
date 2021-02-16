const connection = require('../../config/connection');

const updateHouse = ({
  roomNo,
  category,
  price,
  description,
  title,
  locationId,
  userId,
  houseId,
}) => {
  const sql = {
    text:
      'UPDATE houses SET room_num=$1 ,category=$2 , price=$2 ,description = $3,title=$4 ,location_id = $5 WHERE user_id =$6 AND id=$7;',
    values: [
      roomNo,
      category,
      price,
      description,
      title,
      locationId,
      userId,
      houseId,
    ],
  };
  return connection.query(sql);
};
module.exports = updateHouse;
