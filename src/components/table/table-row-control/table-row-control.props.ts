import { HTMLProps } from 'react';

export interface ITableRowControl extends HTMLProps<HTMLElement> {
  level: number;
  dataId: number | undefined;
  isRowEmpty: boolean;
}
