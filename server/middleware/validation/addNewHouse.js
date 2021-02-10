const { object, string, number } = require('yup');

const boomify = require('../../utils/boomify');

const addHouseValidation = async (req, res, next) => {
  try {
    const {
      title,
      description,
      location,
      rooms,
      bathrooms,
      category,
      price,
      area,
      image,
    } = req.body;

    const houseSchema = object().shape({
      title: string().min(8, 'Title must be at least 8 char').required(),
      description: string()
        .min(50, 'Description must be at least 50 char')
        .required(),
      location: string().required(),
      rooms: number().required().positive().integer().min(1),
      bathrooms: number().required().positive().integer().min(1),
      category: string().required(),
      price: number().required().positive(),
      area: number().required().min(10),
      image: string().required().url(),
    });

    await houseSchema.validate(
      {
        title,
        description,
        location,
        rooms,
        bathrooms,
        category,
        price,
        area,
        image,
      },
      { abortEarly: false }
    );
    return next();
  } catch (error) {
    return next(boomify(400, error.errors[0]));
  }
};

module.exports = addHouseValidation;
