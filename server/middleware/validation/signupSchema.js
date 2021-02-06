const yup = require('yup');

const boomify = require('../../utils/boomify');

const SignupValidate = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword, phone } = req.body;
    const schema = yup.object().shape({
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(8, 'password must be at least 8 char')
        .required('password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'passwords must match'),
      phone: yup.number().required(),
    });
    await schema.isValid({
      username,
      email,
      password,
      confirmPassword,
      phone,
    });
    next();
  } catch (error) {
    next(boomify(400, error.error[0]));
  }
};
module.exports = SignupValidate;
