const { object, string } = require('yup');

const boomify = require('../../utils/boomify');

const updateUserValidation = async (req, res, next) => {
  try {
    const { username, email, mobile, address } = req.body;
    const schema = object().shape({
      username: string(),
      email: string().email(),
      mobile: string().min(9),
      address: string(),
    });
    await schema.validate(
      {
        username,
        email,
        mobile,
        address,
      },
      { abortEarly: false }
    );
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = updateUserValidation;
