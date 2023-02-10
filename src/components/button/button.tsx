import { FC, useMemo } from 'react';
import { IButton } from './button.types';
import * as Icons from '../icons';
import './button.style.scss';

export const Button: FC<IButton> = ({ onClick, extraClass, children, icon }) => {
  const className = extraClass ? `button ${extraClass}`: 'button';
  const iconToRender = useMemo(() => {
              const Icon = icon && Icons[icon];
              return Icon ? (
                <Icon />
              ) : null;
          }, [icon]);

  return(
    <button
      className={className}
      onClick={onClick}
    >
      <>
        { iconToRender }
        { children}
      </>
    </button>
  );
};
