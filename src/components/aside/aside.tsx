import { FC } from 'react';
import { AsideHeader } from './aside-header/aside-header';
import { AsideMenu } from './aside-menu/aside-menu';
import './aside.style.scss';

export const Aside: FC = () => {
  return(
    <aside className="aside">
      <AsideHeader />
      <AsideMenu />
    </aside>
  );
};