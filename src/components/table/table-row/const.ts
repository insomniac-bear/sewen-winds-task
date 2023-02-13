import { TField } from "../../../types/field.types";

export const UTIL_ROW_DATA = {
  machineOperatorSalary: 0,
  mimExploitation: 0,
  materials: 0,
  mainCosts: 0,
  supportCosts: 0,
};

export const INITIAL_ROW_DATA = {
  id: 0,
  rowName: '',
  total: 0,
  salary: 0,
  ...UTIL_ROW_DATA,
  equipmentCosts:	0,
  overheads: 0,
  estimatedProfit: 0,
  parentId: null,
  child: [],
};

export const DATA_NAMES: TField[] = ['rowName', 'salary', 'equipmentCosts', 'overheads', 'estimatedProfit'];
