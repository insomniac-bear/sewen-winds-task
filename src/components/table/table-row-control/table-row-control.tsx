import { FC, useState } from 'react';
import cn from 'classnames';
import { FileIcon, TrashIcon } from '../../icons';
import { useAppDispatch } from '../../../services/hooks';
import { removeRow } from '../../../services/api/api';
import { ITableRowControl } from './table-row-control.props';
import './table-row-control.style.scss';

export const TableRowControl: FC<ITableRowControl> = ({ level, dataId, isRowEmpty }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const listClass = cn('table__control', {
    'table__control_open': isOpen,
  });

  const removeButtonHandler = () => {
    dispatch(removeRow(dataId));
  }

  if (isRowEmpty) {
    return <td className={`table__data level`}/>
  }

  return(
    <td className={`table__data level`}>
      <ul
        style={{
          marginLeft: `${12 * level}px`
        }}
        className={listClass}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <li className="table__control-item">
          <button className='table__control-button' aria-label='Добавить строку'><FileIcon /></button>
        </li>
        <li className="table__control-item">
          <button
            className='table__control-button'
            aria-label='Удалить строку'
            onClick={removeButtonHandler}
          >
            <TrashIcon />
          </button>
        </li>
      </ul>
    </td>
  );
}