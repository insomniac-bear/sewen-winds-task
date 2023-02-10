import { createSlice } from '@reduxjs/toolkit';
import { createRow } from '../api/api';
import { RootState } from '../configure-store';
// import { IRow } from '../types';
import { IFormState } from './form-state.type';

type TField =
  | 'mainCosts'
  | 'equipmentCosts'
  | 'supportCosts'
  | 'estimatedProfit';

const initialState: IFormState = {
  data: {
    equipmentCosts:	0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    parentId: null,
    rowName: '',
    salary: 0,
    supportCosts: 0,
  },
  isEdit: false,
  status: 'idle',
  error: undefined,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    rowValueInput(state, action: { type: any; payload:  {field: TField; value: number}}) {
      state.data[action.payload.field] = Number(action.payload.value);
    },
    rowNameInput(state, action: { type: any; payload: string}) {
      state.data.rowName = action.payload;
    },
    rowDataInitial(state, action: {
      type: string;
      payload: {
        rowName: string;
        mainCosts: number;
        equipmentCosts: number;
        supportCosts: number;
        estimatedProfit: number;
      }
    }) {
      state.data.rowName = action.payload.rowName;
      state.data.mainCosts = action.payload.mainCosts;
      state.data.equipmentCosts = action.payload.equipmentCosts;
      state.data.supportCosts = action.payload.supportCosts;
      state.data.estimatedProfit = action.payload.estimatedProfit;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createRow.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createRow.fulfilled, (state, action) => {
        state.status = 'successed';
        console.log(action.payload);
      })
      .addCase(createRow.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
});

export const { rowValueInput, rowNameInput, rowDataInitial } = formSlice.actions;

export const getSendDataStatus = (state: RootState) => state.form.status;
export const getData = (state: RootState) => state.form.data;
