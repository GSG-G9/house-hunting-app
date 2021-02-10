const { addNewHouseData } = require('../../../database/queries/house');

const addNewHouse = async (req, res, next) => {
  try {
    const { userId } = req;

    await addNewHouseData({ userId, ...req.body });

    return res.status(201).json({
      statusCode: 201,
      message: 'Adding a new house successfully.',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = addNewHouse;
