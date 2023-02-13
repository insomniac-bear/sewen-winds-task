import type { FC } from 'react';
import type { ITableData } from './table-data.props';
import cn from 'classnames';

export const TableData: FC<ITableData> = ({
  formId,
  isEdit,
  dataName,
  cellData,
  register,
  errors,
}) => {
  if (!isEdit) {
    return(
      <td className={`table__data`}>
        { cellData }
      </td>
    );
  }

  const inputClass = cn('table__input', {
    'table__input_error': errors[dataName]?.message,
  });

  return(
    <td className={`table__data`}>
      <label className='table__label'>
        <input
          form={`${formId}`}
          className={inputClass}
          {...register(dataName)}
          placeholder={errors[dataName]?.message}
        />
      </label>
    </td>
  );
};
