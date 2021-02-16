import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string(),
  mobile: yup.number(),
  address: yup.string(),
});

export default validationSchema;
