const connection = require('../../config/connection');

const updateHouse = ({
  roomNo,
  category,
  price,
  description,
  title,
  locationId,
  bathNo,
  userId,
  houseId,
}) => {
  const sql = {
    text:
      'UPDATE houses SET room_num=$1 ,category=$2 , price=$3 ,description = $4,title=$5 ,location_id = $6 ,bathroom_num=$7 WHERE user_id =$8 AND id=$9;',
    values: [
      roomNo,
      category,
      price,
      description,
      title,
      locationId,
      bathNo,
      userId,
      houseId,
    ],
  };
  return connection.query(sql);
};
module.exports = updateHouse;
