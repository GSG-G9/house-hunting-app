const connection = require('../../config/connection');

const updateHouse = ({
  roomNo,
  category,
  price,
  description,
  title,
  locationId,
  bathNo,
  area,
  image,
  userId,
  houseId,
}) => {
  const sql = {
    text:
      'UPDATE houses SET room_num=$1 ,category=$2 , price=$3 ,description = $4,title=$5 ,location_id = $6 ,bathroom_num=$7 ,area = $8, image=$9 WHERE user_id =$10 AND id=$11;',
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
      area,
      image,
    ],
  };
  return connection.query(sql);
};
module.exports = updateHouse;
