import { FC } from 'react';
import { TableHeader } from './table-header/table-header';
import { TableRowData } from './table-row/table-row';
import { useAppSelector } from '../../services/hooks';
import { getRowsLoadStatus, getRows } from '../../services/rows-slice/row.slice';
import './table.style.scss';

export const Table: FC = () => {
  const loadingDataStatus = useAppSelector(getRowsLoadStatus);
  const data = useAppSelector(getRows);

  return(
    <table className="table">
      <TableHeader />
      <tbody>
        { loadingDataStatus === 'loading' && 'Loading!!!' }
        { 
          loadingDataStatus === 'successed' &&
          data?.length === 0 &&
          <TableRowData data={ null } level={1} isRowEdit={true} />
        }
        {
          loadingDataStatus === 'successed' &&
          !!data &&
          data?.length > 0 &&
          data.map((row, index) => <TableRowData key={index} data={ row } level={1} isRowEdit={false} />)
        }
      </tbody>
    </table>
  );
};