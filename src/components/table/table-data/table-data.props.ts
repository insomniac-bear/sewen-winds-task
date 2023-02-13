import type { HTMLProps } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { TForm } from '../table-row/table-row';
import { TField } from '../../../types/field.types';

export interface ITableData extends HTMLProps<HTMLElement> {
  formId: string;
  isEdit: boolean;
  dataName: TField;
  cellData?: number | string | null;
  register: UseFormRegister<TForm>;
  errors: FieldErrors<TForm>;
}
