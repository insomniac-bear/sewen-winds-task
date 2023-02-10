import { IRow, TStatus } from '../types';

export interface IFormState {
  data: IRow,
  isEdit: boolean,
  status: TStatus,
  error: string | undefined;
};