import { HTMLProps, ReactNode } from 'react';
import { TIcons } from '../icons';

export interface IButton extends HTMLProps<HTMLButtonElement> {
  extraClass?: string;
  icon?: keyof TIcons;
  children?: ReactNode;
};
