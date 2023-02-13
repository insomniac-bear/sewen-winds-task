import { number, object, string } from 'yup';

export const formSchema = object({
  rowName: string().required('Название строки обязательно!'),
  salary: number().default(0),
  equipmentCosts: number().default(0),
  overheads: number().default(0),
  estimatedProfit: number().default(0),
})
