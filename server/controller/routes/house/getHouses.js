const getAllHouses = (req, res) => {
  res.status(200).json({ statusCode: 200, data: [] });
};

module.exports = { getAllHouses };
