const connection = require('../../config/connection');

const getHouseLocation = ({ location }) => {
  const sql = {
    text:
      'SELECT houses.*,users.username,users.email,users.mobile,locations.location FROM houses INNER JOIN locations ON houses.location_id = locations.id INNER JOIN users ON users.id=houses.user_id WHERE locations.location=$1;',
    values: [location],
  };
  return connection.query(sql);
};

module.exports = getHouseLocation;
