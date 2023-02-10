import { FC, useEffect } from 'react';
import { Aside } from '../aside';
import { Content } from '../content/content';
import { Header } from '../header';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { getRowsLoadStatus } from '../../services/rows-slice/row.slice';
import { fetchRows } from '../../services/api/api';
import './app.style.scss';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const rowsLoadStatus = useAppSelector(getRowsLoadStatus);

  useEffect(() => {
    if (rowsLoadStatus === 'idle') {
      dispatch(fetchRows());
    }
  // Отключаю тут warning по пустым зависимостям для того, что бы загрузка данных происходила только при запуске приложения
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Header />
      <Aside />
      <Content />
    </div>
  );
}
