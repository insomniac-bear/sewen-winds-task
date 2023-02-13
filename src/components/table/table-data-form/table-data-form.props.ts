import type { HTMLProps } from 'react';
import type { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import type { TForm } from '../table-row/table-row';

export interface ITableDataForm extends HTMLProps<HTMLElement> {
  formSubmitHandler: SubmitHandler<TForm>;
  formId: string;
  handleSubmit: UseFormHandleSubmit<TForm>;
}
