import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

module.exports = loginSchema;
