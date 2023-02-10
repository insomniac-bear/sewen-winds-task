import { FC, useState } from 'react';
import { Button } from '../../button/button';
import { TUserId } from './user-menu.types';
import { MenuItems } from './user-menu.service';
import './user-menu.style.scss';

export const UserMenu: FC = () => {
  const [isActive, setIsActive] = useState<TUserId>('controll');

  return(
    <ul className="header__user-menu">
      {
        MenuItems.map((item) => {
          return(
            <li
              key={item.id}
              className={item.id === isActive ? "header__user-menu-item header__user-menu-item_active" : "header__user-menu-item"}
              onClick={() => setIsActive(item.id)}
            >
              <Button
                onClick={() => {}}
              >
                {item.title}
              </Button>
            </li>
          );
        })
      }
    </ul>
  );
}