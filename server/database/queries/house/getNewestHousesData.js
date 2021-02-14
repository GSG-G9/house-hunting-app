const connection = require('../../config/connection');

const getNewestHousesData = (limit = 10, skip = 0) => {
  const sql = {
    text:
      'SELECT h.* , u.username,u.email,u.mobile,l.location FROM houses AS h INNER JOIN users AS u ON u.id=h.user_id INNER JOIN locations AS l ON l.id=h.location_id ORDER BY id DESC LIMIT $1 OFFSET $2 ',
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesData;
