import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { TableRowControl } from '../table-row-control/table-row-control';
import { ITableData } from './table-row.types';
import { formSchema } from './schema';
import { DATA_NAMES, INITIAL_ROW_DATA, UTIL_ROW_DATA } from './const';
import { useAppDispatch } from '../../../services/hooks';
import { createRow } from '../../../services/api/api';
import { TableDataForm } from '../table-data-form/table-data-form';
import { TableData } from '../table-data/table-data';

export type TForm = InferType<typeof formSchema>;

export const TableRowData: FC<ITableData> = ({ data, level, isRowEdit = false }) => {
  const tableData = data ? data : INITIAL_ROW_DATA;

  const dispatch = useAppDispatch();
  const [isEdit, setEdit] = useState(isRowEdit);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TForm>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      equipmentCosts: tableData.equipmentCosts,
      rowName: tableData.rowName,
      salary: tableData.salary,
      overheads: tableData.overheads,
      estimatedProfit: tableData.estimatedProfit,
    }
  });

  const formSubmitHandler: SubmitHandler<TForm> = data => {
    dispatch(createRow({
      ...data,
      parentId: tableData.id || null,
      ...UTIL_ROW_DATA,
    }));
    reset();
  }

  return(
    <>
      <tr onDoubleClick={() => setEdit(true)}>
        <TableRowControl
          level={level}
          dataId={tableData.id}
          isRowEmpty={!data}
        />
        <TableDataForm
          handleSubmit={handleSubmit}
          formSubmitHandler={formSubmitHandler}
          formId={`${tableData.id}`}
        />
        {
          DATA_NAMES.map((key, index) =>
            <TableData
              key={index}
              formId={`${tableData.id}`}
              isEdit={isEdit}
              dataName={key}
              cellData={tableData[key]}
              register={register}
              errors={errors}
            />
          )
        }
      </tr>
      {
        tableData.child &&
        tableData.child.map(childData => <TableRowData level={level + 1} data={childData}/>)
      }
    </>
  );
};
