const getHouseByLocation = async (req, res) => {
  const { location } = req.query;
  res.json({
    status: 200,
    message: 'Hello from git House By Location ',
    location,
  });
};

module.exports = getHouseByLocation;
