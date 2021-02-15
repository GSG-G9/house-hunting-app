import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string(),
  email: yup.string().email(),
  mobile: yup.number(),
  address: yup.string(),
});

export default validationSchema;
