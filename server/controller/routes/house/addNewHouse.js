const { addNewHouseData } = require('../../../database/queries/house');

const boomify = require('../../../utils/boomify');

const addNewHouse = async (req, res, next) => {
  try {
    const { userId } = req;

    const { rows } = await addNewHouseData({ userId, ...req.body });

    if (rows.length === 0) {
      throw boomify(500, 'Something went wrong!');
    }

    return res.status(201).json({
      statusCode: 201,
      message: 'Adding a new house successfully.',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = addNewHouse;
