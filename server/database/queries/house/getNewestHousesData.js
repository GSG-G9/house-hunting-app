const connection = require('../../config/connection');

const getNewestHousesData = (limit = 10, skip = 0) => {
  const sql = {
<<<<<<< HEAD
<<<<<<< HEAD
    text:
      'SELECT nh.*, u.username, u.email, u.mobile FROM (SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2) AS nh INNER JOIN users AS u ON nh.user_id = u.id ORDER BY id ASC;',
=======
    text: 'SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2 ',
>>>>>>> 4a805b5e6af309ea068ea4829e85a890319971c6
=======
    text:
      'SELECT h.* , u.username,u.email,u.mobile,l.location FROM houses AS h INNER JOIN users AS u ON u.id=h.user_id INNER JOIN locations AS l ON l.id=h.location_id ORDER BY id DESC LIMIT $1 OFFSET $2 ',
>>>>>>> 5c6ac3e106f802c63c9d8a2aa3beea873230f804
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesData;
