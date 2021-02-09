const connection = require('../../config/connection');

const getHouseLocation = ({ location }) => {
  const sql = {
    text:
      'SELECT * FROM houses INNER JOIN location ON houses.location_id = locations.id WHERE locations.location=$1;',
    values: [location],
  };
  return connection.query(sql);
};

module.exports = getHouseLocation;
