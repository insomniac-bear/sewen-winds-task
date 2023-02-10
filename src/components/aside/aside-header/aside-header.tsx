import { FC } from 'react';
import './aside-header.style.scss';

export const AsideHeader: FC = () => {
  return(
    <header className="aside__header">
      <h2 className="aside__header-title">Название проекта</h2>
      <p className="aside__header-notion">Аббревиатура</p>
    </header>
  );
};
