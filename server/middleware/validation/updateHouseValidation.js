const { object, string, number } = require('yup');

const boomify = require('../../utils/boomify');

const updateHouseValidation = async (req, res, next) => {
  try {
    const houseSchema = object().shape({
      title: string().min(8, 'Title must be at least 8 char').required(),
      description: string()
        .min(50, 'Description must be at least 50 char')
        .required(),
      locationId: number().required().positive(),
      roomNo: number().required().positive().integer().min(1),
      bathNo: number().required().positive().integer().min(1),
      category: string().required(),
      price: number().required().positive(),
      area: number().required().min(10),
      image: string().required().url(),
    });

    await houseSchema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    return next(boomify(400, error.errors[0]));
  }
};

module.exports = updateHouseValidation;
