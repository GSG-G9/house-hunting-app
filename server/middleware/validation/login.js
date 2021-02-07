const { object, string } = require('yup');
const boomify = require('../../utils/boomify');

const loginValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const schema = object().shape({
      email: string().email().required(),
      password: string().min(7).required(),
    });
    await schema.validate(
      {
        email,
        password,
      },
      { abortُEarly: false }
    );
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};
module.exports = loginValidation;
