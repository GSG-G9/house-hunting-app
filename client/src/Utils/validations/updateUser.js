import { object, string, number } from 'yup';

const validationSchema = object({
  username: string().min(4).required(),
  mobile: number().min(9).required(),
  address: string().required(),
});

export default validationSchema;
