import { FC, useEffect, useState } from 'react';
import { TableRowControll } from '../table-row-controll/table-row-controll';
import { useAppDispatch, useAppSelector } from '../../../services/hooks';
import {
  getData,
  rowDataInitial,
  rowNameInput,
  rowValueInput
} from '../../../services/form-slice/form-slice';
import { createRow } from '../../../services/api/api';
import { ITableData } from './table-row.types';

export const TableRowData: FC<ITableData> = ({ data, level, isRowEdit = false }) => {
  const dispatch = useAppDispatch();
  const inputData = useAppSelector(getData);

  useEffect(() => {
    dispatch(rowDataInitial({
      rowName: data?.rowName || '',
      mainCosts: data?.mainCosts || 0,
      equipmentCosts: data?.equipmentCosts || 0,
      supportCosts: data?.equipmentCosts || 0,
      estimatedProfit: data?.estimatedProfit || 0,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isEdit, setEdit] = useState(isRowEdit);

  const onInputValueChange = (e: any) => {
    dispatch(rowValueInput({
      field: e.target.name,
      value: e.target.value
    }));
  };

  const onEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      console.log(inputData);
      dispatch(createRow(inputData));
    }
  };

  return(
    <tr onDoubleClick={() => setEdit(true)}>
      <td className={`table__data level`}>
        <TableRowControll level={level} />
      </td>
      <td className={`table__data name`}>
        { !isEdit ?
            data?.rowName :
            <input
              className="table__input"
              name="rowName"
              value={ inputData.rowName }
              onChange={(e: any) => dispatch(rowNameInput(e.target.value))}
              onKeyDown={onEnterPress}
            />
        }
      </td>
      <td className={`table__data value`}>
        { !isEdit ?
            data?.mainCosts :
            <input
              className="table__input"
              name="mainCosts"
              value={ inputData.mainCosts }
              onChange={onInputValueChange}
            />
        }
      </td>
      <td className={`table__data value`}>
        { !isEdit ?
            data?.equipmentCosts :
            <input
              className="table__input"
              name="equipmentCosts"
              value={ inputData.equipmentCosts }
              onChange={onInputValueChange}
            />
        }
      </td>
      <td className={`table__data value`}>
        { !isEdit ?
            data?.supportCosts :
            <input
              className="table__input"
              name="supportCosts"
              value={ inputData.supportCosts }
              onChange={onInputValueChange}
            />
        }
      </td>
      <td className={`table__data value`}>
        { !isEdit ?
            data?.estimatedProfit :
            <input
              className="table__input"
              name="estimatedProfit"
              value={ inputData.estimatedProfit }
              onChange={onInputValueChange}
            />
        }
      </td>
    </tr>
  );
};
