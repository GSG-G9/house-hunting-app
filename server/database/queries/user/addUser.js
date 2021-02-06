const connection = require('../../config/connection');

const addUser = ({ username, email, password, mobile }) => {
  const sql = {
    text:
      'INSERT INTO users  (username,email,password,mobile) VALUES($1,$2,$3,$4) RETURNING username ',
    values: [username, email, password, mobile],
  };
  return connection.query(sql);
};
module.exports = addUser;
