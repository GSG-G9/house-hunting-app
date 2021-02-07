const { object, string, ref } = require('yup');

const boomify = require('../../utils/boomify');

const signupValidate = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword, mobile } = req.body;

    const schema = object().shape({
      username: string().required(),
      email: string().email().required(),
      password: string()
        .min(8, 'password must be at least 8 char')
        .required('password is required'),
      confirmPassword: string().oneOf(
        [ref('password'), null],
        'passwords must match'
      ),
      mobile: string().min(9).required(),
    });
    await schema.validate(
      {
        username,
        email,
        password,
        confirmPassword,
        mobile,
      },
      { abortEarly: false }
    );
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};
module.exports = signupValidate;
