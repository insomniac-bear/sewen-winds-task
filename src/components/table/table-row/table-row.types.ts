import { IRow } from "../../../services/types";

export interface ITableData {
  data: IRow | null;
  level: number;
  isRowEdit?: boolean;
}
