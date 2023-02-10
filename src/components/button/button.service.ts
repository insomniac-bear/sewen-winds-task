import { TIcons } from '../icons';

export const iconToRender = (icon: keyof TIcons, icons: TIcons) => {
  return icons[icon];
};
