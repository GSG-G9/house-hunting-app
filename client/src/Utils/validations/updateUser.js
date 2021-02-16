import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string(),
  mobile: yup.number().min(9),
  address: yup.string(),
});

export default validationSchema;
