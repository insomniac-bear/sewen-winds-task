import { FC } from 'react';
import './content-header.styles.scss';

export const ContentHeader: FC = () => {
  return(
    <header className="content__header">
      <h2 className="content__header-title">Строительно-монтажные работы</h2>
    </header>
  );
}