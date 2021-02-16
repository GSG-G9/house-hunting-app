import { object, string, number } from 'yup';

const validationSchema = object({
  username: string().min(4),
  mobile: number().min(9),
  address: string(),
});

export default validationSchema;
