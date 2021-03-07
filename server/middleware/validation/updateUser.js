const { object, string } = require('yup');

const boomify = require('../../utils/boomify');

const updateUserValidation = async (req, res, next) => {
  try {
    const schema = object().shape({
      username: string().required(),
      mobile: string().min(9),
      address: string().required(),
    });
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = updateUserValidation;
