const { getHouseData } = require('../../../database/queries/house');
const boomify = require('../../../utils/boomify');

const getHouseById = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { rows } = await getHouseData(houseId);
    if (rows.length === 0) {
      throw boomify(404, 'House not found!');
    }

    res.json({ data: rows[0] });
  } catch (error) {
    next(error);
  }
};

module.exports = getHouseById;
