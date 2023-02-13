import type { FC } from 'react';
import type { ITableDataForm } from './table-data-form.props';

export const TableDataForm: FC<ITableDataForm> = ({
  formSubmitHandler,
  formId,
  handleSubmit,
}) => {
  return(
    <td style={{ display: 'none' }}>
      <form
        id={`${formId}`}
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <button type='submit' form={`${formId}`} aria-label='отправить' />
      </form>
    </td>
  );
};
