const connection = require('../../config/connection');

const updateUserImageData = ({ userId, imageUrl }) => {
  const sql = {
    text: 'UPDATE users SET image = $1 WHERE id = $2;',
    values: [imageUrl, userId],
  };
  return connection.query(sql);
};

module.exports = updateUserImageData;
