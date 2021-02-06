const { object, string, ref, number } = require('yup');

const boomify = require('../../utils/boomify');

const SignupValidate = async (req, res, next) => {
  const { username, email, password, confirmPassword, mobile } = req.body;

  try {
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
      mobile: number().required(),
    });
    await schema.isValid(
      {
        username,
        email,
        password,
        confirmPassword,
        mobile,
      },
      { abortُEarly: false }
    );
    next();
  } catch (error) {
    next(boomify(400, error.error[0]));
  }
};
module.exports = SignupValidate;
