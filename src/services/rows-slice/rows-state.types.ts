import { IRow, TStatus } from '../types';

export interface IRowState {
  rows: IRow[] | null;
  status: TStatus;
  error: string | undefined;
};
