import { FC } from "react";
import './table-header.style.scss';

export const TableHeader: FC = () => {
  return(
    <thead className="table__header">
      <tr>
        <td className={`table__data level`}>
          Уровень
        </td>
        <td className={`table__data name`}>
          Наименование работ
        </td>
        <td className={`table__data value`}>
          Основная з/п
        </td>
        <td className={`table__data value`}>
          Оборудование
        </td>
        <td className={`table__data value`}>
          Накладные расходы
        </td>
        <td className={`table__data value`}>
          Сметная прибыль
        </td>
      </tr>
    </thead>
  )
}