import { FC } from 'react';
import { ProjectIcon } from '../../icons';
import './aside-menu.stye.scss';

export const AsideMenu: FC = () => {
  return(
      <ul className="aside__menu">
        <li className="aside__menu-item_active">
          <ProjectIcon />
          СМР
        </li>
        <li className="aside__menu-item">
          <ProjectIcon />
          МТО
        </li>
      </ul>
  );
};