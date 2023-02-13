import { createSlice } from '@reduxjs/toolkit';
import { createRow } from '../api/api';
import { RootState } from '../configure-store';
import { IFormState } from './form-state.type';

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
  },
  extraReducers(builder) {
    builder
      .addCase(createRow.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createRow.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
      })
      .addCase(createRow.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
});

export const getSendDataStatus = (state: RootState) => state.form.status;
export const getData = (state: RootState) => state.form.data;
